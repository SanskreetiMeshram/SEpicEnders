import React, { useState, useRef, useEffect } from 'react';
import { Play, Save, Download, RotateCcw, Move, RotateCw, Settings, Layers, Palette, Music as Physics, Zap, Trophy, Pause, SkipBack } from 'lucide-react';
import ObjectPanel from './ObjectPanel';
import PropertiesPanel from './PropertiesPanel';

interface GameEditorProps {
  selectedTemplate: string | null;
  editingProject: any;
  onSave: (project: any) => void;
}

interface GameObject {
  id: string;
  name: string;
  type: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  color: string;
  physics: boolean;
  collision: boolean;
  behavior: string;
  texture?: string;
  sound?: string;
  model?: string;
  health?: number;
  speed?: number;
}

const GameEditor: React.FC<GameEditorProps> = ({ selectedTemplate, editingProject, onSave }) => {
  const [gameObjects, setGameObjects] = useState<GameObject[]>([]);
  const [selectedObject, setSelectedObject] = useState<GameObject | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('3D');
  const [draggedObject, setDraggedObject] = useState<GameObject | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // Load template data when editing a template
  useEffect(() => {
    if (selectedTemplate && editingProject) {
      // Load the template's game objects
      const templateData = getTemplateData(selectedTemplate);
      if (templateData) {
        setGameObjects(templateData.objects || []);
      }
    }
  }, [selectedTemplate, editingProject]);

  // Load AI generated assets and apply them to objects
  // === Apply AI/Imported assets to the selected (or last created) object ===
useEffect(() => {
  const handler = (e: any) => {
    const { asset } = e.detail || {};
    if (!asset) return;

    // Prefer currently selected object, else last one created
    const target = selectedObject || gameObjects[gameObjects.length - 1];
    if (!target) return;

    const updates: Partial<GameObject> = {};
    switch (asset.type) {
      case 'image':
      case 'texture':
        updates.texture = asset.url;
        break;
      case 'sound':
        updates.sound = asset.url;
        break;
      case 'model':
        updates.model = asset.url;
        break;
    }

    updateObject(target.id, updates);
  };

  window.addEventListener('applyAsset', handler);
  return () => window.removeEventListener('applyAsset', handler);
}, [selectedObject, gameObjects]);


  // Enhanced keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPlaying) return; // Only allow controls during play mode
      
      switch (e.key.toLowerCase()) {
        case 'delete':
          if (selectedObject) {
            deleteObject(selectedObject.id);
          }
          break;
        case 'c':
          if (e.ctrlKey && selectedObject) {
            duplicateObject(selectedObject);
          }
          break;
        case 'z':
          if (e.ctrlKey) {
            // Undo functionality
            e.preventDefault();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedObject, isPlaying]);

  const getTemplateData = (templateId: string) => {
    const templates = {
      'racing-game': {
        objects: [
          { id: '1', name: 'Race Car', type: 'car', position: { x: -4, y: -2, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1.2, y: 0.8, z: 1 }, color: '#ff4444', physics: true, collision: true, behavior: 'player', speed: 8 },
          { id: '2', name: 'Track', type: 'platform', position: { x: 0, y: -3, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 12, y: 0.2, z: 2 }, color: '#444444', physics: false, collision: true, behavior: 'static' },
          { id: '3', name: 'Obstacle 1', type: 'cube', position: { x: 2, y: -2, z: 0 }, rotation: { x: 0, y: 45, z: 0 }, scale: { x: 0.8, y: 0.8, z: 0.8 }, color: '#8b4513', physics: false, collision: true, behavior: 'static' },
          { id: '4', name: 'Speed Boost', type: 'powerup', position: { x: 4, y: -2, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.6, y: 0.6, z: 0.6 }, color: '#00ff00', physics: false, collision: true, behavior: 'powerup' },
          { id: '5', name: 'Finish Line', type: 'finish', position: { x: 6, y: -2, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.5, y: 3, z: 2 }, color: '#ffff00', physics: false, collision: true, behavior: 'finish' }
        ]
      },
      'puzzle-game': {
        objects: [
          { id: '1', name: 'Player Block', type: 'cube', position: { x: -3, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, color: '#3b82f6', physics: true, collision: true, behavior: 'player', speed: 4 },
          { id: '2', name: 'Target 1', type: 'target', position: { x: 0, y: 1, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, color: '#ff6b6b', physics: false, collision: true, behavior: 'target' },
          { id: '3', name: 'Target 2', type: 'target', position: { x: 2, y: -1, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, color: '#ff6b6b', physics: false, collision: true, behavior: 'target' },
          { id: '4', name: 'Movable Block', type: 'cube', position: { x: 1, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 1, y: 1, z: 1 }, color: '#10b981', physics: true, collision: true, behavior: 'movable' },
          { id: '5', name: 'Wall', type: 'platform', position: { x: 3, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 90 }, scale: { x: 3, y: 0.3, z: 1 }, color: '#6b7280', physics: false, collision: true, behavior: 'static' }
        ]
      },
      'flappy-bird': {
        objects: [
          { id: '1', name: 'Bird', type: 'player', position: { x: -3, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 0.8, z: 0.8 }, color: '#ffff00', physics: true, collision: true, behavior: 'player', speed: 0 },
          { id: '2', name: 'Pipe Top 1', type: 'platform', position: { x: 2, y: 2, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 3, z: 1 }, color: '#228b22', physics: false, collision: true, behavior: 'static' },
          { id: '3', name: 'Pipe Bottom 1', type: 'platform', position: { x: 2, y: -3, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 3, z: 1 }, color: '#228b22', physics: false, collision: true, behavior: 'static' },
          { id: '4', name: 'Pipe Top 2', type: 'platform', position: { x: 5, y: 1, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.8, y: 3, z: 1 }, color: '#228b22', physics: false, collision: true, behavior: 'static' },
          { id: '5', name: 'Score Zone', type: 'coin', position: { x: 2, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 }, scale: { x: 0.1, y: 4, z: 1 }, color: 'transparent', physics: false, collision: true, behavior: 'collectible' }
        ]
      }
      // Add more templates as needed
    };
    return templates[templateId as keyof typeof templates];
  };

  // Listen for custom events from MenuBar
  useEffect(() => {
    const handleSaveProject = () => handleSave();
    const handleExportGame = () => handleExport();
    const handleToggleView = () => setViewMode(viewMode === '2D' ? '3D' : '2D');

    window.addEventListener('saveProject', handleSaveProject);
    window.addEventListener('exportGame', handleExportGame);
    window.addEventListener('toggleView', handleToggleView);

    return () => {
      window.removeEventListener('saveProject', handleSaveProject);
      window.removeEventListener('exportGame', handleExportGame);
      window.removeEventListener('toggleView', handleToggleView);
    };
  }, [viewMode]);

  const addObject = (type: string) => {
    const newObject: GameObject = {
      id: Date.now().toString(),
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${gameObjects.length + 1}`,
      type,
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: getDefaultColor(type),
      physics: ['player', 'enemy', 'cube', 'sphere'].includes(type),
      collision: true,
      behavior: getBehaviorForType(type),
      speed: type === 'player' ? 5 : type === 'enemy' ? 2 : 0,
      health: type === 'player' ? 100 : type === 'enemy' ? 50 : 0
    };
    setGameObjects([...gameObjects, newObject]);
    setSelectedObject(newObject);
  };

  const getDefaultColor = (type: string): string => {
    const colors = {
      player: '#3b82f6',
      enemy: '#ef4444',
      coin: '#fbbf24',
      platform: '#6b7280',
      finish: '#10b981',
      cube: '#8b5cf6',
      sphere: '#ec4899',
      powerup: '#06b6d4',
      health: '#f59e0b'
    };
    return colors[type as keyof typeof colors] || '#6b7280';
  };

  const getBehaviorForType = (type: string): string => {
    const behaviors = {
      player: 'player',
      enemy: 'enemy',
      coin: 'collectible',
      finish: 'finish',
      powerup: 'powerup',
      health: 'health',
      platform: 'static'
    };
    return behaviors[type as keyof typeof behaviors] || 'static';
  };

  const updateObject = (id: string, updates: Partial<GameObject>) => {
    setGameObjects(gameObjects.map(obj => 
      obj.id === id ? { ...obj, ...updates } : obj
    ));
    if (selectedObject?.id === id) {
      setSelectedObject({ ...selectedObject, ...updates });
    }
  };

  const deleteObject = (id: string) => {
    setGameObjects(gameObjects.filter(obj => obj.id !== id));
    if (selectedObject?.id === id) {
      setSelectedObject(null);
    }
  };

  const duplicateObject = (obj: GameObject) => {
    const newObject: GameObject = {
      ...obj,
      id: Date.now().toString(),
      name: `${obj.name} Copy`,
      position: { 
        x: obj.position.x + 1, 
        y: obj.position.y, 
        z: obj.position.z 
      }
    };
    setGameObjects([...gameObjects, newObject]);
    setSelectedObject(newObject);
  };

  const handlePlayTest = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      showGameModal();
    }
  };

  const showGameModal = () => {
    const gameHTML = generatePlayableGame();
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="relative w-full h-full max-w-7xl max-h-[95vh] bg-gray-900 rounded-lg overflow-hidden">
        <div class="absolute top-4 right-4 z-10 flex gap-2">
          <button onclick="document.getElementById('game-frame').contentWindow.postMessage('restartGame', '*')" 
                  class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
            🔄 Restart
          </button>
          <button onclick="this.closest('.fixed').remove()" 
                  class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-lg">
            ❌ Stop Game
          </button>
        </div>
        <iframe id="game-frame" src="data:text/html;charset=utf-8,${encodeURIComponent(gameHTML)}" 
                class="w-full h-full border-none"></iframe>
      </div>
    `;
    
    document.body.appendChild(modal);
  };

  const generatePlayableGame = () => {
    const gameData = {
      objects: gameObjects,
      settings: { viewMode },
      metadata: {
        name: editingProject?.name || 'My Game',
        type: viewMode,
        createdAt: new Date().toISOString()
      }
    };

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${editingProject?.name || 'My Game'}</title>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
            overflow: hidden; 
            font-family: 'Arial', sans-serif; 
        }
        #game-container { 
            width: 100vw; 
            height: 100vh; 
            position: relative; 
        }
        #game-canvas { 
            width: 100%; 
            height: 100%; 
            background: linear-gradient(to bottom, #87CEEB, #98FB98); 
            position: relative;
        }
        #ui { 
            position: absolute; 
            top: 20px; 
            left: 20px; 
            color: white; 
            z-index: 100; 
            background: rgba(0,0,0,0.8);
            padding: 20px;
            border-radius: 15px;
            font-size: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        #controls { 
            position: absolute; 
            bottom: 20px; 
            left: 20px; 
            color: white; 
            z-index: 100; 
            background: rgba(0,0,0,0.8);
            padding: 15px;
            border-radius: 12px;
            font-size: 16px;
        }
        #result { 
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            padding: 50px; 
            border-radius: 25px; 
            color: white; 
            text-align: center; 
            display: none; 
            z-index: 200;
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            min-width: 400px;
            border: 3px solid rgba(255,255,255,0.2);
        }
        #result.victory {
            background: linear-gradient(135deg, #10b981, #34d399);
        }
        #result h2 { 
            margin-top: 0; 
            font-size: 36px; 
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3); 
            margin-bottom: 20px;
        }
        #result button { 
            background: white; 
            color: #ff6b6b; 
            border: none; 
            padding: 18px 36px; 
            border-radius: 30px; 
            font-size: 20px; 
            font-weight: bold;
            cursor: pointer; 
            margin: 15px;
            transition: all 0.3s;
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }
        #result button:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        .object { 
            position: absolute; 
            transition: all 0.1s ease; 
            border-radius: 6px;
            user-select: none;
        }
        .player { 
            background: #3b82f6; 
            box-shadow: 0 6px 12px rgba(59, 130, 246, 0.4);
            border: 2px solid rgba(255,255,255,0.3);
        }
        .enemy { 
            background: #ef4444; 
            box-shadow: 0 6px 12px rgba(239, 68, 68, 0.4);
            border: 2px solid rgba(255,255,255,0.2);
        }
        .coin { 
            background: #fbbf24; 
            border-radius: 50%; 
            box-shadow: 0 6px 12px rgba(251, 191, 36, 0.4);
            animation: spin 2s linear infinite, glow 1s ease-in-out infinite alternate;
        }
        .platform { 
            background: #6b7280; 
            box-shadow: 0 4px 8px rgba(107, 114, 128, 0.4);
            border-top: 3px solid #9ca3af;
        }
        .finish { 
            background: linear-gradient(45deg, #10b981, #34d399); 
            box-shadow: 0 6px 12px rgba(16, 185, 129, 0.4);
            animation: pulse 1s ease-in-out infinite alternate;
        }
        .powerup { 
            background: #06b6d4; 
            border-radius: 50%; 
            box-shadow: 0 6px 12px rgba(6, 182, 212, 0.4);
            animation: bounce 1s ease-in-out infinite alternate;
        }
        .health { 
            background: #f59e0b; 
            border-radius: 50%; 
            box-shadow: 0 6px 12px rgba(245, 158, 11, 0.4);
            animation: heartbeat 1.5s ease-in-out infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes pulse {
            from { opacity: 0.7; transform: scale(1); }
            to { opacity: 1; transform: scale(1.05); }
        }
        @keyframes glow {
            from { box-shadow: 0 6px 12px rgba(251, 191, 36, 0.4); }
            to { box-shadow: 0 6px 20px rgba(251, 191, 36, 0.8); }
        }
        @keyframes bounce {
            from { transform: translateY(0px); }
            to { transform: translateY(-10px); }
        }
        @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        .bullet {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #ffd700;
            border-radius: 50%;
            box-shadow: 0 0 10px #ffd700;
        }
        .particle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            animation: particle-float 1s ease-out forwards;
        }
        @keyframes particle-float {
            0% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0) translateY(-50px); }
        }
        .damage-text {
            position: absolute;
            color: #ff4444;
            font-weight: bold;
            font-size: 18px;
            pointer-events: none;
            animation: damage-float 1s ease-out forwards;
        }
        @keyframes damage-float {
            0% { opacity: 1; transform: translateY(0px); }
            100% { opacity: 0; transform: translateY(-30px); }
        }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="game-canvas"></div>
        <div id="ui">
            <div>🏆 Score: <span id="score">0</span></div>
            <div>❤️ Health: <span id="health">100</span></div>
            <div>🪙 Coins: <span id="coins">0</span></div>
            <div>⚡ Power: <span id="power">0</span></div>
            <div>⏱️ Time: <span id="time">0</span>s</div>
        </div>
        <div id="controls">
            <div><strong>🎮 Controls:</strong></div>
            <div>🏃 WASD/Arrow Keys: Move</div>
            <div>🚀 Space: Jump</div>
            <div>🔫 G: Shoot</div>
            <div>🎯 Collect items and reach the finish!</div>
        </div>
        <div id="result">
            <h2 id="result-title">🎉 Victory! 🎉</h2>
            <p id="result-message">Congratulations on completing the level!</p>
            <p>Final Score: <span id="final-score">0</span></p>
            <p>Coins Collected: <span id="final-coins">0</span></p>
            <p>Power-ups Used: <span id="final-power">0</span></p>
            <p>Time: <span id="final-time">0</span>s</p>
            <button onclick="restartGame()">🎮 Play Again</button>
            <button onclick="window.parent.postMessage('close', '*')">❌ Close</button>
        </div>
    </div>

    <script>
        const gameData = ${JSON.stringify(gameData)};
        let score = 0;
        let health = 100;
        let coins = 0;
        let power = 0;
        let gameRunning = true;
        let player = null;
        let objects = [];
        let bullets = [];
        let keys = {};
        let startTime = Date.now();
        let camera = { x: 0, y: 0 };

        function initGame() {
            const canvas = document.getElementById('game-canvas');
            
            gameData.objects.forEach(objData => {
                const obj = document.createElement('div');
                obj.className = 'object ' + objData.type;
                obj.style.width = (objData.scale.x * 50) + 'px';
                obj.style.height = (objData.scale.y * 50) + 'px';
                obj.style.position = 'absolute';
                obj.style.left = (objData.position.x * 50 + window.innerWidth / 2) + 'px';
                obj.style.top = (window.innerHeight / 2 - objData.position.y * 50) + 'px';
                if (
  objData.texture &&
  (objData.texture.startsWith('data:image') || objData.texture.startsWith('http'))
) {
  obj.style.backgroundImage = "url('" + objData.texture + "')";
  obj.style.backgroundSize = 'cover';
  obj.style.backgroundPosition = 'center';
  obj.style.backgroundRepeat = 'no-repeat';
  obj.style.backgroundColor = 'transparent';
} else {
  obj.style.backgroundImage = 'none';
  obj.style.backgroundColor = objData.color || 'gray';
}

                canvas.appendChild(obj);
                
                const gameObj = {
                    element: obj,
                    data: objData,
                    velocity: { x: 0, y: 0 },
                    health: objData.health || 0,
                    collected: false,
                    lastShot: 0
                };
                
                objects.push(gameObj);
                
                if (objData.behavior === 'player') {
                    player = gameObj;
                }
            });
            
            document.addEventListener('keydown', (e) => keys[e.key.toLowerCase()] = true);
            document.addEventListener('keyup', (e) => keys[e.key.toLowerCase()] = false);
            
            gameLoop();
            updateTimer();
        }

        function updateTimer() {
            if (!gameRunning) return;
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            document.getElementById('time').textContent = elapsed;
            setTimeout(updateTimer, 1000);
        }
            function playObjectSound(objData) {
  if (!objData.sound) return;

  const audio = new Audio(objData.sound);
  audio.loop = true;
  audio.volume = 0.8;
  audio.play().catch(err => {
    console.warn("Audio play error:", err);
  });
}


        function createParticle(x, y, color = '#ffd700') {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = color;
            document.getElementById('game-canvas').appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }

        function createDamageText(x, y, damage) {
            const text = document.createElement('div');
            text.className = 'damage-text';
            text.textContent = '-' + damage;
            text.style.left = x + 'px';
            text.style.top = y + 'px';
            document.getElementById('game-canvas').appendChild(text);
            
            setTimeout(() => {
                if (text.parentNode) {
                    text.parentNode.removeChild(text);
                }
            }, 1000);
        }

        function shoot() {
            if (!player || Date.now() - player.lastShot < 200) return;
            
            player.lastShot = Date.now();
            const px = parseInt(player.element.style.left);
            const py = parseInt(player.element.style.top);
            const pw = parseInt(player.element.style.width);
            const ph = parseInt(player.element.style.height);
            
            const bullet = document.createElement('div');
            bullet.className = 'bullet';
            bullet.style.left = (px + pw/2) + 'px';
            bullet.style.top = (py + ph/2) + 'px';
            document.getElementById('game-canvas').appendChild(bullet);
            
            bullets.push({
                element: bullet,
                velocity: { x: 10, y: 0 },
                damage: 25
            });
        }

        function updateBullets() {
            bullets.forEach((bullet, index) => {
                const x = parseInt(bullet.element.style.left);
                const y = parseInt(bullet.element.style.top);
                
                bullet.element.style.left = (x + bullet.velocity.x) + 'px';
                bullet.element.style.top = (y + bullet.velocity.y) + 'px';
                
                // Remove bullets that go off screen
                if (x > window.innerWidth || x < 0 || y > window.innerHeight || y < 0) {
                    bullet.element.remove();
                    bullets.splice(index, 1);
                    return;
                }
                
                // Check bullet collisions with enemies
                objects.forEach(obj => {
                    if (obj.data.behavior === 'enemy' && !obj.collected) {
                        const ox = parseInt(obj.element.style.left);
                        const oy = parseInt(obj.element.style.top);
                        const ow = parseInt(obj.element.style.width);
                        const oh = parseInt(obj.element.style.height);
                        
                        if (x > ox && x < ox + ow && y > oy && y < oy + oh) {
                            // Hit enemy
                            obj.health -= bullet.damage;
                            createDamageText(ox + ow/2, oy, bullet.damage);
                            createParticle(ox + ow/2, oy + oh/2, '#ff4444');
                            
                            bullet.element.remove();
                            bullets.splice(index, 1);
                            
                            if (obj.health <= 0) {
                                obj.collected = true;
                                obj.element.style.display = 'none';
                                score += 200;
                                document.getElementById('score').textContent = score;
                                
                                // Create explosion particles
                                for (let i = 0; i < 8; i++) {
                                    setTimeout(() => {
                                        createParticle(
                                            ox + Math.random() * ow, 
                                            oy + Math.random() * oh, 
                                            '#ff4444'
                                        );
                                    }, i * 50);
                                }
                            }
                        }
                    }
                });
            });
        }

        function gameLoop() {
            if (!gameRunning) return;
            
            updatePlayer();
            updateEnemies();
            updateBullets();
            updateCamera();
            checkCollisions();
            
            requestAnimationFrame(gameLoop);
        }

        function updatePlayer() {
            if (!player) return;
            
            const speed = player.data.speed || 6;
            let moved = false;
            
            // Player movement
            if (keys['a'] || keys['arrowleft']) {
                player.velocity.x = Math.max(player.velocity.x - 0.5, -speed);
                moved = true;
            } else if (keys['d'] || keys['arrowright']) {
                player.velocity.x = Math.min(player.velocity.x + 0.5, speed);
                moved = true;
            } else {
                player.velocity.x *= 0.85;
            }
            
            if (keys['w'] || keys['arrowup'] || keys[' ']) {
                if (Math.abs(player.velocity.y) < 1) {
                    player.velocity.y = -18;
                }
            }
            
            // Shooting
            if (keys['g']) {
                shoot();
            }
            
            // Apply gravity
            player.velocity.y += 0.8;
            
            // Update position
            const newX = parseInt(player.element.style.left) + player.velocity.x;
            const newY = parseInt(player.element.style.top) + player.velocity.y;
            
            // Platform collision
            let onPlatform = false;
            objects.forEach(obj => {
                if (obj.data.type === 'platform' && obj !== player) {
                    const px = parseInt(player.element.style.left);
                    const py = parseInt(player.element.style.top);
                    const pw = parseInt(player.element.style.width);
                    const ph = parseInt(player.element.style.height);
                    const ox = parseInt(obj.element.style.left);
                    const oy = parseInt(obj.element.style.top);
                    const ow = parseInt(obj.element.style.width);
                    const oh = parseInt(obj.element.style.height);
                    
                    if (px + pw > ox && px < ox + ow && 
                        py + ph > oy && py + ph < oy + oh + 15 &&
                        player.velocity.y > 0) {
                        player.element.style.top = (oy - ph) + 'px';
                        player.velocity.y = 0;
                        onPlatform = true;
                    }
                }
            });
            
            if (!onPlatform) {
                player.element.style.top = Math.min(newY, window.innerHeight - parseInt(player.element.style.height)) + 'px';
            }
            
            player.element.style.left = Math.max(0, Math.min(window.innerWidth - parseInt(player.element.style.width), newX)) + 'px';
        }

        function updateEnemies() {
            objects.forEach(obj => {
                if (obj.data.behavior === 'enemy' && !obj.collected) {
                    if (player) {
                        const px = parseInt(player.element.style.left);
                        const py = parseInt(player.element.style.top);
                        const ex = parseInt(obj.element.style.left);
                        const ey = parseInt(obj.element.style.top);
                        
                        const dx = px - ex;
                        const dy = py - ey;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance > 80 && distance < 200) {
                            const speed = obj.data.speed || 2.5;
                            obj.element.style.left = (ex + (dx / distance) * speed) + 'px';
                            obj.element.style.top = (ey + (dy / distance) * speed) + 'px';
                        }
                    }
                }
            });
        }

        function updateCamera() {
            if (!player) return;
            
            const px = parseInt(player.element.style.left);
            const py = parseInt(player.element.style.top);
            
            const targetX = px - window.innerWidth / 2;
            const targetY = py - window.innerHeight / 2;
            
            camera.x += (targetX - camera.x) * 0.1;
            camera.y += (targetY - camera.y) * 0.1;
            
            objects.forEach(obj => {
                if (obj !== player) {
                    const originalX = obj.data.position.x * 50 + window.innerWidth / 2;
                    const originalY = window.innerHeight / 2 - obj.data.position.y * 50;
                    
                    obj.element.style.left = (originalX - camera.x) + 'px';
                    obj.element.style.top = (originalY - camera.y) + 'px';
                }
            });
        }

        function checkCollisions() {
            if (!player) return;
            
            const px = parseInt(player.element.style.left);
            const py = parseInt(player.element.style.top);
            const pw = parseInt(player.element.style.width);
            const ph = parseInt(player.element.style.height);
            
            objects.forEach(obj => {
                if (obj === player || obj.collected) return;
                
                const ox = parseInt(obj.element.style.left);
                const oy = parseInt(obj.element.style.top);
                const ow = parseInt(obj.element.style.width);
                const oh = parseInt(obj.element.style.height);
                
                if (px < ox + ow && px + pw > ox && 
                    py < oy + oh && py + ph > oy) {
                    
                    switch (obj.data.behavior) {
                        case 'collectible':
                            if (!obj.collected) {
                                obj.collected = true;
                                obj.element.style.display = 'none';
                                coins++;
                                score += 100;
                                document.getElementById('coins').textContent = coins;
                                document.getElementById('score').textContent = score;
                                
                                for (let i = 0; i < 5; i++) {
                                    setTimeout(() => {
                                        createParticle(ox + ow/2, oy + oh/2, '#fbbf24');
                                    }, i * 50);
                                }
                            }
                            break;
                            
                        case 'powerup':
                            if (!obj.collected) {
                                obj.collected = true;
                                obj.element.style.display = 'none';
                                power++;
                                score += 150;
                                document.getElementById('power').textContent = power;
                                document.getElementById('score').textContent = score;
                                
                                for (let i = 0; i < 8; i++) {
                                    setTimeout(() => {
                                        createParticle(ox + ow/2, oy + oh/2, '#06b6d4');
                                    }, i * 30);
                                }
                            }
                            break;
                            
                        case 'health':
                            if (!obj.collected) {
                                obj.collected = true;
                                obj.element.style.display = 'none';
                                health = Math.min(100, health + 25);
                                score += 50;
                                document.getElementById('health').textContent = health;
                                document.getElementById('score').textContent = score;
                                
                                for (let i = 0; i < 6; i++) {
                                    setTimeout(() => {
                                        createParticle(ox + ow/2, oy + oh/2, '#f59e0b');
                                    }, i * 40);
                                }
                            }
                            break;
                            
                        case 'enemy':
                            if (!obj.collected) {
                                health -= 15;
                                document.getElementById('health').textContent = Math.max(0, health);
                                createParticle(px + pw/2, py + ph/2, '#ef4444');
                                createDamageText(px + pw/2, py, 15);
                                
                                if (health <= 0) {
                                    endGame('💀 Game Over!', 'You were defeated!');
                                }
                                
                                const dx = px - ox;
                                const dy = py - oy;
                                const distance = Math.sqrt(dx * dx + dy * dy);
                                if (distance > 0) {
                                    const pushForce = 60;
                                    player.element.style.left = (px + (dx / distance) * pushForce) + 'px';
                                    player.element.style.top = (py + (dy / distance) * pushForce) + 'px';
                                    player.velocity.y = -10;
                                }
                            }
                            break;
                            
                        case 'finish':
                            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
                            const timeBonus = Math.max(0, 300 - timeTaken);
                            score += timeBonus;
                            
                            for (let i = 0; i < 15; i++) {
                                setTimeout(() => {
                                    createParticle(
                                        ox + Math.random() * ow, 
                                        oy + Math.random() * oh, 
                                        '#10b981'
                                    );
                                }, i * 100);
                            }
                            
                            endGame('🏆 Victory! 🏆', 'Congratulations! You completed the level!');
                            break;
                    }
                }
            });
        }

        function endGame(title, message) {
            gameRunning = false;
            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
            const resultDiv = document.getElementById('result');
            
            document.getElementById('result-title').textContent = title;
            document.getElementById('result-message').textContent = message;
            document.getElementById('final-score').textContent = score;
            document.getElementById('final-coins').textContent = coins;
            document.getElementById('final-power').textContent = power;
            document.getElementById('final-time').textContent = timeTaken;
            
            if (title.includes('🏆')) {
                resultDiv.className = 'victory';
            }
            
            resultDiv.style.display = 'block';
        }

        function restartGame() {
            // Reset all game variables
            score = 0;
            health = 100;
            coins = 0;
            power = 0;
            gameRunning = true;
            player = null;
            objects = [];
            bullets = [];
            keys = {};
            startTime = Date.now();
            camera = { x: 0, y: 0 };
            
            // Clear the canvas
            const canvas = document.getElementById('game-canvas');
            canvas.innerHTML = '';
            
            // Hide result screen
            document.getElementById('result').style.display = 'none';
            
            // Reset UI elements
            document.getElementById('score').textContent = '0';
            document.getElementById('health').textContent = '100';
            document.getElementById('coins').textContent = '0';
            document.getElementById('power').textContent = '0';
            document.getElementById('time').textContent = '0';
            
            // Re-initialize the game
            initGame();
        }
        
        // Listen for messages from parent window
        window.addEventListener('message', function(event) {
            if (event.data === 'restartGame') {
                restartGame();
            }
        });

        window.addEventListener('load', initGame);
    </script>
