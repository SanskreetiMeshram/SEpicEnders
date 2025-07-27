import React from 'react';
import { Box, Circle, User, Zap, Coins, Layers, Car, TreePine, Mountain, Trophy, Shield, Heart, Target, Upload, Download, Image, Volume2, Palette, Sparkles } from 'lucide-react';

interface ObjectPanelProps {
  onAddObject: (type: string) => void;
}

const ObjectPanel: React.FC<ObjectPanelProps> = ({ onAddObject }) => {
  const objectTypes = [
    { type: 'cube', icon: <Box className="w-5 h-5" />, name: 'Cube', color: 'bg-blue-500' },
    { type: 'sphere', icon: <Circle className="w-5 h-5" />, name: 'Sphere', color: 'bg-green-500' },
    { type: 'player', icon: <User className="w-5 h-5" />, name: 'Player', color: 'bg-yellow-500' },
    { type: 'enemy', icon: <Zap className="w-5 h-5" />, name: 'Enemy', color: 'bg-red-500' },
    { type: 'coin', icon: <Coins className="w-5 h-5" />, name: 'Coin', color: 'bg-yellow-600' },
    { type: 'platform', icon: <Layers className="w-5 h-5" />, name: 'Platform', color: 'bg-gray-500' },
    { type: 'car', icon: <Car className="w-5 h-5" />, name: 'Car', color: 'bg-purple-500' },
    { type: 'tree', icon: <TreePine className="w-5 h-5" />, name: 'Tree', color: 'bg-green-600' },
    { type: 'terrain', icon: <Mountain className="w-5 h-5" />, name: 'Terrain', color: 'bg-amber-600' },
    { type: 'finish', icon: <Trophy className="w-5 h-5" />, name: 'Finish Line', color: 'bg-emerald-500' },
    { type: 'powerup', icon: <Shield className="w-5 h-5" />, name: 'Power-up', color: 'bg-cyan-500' },
    { type: 'health', icon: <Heart className="w-5 h-5" />, name: 'Health Pack', color: 'bg-pink-500' },
    { type: 'target', icon: <Target className="w-5 h-5" />, name: 'Target', color: 'bg-orange-500' }
  ];

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold text-white mb-4">Game Objects</h3>
      
      <div className="space-y-2">
        {objectTypes.map((obj) => (
          <button
            key={obj.type}
            onClick={() => onAddObject(obj.type)}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-colors group"
          >
            <div className={`p-2 rounded ${obj.color} group-hover:scale-110 transition-transform`}>
              {obj.icon}
            </div>
            <span>{obj.name}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-6">
        <h4 className="text-md font-medium text-white mb-3">AI Generated Assets</h4>
        <div className="space-y-2">
          <button 
            onClick={() => {
              const editorAssets = JSON.parse(localStorage.getItem('editorAssets') || '[]');
              if (editorAssets.length > 0) {
                showAssetModal(editorAssets);
              } else {
                alert('No AI generated assets found. Visit the AI Generator to create some!');
              }
            }}
            className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Use AI Assets
          </button>
          <button 
            onClick={() => document.getElementById('file-input')?.click()}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Import Assets
          </button>
        </div>
        
        {/* Hidden file input */}
        <input
          id="file-input"
          type="file"
          multiple
          accept="image/*,audio/*,.obj,.fbx,.gltf"
          style={{ display: 'none' }}
          onChange={(e) => handleFileImport(e)}
        />
      </div>

      <div className="mt-6">
        <h4 className="text-md font-medium text-white mb-3">Quick Actions</h4>
        <div className="space-y-2">
          <button 
            onClick={() => {
              // Add a complete level setup
              onAddObject('platform');
              onAddObject('player');
              onAddObject('coin');
              onAddObject('enemy');
              onAddObject('finish');
            }}
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
          >
            🎮 Create Basic Level
          </button>
          <button 
            onClick={() => {
              // Add racing setup
              onAddObject('car');
              onAddObject('terrain');
              onAddObject('finish');
            }}
            className="w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
          >
            🏁 Racing Setup
          </button>
          <button 
            onClick={() => {
              // Add puzzle setup
              onAddObject('cube');
              onAddObject('target');
              onAddObject('powerup');
            }}
            className="w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors"
          >
            🧩 Puzzle Setup
          </button>
        </div>
      </div>
    </div>
  );
  
  function showAssetModal(assets: any[]) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold text-white">AI Generated Assets</h3>
          <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white">✕</button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          ${assets.map((asset, index) => `
            <div class="bg-gray-700 rounded-lg p-3 cursor-pointer hover:bg-gray-600 transition-colors" onclick="useAsset(${index})">
              ${asset.type === 'image' || asset.type === 'texture' ? 
                `<img src="${asset.url}" alt="${asset.name}" class="w-full h-24 object-cover rounded mb-2">` :
                `<div class="w-full h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded mb-2 flex items-center justify-center text-white">
                  ${asset.type === 'sound' ? '🔊' : asset.type === 'model' ? '📦' : '🎨'}
                </div>`
              }
              <div class="text-white text-sm font-medium">${asset.name}</div>
              <div class="text-gray-400 text-xs">${asset.type}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add global function to use asset
    (window as any).useAsset = (index: number) => {
      const asset = assets[index];
      // Create object with asset applied
      const objectType = asset.type === 'sound' ? 'cube' : asset.type === 'model' ? 'cube' : 'cube';
      onAddObject(objectType);
      
      // Apply asset to the newly created object (this would need to be handled by the parent component)
      setTimeout(() => {
        const event = new CustomEvent('applyAsset', { detail: { asset, objectType } });
        window.dispatchEvent(event);
      }, 100);
      
      modal.remove();
    };
  }
  
  function handleFileImport(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files) return;
    
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        
        // Determine asset type
        let assetType = 'image';
        if (file.type.startsWith('audio/')) assetType = 'sound';
        else if (file.name.endsWith('.obj') || file.name.endsWith('.fbx') || file.name.endsWith('.gltf')) assetType = 'model';
        
        // Store imported asset
        const importedAsset = {
          id: Date.now().toString() + Math.random(),
          name: file.name,
          type: assetType, // 'image'
          url: result,     // base64 data URL
          prompt: 'Imported from file',
          createdAt: new Date()
        };
        
        const editorAssets = JSON.parse(localStorage.getItem('editorAssets') || '[]');
        editorAssets.push(importedAsset);
        localStorage.setItem('editorAssets', JSON.stringify(editorAssets)); // ✅ This line

        const customEvent = new CustomEvent('applyAsset', {
        detail: { asset: importedAsset }
        });
        window.dispatchEvent(customEvent);

        // Show success message
        const message = document.createElement('div');
        message.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50';
        message.textContent = `${file.name} imported successfully!`;
        document.body.appendChild(message);
        setTimeout(() => document.body.removeChild(message), 2000);
      };
      
      reader.readAsDataURL(file);
    });
    
    // Reset input
    e.target.value = '';
  }
};

export default ObjectPanel;
