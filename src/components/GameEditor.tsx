import React, { useState, useRef } from 'react';
import { Play, Save, Download, RotateCcw, Move, RotateCw, Settings, Layers, Palette, Music as Physics, Zap, Trophy } from 'lucide-react';
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
}

const GameEditor: React.FC<GameEditorProps> = ({ selectedTemplate, editingProject, onSave }) => {
  const [gameObjects, setGameObjects] = useState<GameObject[]>([
    {
      id: '1',
      name: 'Player',
      type: 'player',
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: '#3b82f6',
      physics: true,
      collision: true,
      behavior: 'player'
    },
    {
      id: '2',
      name: 'Platform',
      type: 'platform',
      position: { x: 0, y: 2, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 3, y: 0.2, z: 1 },
      color: '#6b7280',
      physics: false,
      collision: true,
      behavior: 'static'
    },
    {
      id: '3',
      name: 'Coin',
      type: 'coin',
      position: { x: 2, y: -1, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      color: '#fbbf24',
      physics: false,
      collision: true,
      behavior: 'collectible'
    },
    {
      id: '4',
      name: 'Enemy',
      type: 'enemy',
      position: { x: -2, y: -1, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 0.8, y: 0.8, z: 0.8 },
      color: '#ef4444',
      physics: true,
      collision: true,
      behavior: 'enemy'
    },
    {
      id: '5',
      name: 'Finish Line',
      type: 'finish',
      position: { x: 4, y: -1, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 0.5, y: 2, z: 1 },
      color: '#10b981',
      physics: false,
      collision: true,
      behavior: 'finish'
    }
  ]);
  
  const [selectedObject, setSelectedObject] = useState<GameObject | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<'2D' | '3D'>('3D');
  const canvasRef = useRef<HTMLDivElement>(null);

  // Load AI generated assets
  React.useEffect(() => {
    const editorAssets = JSON.parse(localStorage.getItem('editorAssets') || '[]');
    // You can use these assets in the editor
  }, []);

  const addObject = (type: string) => {
    const newObject: GameObject = {
      id: Date.now().toString(),
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} ${gameObjects.length + 1}`,
      type,
      position: { x: Math.random() * 4 - 2, y: Math.random() * 2 - 1, z: Math.random() * 4 - 2 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      physics: type === 'cube' || type === 'sphere' || type === 'player' || type === 'enemy',
      collision: true,
      behavior: type === 'player' ? 'player' : type === 'enemy' ? 'enemy' : type === 'coin' ? 'collectible' : type === 'finish' ? 'finish' : 'static'
    };
    setGameObjects([...gameObjects, newObject]);
  };

  const updateObject = (id: string, updates: Partial<GameObject>) => {
    setGameObjects(gameObjects.map(obj => 
      obj.id === id ? { ...obj, ...updates } : obj
    ));
  };

  const deleteObject = (id: string) => {
    setGameObjects(gameObjects.filter(obj => obj.id !== id));
    if (selectedObject?.id === id) {
      setSelectedObject(null);
    }
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
        <div class="absolute top-4 right-4 z-10">
          <button onclick="this.closest('.fixed').remove()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium text-lg">
            Stop Game
          </button>
        </div>
        <iframe src="data:text/html;charset=utf-8,${encodeURIComponent(gameHTML)}" 
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
        .health-bar {
            position: absolute;
            top: -12px;
            left: 0;
            width: 100%;
            height: 6px;
            background: rgba(255,255,255,0.3);
            border-radius: 3px;
        }
        .health-fill {
            height: 100%;
            background: linear-gradient(90deg, #10b981, #34d399);
            border-radius: 3px;
            transition: width 0.3s;
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
    </style>
</head>
<body>
    <div id="game-container">
        <div id="game-canvas"></div>
        <div id="ui">
            <div>🏆 Score: <span id="score">0</span></div>
            <div>❤️ Health: <span id="health">100</span></div>
            <div>🪙 Coins: <span id="coins">0</span></div>
            <div>⏱️ Time: <span id="time">0</span>s</div>
        </div>
        <div id="controls">
            <div><strong>Controls:</strong></div>
            <div>🎮 WASD or Arrow Keys: Move</div>
            <div>🚀 Space: Jump</div>
            <div>🎯 Collect coins and reach the finish line!</div>
        </div>
        <div id="result">
            <h2 id="result-title">🎉 Victory! 🎉</h2>
            <p id="result-message">Congratulations on completing the level!</p>
            <p>Final Score: <span id="final-score">0</span></p>
            <p>Coins Collected: <span id="final-coins">0</span></p>
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
        let gameRunning = true;
        let player = null;
        let objects = [];
        let keys = {};
        let startTime = Date.now();
        let camera = { x: 0, y: 0 };
        let particles = [];

        function initGame() {
            const canvas = document.getElementById('game-canvas');
            
            gameData.objects.forEach(objData => {
                const obj = document.createElement('div');
                obj.className = 'object ' + objData.type;
                obj.style.width = (objData.scale.x * 50) + 'px';
                obj.style.height = (objData.scale.y * 50) + 'px';
                obj.style.left = (objData.position.x * 50 + window.innerWidth / 2) + 'px';
                obj.style.top = (window.innerHeight / 2 - objData.position.y * 50) + 'px';
                obj.style.backgroundColor = objData.color;
                obj.style.transform = \`rotateX(\${objData.rotation.x}deg) rotateY(\${objData.rotation.y}deg) rotateZ(\${objData.rotation.z}deg)\`;
                
                // Add health bar for enemies
                if (objData.type === 'enemy') {
                    const healthBar = document.createElement('div');
                    healthBar.className = 'health-bar';
                    const healthFill = document.createElement('div');
                    healthFill.className = 'health-fill';
                    healthBar.appendChild(healthFill);
                    obj.appendChild(healthBar);
                }
                
                canvas.appendChild(obj);
                
                const gameObj = {
                    element: obj,
                    data: objData,
                    velocity: { x: 0, y: 0 },
                    health: objData.type === 'enemy' ? 100 : 0,
                    collected: false
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

        function gameLoop() {
            if (!gameRunning) return;
            
            updatePlayer();
            updateEnemies();
            updateCamera();
            checkCollisions();
            
            requestAnimationFrame(gameLoop);
        }

        function updatePlayer() {
            if (!player) return;
            
            const speed = 6;
            let moved = false;
            
            // Player movement with smooth acceleration
            if (keys['a'] || keys['arrowleft']) {
                player.velocity.x = Math.max(player.velocity.x - 0.5, -speed);
                moved = true;
            } else if (keys['d'] || keys['arrowright']) {
                player.velocity.x = Math.min(player.velocity.x + 0.5, speed);
                moved = true;
            } else {
                player.velocity.x *= 0.85; // Smooth deceleration
            }
            
            if (keys['w'] || keys['arrowup'] || keys[' ']) {
                if (Math.abs(player.velocity.y) < 1) { // Only jump if not already jumping
                    player.velocity.y = -18; // Higher jump
                }
            }
            
            // Apply gravity
            player.velocity.y += 0.8;
            
            // Update position
            const newX = parseInt(player.element.style.left) + player.velocity.x;
            const newY = parseInt(player.element.style.top) + player.velocity.y;
            
            // Platform collision with better physics
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
                    
                    // Top collision (landing on platform)
                    if (px + pw > ox && px < ox + ow && 
                        py + ph > oy && py + ph < oy + oh + 15 &&
                        player.velocity.y > 0) {
                        player.element.style.top = (oy - ph) + 'px';
                        player.velocity.y = 0;
                        onPlatform = true;
                    }
                    // Side collisions
                    else if (py + ph > oy && py < oy + oh) {
                        if (px + pw > ox && px + pw < ox + ow/2 && player.velocity.x > 0) {
                            player.element.style.left = (ox - pw) + 'px';
                            player.velocity.x = 0;
                        } else if (px < ox + ow && px > ox + ow/2 && player.velocity.x < 0) {
                            player.element.style.left = (ox + ow) + 'px';
                            player.velocity.x = 0;
                        }
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
                if (obj.data.behavior === 'enemy') {
                    // Enhanced AI: patrol and chase
                    if (player) {
                        const px = parseInt(player.element.style.left);
                        const py = parseInt(player.element.style.top);
                        const ex = parseInt(obj.element.style.left);
                        const ey = parseInt(obj.element.style.top);
                        
                        const dx = px - ex;
                        const dy = py - ey;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance > 80 && distance < 200) {
                            // Chase player
                            const speed = 2.5;
                            obj.element.style.left = (ex + (dx / distance) * speed) + 'px';
                            obj.element.style.top = (ey + (dy / distance) * speed) + 'px';
                        } else if (distance <= 80) {
                            // Patrol behavior when close
                            if (!obj.patrolDirection) obj.patrolDirection = Math.random() < 0.5 ? -1 : 1;
                            obj.element.style.left = (ex + obj.patrolDirection * 1) + 'px';
                            
                            if (Math.random() < 0.02) {
                                obj.patrolDirection *= -1;
                            }
                        }
                    }
                }
            });
        }

        function updateCamera() {
            if (!player) return;
            
            const px = parseInt(player.element.style.left);
            const py = parseInt(player.element.style.top);
            
            // Smooth camera following
            const targetX = px - window.innerWidth / 2;
            const targetY = py - window.innerHeight / 2;
            
            camera.x += (targetX - camera.x) * 0.1;
            camera.y += (targetY - camera.y) * 0.1;
            
            // Apply camera offset to all objects except player
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
                                
                                // Create collection particles
                                for (let i = 0; i < 5; i++) {
                                    setTimeout(() => {
                                        createParticle(ox + ow/2, oy + oh/2, '#fbbf24');
                                    }, i * 50);
                                }
                            }
                            break;
                            
                        case 'enemy':
                            health -= 15;
                            document.getElementById('health').textContent = Math.max(0, health);
                            
                            // Create damage particles
                            createParticle(px + pw/2, py + ph/2, '#ef4444');
                            
                            if (health <= 0) {
                                endGame('💀 Game Over!', 'You were defeated by an enemy!');
                            }
                            
                            // Push player away with more force
                            const dx = px - ox;
                            const dy = py - oy;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            if (distance > 0) {
                                const pushForce = 60;
                                player.element.style.left = (px + (dx / distance) * pushForce) + 'px';
                                player.element.style.top = (py + (dy / distance) * pushForce) + 'px';
                                player.velocity.y = -10; // Bounce up
                            }
                            break;
                            
                        case 'finish':
                            const timeTaken = Math.floor((Date.now() - startTime) / 1000);
                            const timeBonus = Math.max(0, 300 - timeTaken);
                            score += timeBonus;
                            
                            // Create victory particles
                            for (let i = 0; i < 10; i++) {
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
            document.getElementById('final-time').textContent = timeTaken;
            
            if (title.includes('🏆')) {
                resultDiv.className = 'victory';
            }
            
            resultDiv.style.display = 'block';
        }

        function restartGame() {
            location.reload();
        }

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

  const handleDoubleClick = (obj: GameObject, e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = (0.5 - (e.clientY - rect.top) / rect.height) * 10;
      updateObject(obj.id, { position: { ...obj.position, x, y } });
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
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode(viewMode === '2D' ? '3D' : '2D')}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
            >
              {viewMode} View
            </button>
            <div className="text-sm text-gray-400">
              Double-click objects to reposition
            </div>
          </div>
        </div>
        
        {/* Canvas Area */}
        <div className="flex-1 relative bg-gradient-to-b from-blue-400 to-green-400 overflow-hidden">
          <div
            ref={canvasRef}
            className="w-full h-full relative cursor-move"
            style={{ perspective: viewMode === '3D' ? '1000px' : 'none' }}
          >
            {gameObjects.map((obj) => (
              <div
                key={obj.id}
                className={`absolute cursor-pointer transition-all duration-200 ${
                  selectedObject?.id === obj.id ? 'ring-4 ring-yellow-400' : ''
                }`}
                style={{
                  left: `${obj.position.x * 50 + 50}%`,
                  top: `${50 - obj.position.y * 50}%`,
                  width: `${obj.scale.x * 50}px`,
                  height: `${obj.scale.y * 50}px`,
                  backgroundColor: obj.color,
                  transform: `rotateX(${obj.rotation.x}deg) rotateY(${obj.rotation.y}deg) rotateZ(${obj.rotation.z}deg)`,
                  borderRadius: obj.type === 'sphere' || obj.type === 'coin' ? '50%' : '6px',
                  border: obj.physics ? '3px solid rgba(255, 255, 0, 0.4)' : 'none',
                  boxShadow: viewMode === '3D' ? '0 6px 12px rgba(0,0,0,0.3)' : 'none',
                  zIndex: obj.type === 'player' ? 10 : 1
                }}
                onClick={() => setSelectedObject(obj)}
                onDoubleClick={(e) => handleDoubleClick(obj, e)}
              >
                <div className="absolute -top-8 left-0 text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">
                  {obj.name}
                </div>
                {obj.type === 'finish' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                )}
                {obj.type === 'coin' && (
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    $
                  </div>
                )}
              </div>
            ))}
            
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