</body>
</html>`;
  };

  const handleSave = () => {
    if (editingProject) {
      onSave({
        ...editingProject,
        gameObjects,
        lastModified: new Date()
      });
    }
  };

  const handleExport = () => {
    const gameHTML = generatePlayableGame();
    const blob = new Blob([gameHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${editingProject?.name || 'my-game'}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleMouseDown = (obj: GameObject, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedObject(obj);
    setDraggedObject(obj);
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const objElement = e.currentTarget as HTMLElement;
      const objRect = objElement.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - objRect.left,
        y: e.clientY - objRect.top
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedObject && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left - dragOffset.x) / rect.width - 0.5) * 10;
      const y = (0.5 - (e.clientY - rect.top - dragOffset.y) / rect.height) * 10;
      
      updateObject(draggedObject.id, { 
        position: { 
          ...draggedObject.position, 
          x: Math.round(x * 10) / 10, 
          y: Math.round(y * 10) / 10 
        } 
      });
    }
  };

  const handleMouseUp = () => {
    setDraggedObject(null);
    setDragOffset({ x: 0, y: 0 });
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current) {
      setSelectedObject(null);
    }
  };

  return (
    <div className="flex h-full bg-gray-900">
      {/* Object Panel */}
      <ObjectPanel onAddObject={addObject} />
      
      {/* Main Editor */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePlayTest}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
            >
              <Play className="w-5 h-5" />
              Play Test
            </button>
            
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <Save className="w-5 h-5" />
              Save
            </button>
            
            <button
              onClick={handleExport}
              className="flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
            >
              <Download className="w-5 h-5" />
              Export HTML
            </button>
            
            <button
              onClick={() => setGameObjects([])}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Clear All
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode(viewMode === '2D' ? '3D' : '2D')}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
            >
              {viewMode} View
            </button>
            <div className="text-sm text-gray-400">
              Drag objects to reposition • G to shoot • Space to jump
            </div>
          </div>
        </div>
        
        {/* Canvas Area */}
        <div className="flex-1 relative bg-gradient-to-b from-blue-400 to-green-400 overflow-hidden">
          <div
            ref={canvasRef}
            className="w-full h-full relative cursor-crosshair"
            style={{ perspective: viewMode === '3D' ? '1000px' : 'none' }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={handleCanvasClick}
          >
            {gameObjects.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
                  <div className="text-6xl mb-4">🎮</div>
                  <h2 className="text-2xl font-bold mb-2">Blank Canvas Ready!</h2>
                  <p className="text-lg mb-4">Start creating your game by adding objects from the left panel</p>
                  <p className="text-sm opacity-75">Drag objects to position them • Use Play Test to try your game</p>
                </div>
              </div>
            ) : (
              gameObjects.map((obj) => (
                <div
                  key={obj.id}
                  className={`absolute cursor-move transition-all duration-200 ${
                    selectedObject?.id === obj.id ? 'ring-4 ring-yellow-400 ring-opacity-75' : ''
                  } ${draggedObject?.id === obj.id ? 'z-50' : ''}`}
                  style={{
                    left: `${obj.position.x * 50 + 50}%`,
                    top: `${50 - obj.position.y * 50}%`,
                    width: `${obj.scale.x * 50}px`,
                    height: `${obj.scale.y * 50}px`,
                    backgroundColor: obj.color,
                    transform: `rotateX(${obj.rotation.x}deg) rotateY(${obj.rotation.y}deg) rotateZ(${obj.rotation.z}deg)`,
                    borderRadius: obj.type === 'sphere' || obj.type === 'coin' || obj.type === 'powerup' || obj.type === 'health' ? '50%' : '6px',
                    border: obj.physics ? '3px solid rgba(255, 255, 0, 0.4)' : 'none',
                    boxShadow: viewMode === '3D' ? '0 6px 12px rgba(0,0,0,0.3)' : 'none',
                    zIndex: obj.type === 'player' ? 10 : selectedObject?.id === obj.id ? 20 : 1,
                    backgroundImage: obj.texture ? `url(${obj.texture})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  onMouseDown={(e) => handleMouseDown(obj, e)}
                >
                  <div className="absolute -top-8 left-0 text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                    {obj.name}
                  </div>
                  
                  {/* Object Icons */}
                  {obj.type === 'finish' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  )}
                  {obj.type === 'coin' && (
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold pointer-events-none">
                      $
                    </div>
                  )}
                  {obj.type === 'powerup' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                  )}
                  {obj.type === 'health' && (
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold pointer-events-none">
                      ❤️
                    </div>
                  )}
                  
                  {/* Health bar for enemies */}
                  {obj.type === 'enemy' && obj.health && (
                    <div className="absolute -top-3 left-0 w-full h-1 bg-gray-600 rounded">
                      <div 
                        className="h-full bg-red-500 rounded transition-all"
                        style={{ width: `${(obj.health / 50) * 100}%` }}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
            
            {/* Enhanced Grid */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 21 }, (_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 border-l border-white border-opacity-20"
                  style={{ left: `${i * 5}%` }}
                />
              ))}
              {Array.from({ length: 21 }, (_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute left-0 right-0 border-t border-white border-opacity-20"
                  style={{ top: `${i * 5}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Properties Panel */}
      <PropertiesPanel
        selectedObject={selectedObject}
        onObjectUpdate={updateObject}
        onObjectDelete={deleteObject}
      />
    </div>
  );
};

export default GameEditor;
