import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Plus, Trash2 } from 'lucide-react';

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

interface Keyframe {
  id: string;
  time: number;
  property: string;
  value: any;
}

interface AnimationTimelineProps {
  objects: GameObject[];
  selectedObject: GameObject | null;
  onObjectUpdate: (id: string, updates: Partial<GameObject>) => void;
}

const AnimationTimeline: React.FC<AnimationTimelineProps> = ({ objects, selectedObject, onObjectUpdate }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(10);
  const [keyframes, setKeyframes] = useState<Keyframe[]>([]);

  const addKeyframe = (property: string) => {
    if (!selectedObject) return;
    
    const newKeyframe: Keyframe = {
      id: Date.now().toString(),
      time: currentTime,
      property,
      value: selectedObject[property as keyof GameObject]
    };
    
    setKeyframes([...keyframes, newKeyframe]);
  };

  const removeKeyframe = (id: string) => {
    setKeyframes(keyframes.filter(k => k.id !== id));
  };

  const playAnimation = () => {
    setIsPlaying(!isPlaying);
    // Animation logic would go here
  };

  return (
    <div className="h-64 bg-gray-800 border-t border-gray-700 flex flex-col">
      {/* Timeline Controls */}
      <div className="h-12 bg-gray-750 border-b border-gray-700 flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentTime(0)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={playAnimation}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setCurrentTime(duration)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">
            {currentTime.toFixed(1)}s / {duration}s
          </span>
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex-1 flex">
        {/* Properties Panel */}
        <div className="w-48 bg-gray-800 border-r border-gray-700 p-2">
          <h4 className="text-sm font-medium text-white mb-2">Properties</h4>
          {selectedObject && (
            <div className="space-y-1">
              {['position', 'rotation', 'scale', 'color'].map(prop => (
                <div key={prop} className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{prop}</span>
                  <button
                    onClick={() => addKeyframe(prop)}
                    className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeline Track */}
        <div className="flex-1 relative overflow-x-auto">
          <div className="h-full bg-gray-900 relative">
            {/* Timeline ruler */}
            <div className="h-8 bg-gray-750 border-b border-gray-700 relative">
              {Array.from({ length: duration + 1 }, (_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 border-l border-gray-600"
                  style={{ left: `${(i / duration) * 100}%` }}
                >
                  <span className="absolute top-1 left-1 text-xs text-gray-400">{i}s</span>
                </div>
              ))}
            </div>

            {/* Current time indicator */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 z-10"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            />

            {/* Keyframes */}
            <div className="p-2 space-y-2">
              {keyframes.map((keyframe) => (
                <div
                  key={keyframe.id}
                  className="relative h-6 bg-gray-700 rounded flex items-center"
                >
                  <div
                    className="absolute w-3 h-3 bg-blue-500 rounded-full cursor-pointer"
                    style={{ left: `${(keyframe.time / duration) * 100}%` }}
                  />
                  <span className="ml-2 text-xs text-gray-300">{keyframe.property}</span>
                  <button
                    onClick={() => removeKeyframe(keyframe.id)}
                    className="ml-auto mr-2 p-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationTimeline;