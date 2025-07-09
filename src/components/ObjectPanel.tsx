import React from 'react';
import { Box, Circle, User, Zap, Coins, Layers, Car, TreePine, Mountain, Trophy, Shield, Heart, Target } from 'lucide-react';

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
        <h4 className="text-md font-medium text-white mb-3">Asset Categories</h4>
        <div className="space-y-2">
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            🎨 Textures & Materials
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            🔊 Sound Effects
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            🎵 Background Music
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            🏗️ 3D Models
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            ⚡ Particle Effects
          </button>
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            🌍 Environments
          </button>
        </div>
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
};

export default ObjectPanel;