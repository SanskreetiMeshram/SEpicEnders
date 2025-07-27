import React from 'react';
import { Trash2, Move, RotateCw, Maximize, Palette, Music as Physics, Zap, Settings, Eye, EyeOff } from 'lucide-react';

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

interface PropertiesPanelProps {
  selectedObject: GameObject | null;
  onObjectUpdate: (id: string, updates: Partial<GameObject>) => void;
  onObjectDelete: (id: string) => void;
}

const PropertiesPanel: React.FC<PropertiesPanelProps> = ({ selectedObject, onObjectUpdate, onObjectDelete }) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  if (!selectedObject) {
    return (
      <div className="w-80 bg-gray-800 border-l border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Properties</h3>
        <div className="text-center py-8">
          <div className="text-gray-400 text-6xl mb-4">🎯</div>
          <p className="text-gray-400">Select an object to view and edit its properties</p>
          <p className="text-gray-500 text-sm mt-2">Double-click objects in the editor to reposition them</p>
        </div>
      </div>
    );
  }

  const behaviors = [
    'static', 'player', 'enemy', 'collectible', 'moving', 'rotating', 
    'bouncing', 'following', 'patrolling', 'finish', 'powerup', 'destructible'
  ];

  const presetColors = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', 
    '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6b7280'
  ];

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 p-4 overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Properties</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
            title="Toggle Advanced Properties"
          >
            {showAdvanced ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onObjectDelete(selectedObject.id)}
            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900 rounded transition-colors"
            title="Delete Object"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Object Info */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Object Info</span>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={selectedObject.name}
                onChange={(e) => onObjectUpdate(selectedObject.id, { name: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Type</label>
              <div className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 text-sm">
                {selectedObject.type}
              </div>
            </div>
          </div>
        </div>

        {/* Transform */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Move className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Position</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-gray-400 mb-1">X</label>
              <input
                type="number"
                step="0.1"
                value={selectedObject.position.x.toFixed(1)}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  position: { ...selectedObject.position, x: parseFloat(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Y</label>
              <input
                type="number"
                step="0.1"
                value={selectedObject.position.y.toFixed(1)}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  position: { ...selectedObject.position, y: parseFloat(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Z</label>
              <input
                type="number"
                step="0.1"
                value={selectedObject.position.z.toFixed(1)}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  position: { ...selectedObject.position, z: parseFloat(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Rotation */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <RotateCw className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-gray-300">Rotation</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-gray-400 mb-1">X</label>
              <input
                type="number"
                value={selectedObject.rotation.x}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  rotation: { ...selectedObject.rotation, x: parseFloat(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Y</label>
              <input
                type="number"
                value={selectedObject.rotation.y}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  rotation: { ...selectedObject.rotation, y: parseFloat(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Z</label>
              <input
                type="number"
                value={selectedObject.rotation.z}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  rotation: { ...selectedObject.rotation, z: parseFloat(e.target.value) || 0 }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Maximize className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Scale</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block text-xs text-gray-400 mb-1">X</label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={selectedObject.scale.x.toFixed(1)}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  scale: { ...selectedObject.scale, x: Math.max(0.1, parseFloat(e.target.value) || 1) }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Y</label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={selectedObject.scale.y.toFixed(1)}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  scale: { ...selectedObject.scale, y: Math.max(0.1, parseFloat(e.target.value) || 1) }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Z</label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                value={selectedObject.scale.z.toFixed(1)}
                onChange={(e) => onObjectUpdate(selectedObject.id, {
                  scale: { ...selectedObject.scale, z: Math.max(0.1, parseFloat(e.target.value) || 1) }
                })}
                className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-gray-300">Appearance</span>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-2">Color</label>
              <div className="flex gap-2 mb-2">
                {presetColors.map(color => (
                  <button
                    key={color}
                    onClick={() => onObjectUpdate(selectedObject.id, { color })}
                    className={`w-6 h-6 rounded border-2 ${
                      selectedObject.color === color ? 'border-white' : 'border-gray-600'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <input
                type="color"
                value={selectedObject.color}
                onChange={(e) => onObjectUpdate(selectedObject.id, { color: e.target.value })}
                className="w-full h-10 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Physics & Behavior */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Physics className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-gray-300">Physics & Behavior</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-300">Enable Physics</label>
              <input
                type="checkbox"
                checked={selectedObject.physics}
                onChange={(e) => onObjectUpdate(selectedObject.id, { physics: e.target.checked })}
                className="rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-300">Collision Detection</label>
              <input
                type="checkbox"
                checked={selectedObject.collision}
                onChange={(e) => onObjectUpdate(selectedObject.id, { collision: e.target.checked })}
                className="rounded"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Behavior</label>
              <select
                value={selectedObject.behavior}
                onChange={(e) => onObjectUpdate(selectedObject.id, { behavior: e.target.value })}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                {behaviors.map(behavior => (
                  <option key={behavior} value={behavior}>
                    {behavior.charAt(0).toUpperCase() + behavior.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Advanced Properties */}
        {showAdvanced && (
          <div className="bg-gray-750 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Advanced</span>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Mass</label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  defaultValue="1.0"
                  className="w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-white text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Friction</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  defaultValue="0.5"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1">Bounce</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  defaultValue="0.3"
                  className="w-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-300">Visible</label>
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-300">Kinematic</label>
                <input
                  type="checkbox"
                  className="rounded"
                />
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="bg-gray-750 p-3 rounded-lg">
          <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Actions</h4>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onObjectUpdate(selectedObject.id, {
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 },
                scale: { x: 1, y: 1, z: 1 }
              })}
              className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs transition-colors"
            >
              Reset Transform
            </button>
            <button
              onClick={() => {
                const newObject = { ...selectedObject, id: Date.now().toString(), name: `${selectedObject.name} Copy` };
                // This would need to be handled by the parent component
              }}
              className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors"
            >
              Duplicate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
