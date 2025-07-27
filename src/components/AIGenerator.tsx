import React, { useState } from 'react';
import { Wand2, Link, Download, Image, Music, Box, Palette, Play, Volume2, FileImage, Sparkles } from 'lucide-react';

interface GeneratedAsset {
  id: string;
  name: string;
  type: 'image' | 'sound' | 'model' | 'texture';
  url: string;
  prompt: string;
  createdAt: Date;
  downloadUrl?: string;
}

const AIGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [url, setUrl] = useState('');
  const [assetType, setAssetType] = useState<'image' | 'sound' | 'model' | 'texture'>('image');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAssets, setGeneratedAssets] = useState<GeneratedAsset[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation with realistic assets
    setTimeout(() => {
      const newAsset: GeneratedAsset = {
        id: Date.now().toString(),
        name: `AI Generated ${assetType}`,
        type: assetType,
        url: getAssetUrl(assetType, prompt),
        prompt,
        createdAt: new Date(),
        downloadUrl: generateDownloadableAsset(assetType, prompt)
      };
      
      setGeneratedAssets([newAsset, ...generatedAssets]);
      setIsGenerating(false);
      setPrompt('');
    }, 2000);
  };

  const handleUrlImport = async () => {
    if (!url.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate URL import
    setTimeout(() => {
      const newAsset: GeneratedAsset = {
        id: Date.now().toString(),
        name: 'Imported Asset',
        type: detectAssetType(url),
        url,
        prompt: 'Imported from URL',
        createdAt: new Date(),
        downloadUrl: url
      };
      
      setGeneratedAssets([newAsset, ...generatedAssets]);
      setIsGenerating(false);
      setUrl('');
    }, 1000);
  };

  const detectAssetType = (url: string): 'image' | 'sound' | 'model' | 'texture' => {
    if (url.includes('.mp3') || url.includes('.wav') || url.includes('.ogg')) return 'sound';
    if (url.includes('.obj') || url.includes('.fbx') || url.includes('.gltf')) return 'model';
    return 'image';
  };

  const getAssetUrl = (type: string, prompt: string) => {
    const assetUrls = {
      image: [
        'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      sound: [
        'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        'https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav',
        'https://www.soundjay.com/misc/sounds/success-fanfare-trumpets.wav'
      ],
      model: [
        'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      texture: [
        'https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    };
    
    const urls = assetUrls[type as keyof typeof assetUrls] || assetUrls.image;
    return urls[Math.floor(Math.random() * urls.length)];
  };

  const generateDownloadableAsset = (type: string, prompt: string): string => {
    // Generate downloadable content based on type
    switch (type) {
      case 'image':
        return generateImageData(prompt);
      case 'sound':
        return generateSoundData(prompt);
      case 'model':
        return generateModelData(prompt);
      case 'texture':
        return generateTextureData(prompt);
      default:
        return '';
    }
  };

  const generateImageData = (prompt: string): string => {
    // Create a simple colored canvas based on prompt
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d')!;
    
    // Generate color based on prompt
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
    const color = colors[prompt.length % colors.length];
    
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 400, 400);
    
    // Add some pattern
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    for (let i = 0; i < 10; i++) {
      ctx.fillRect(i * 40, i * 40, 20, 20);
    }
    
    return canvas.toDataURL();
  };

  const generateSoundData = (prompt: string): string => {
    // Generate a simple audio data URL (placeholder)
    return 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
  };

  const generateModelData = (prompt: string): string => {
    // Generate a simple OBJ file content
    const objContent = `# AI Generated Model: ${prompt}
v 0.0 0.0 0.0
v 1.0 0.0 0.0
v 1.0 1.0 0.0
v 0.0 1.0 0.0
v 0.0 0.0 1.0
v 1.0 0.0 1.0
v 1.0 1.0 1.0
v 0.0 1.0 1.0
f 1 2 3 4
f 5 8 7 6
f 1 5 6 2
f 2 6 7 3
f 3 7 8 4
f 5 1 4 8`;
    
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(objContent);
  };

  const generateTextureData = (prompt: string): string => {
    // Create a texture pattern
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Generate pattern based on prompt
    const baseColor = `hsl(${prompt.length * 10 % 360}, 70%, 50%)`;
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 256, 256);
    
    // Add texture pattern
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for (let x = 0; x < 256; x += 16) {
      for (let y = 0; y < 256; y += 16) {
        if ((x + y) % 32 === 0) {
          ctx.fillRect(x, y, 8, 8);
        }
      }
    }
    
    return canvas.toDataURL();
  };

  const downloadAsset = (asset: GeneratedAsset) => {
    if (!asset.downloadUrl) return;
    
    const link = document.createElement('a');
    link.href = asset.downloadUrl;
    link.download = `${asset.name.replace(/\s+/g, '_')}.${getFileExtension(asset.type)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileExtension = (type: string): string => {
    switch (type) {
      case 'image': return 'png';
      case 'sound': return 'wav';
      case 'model': return 'obj';
      case 'texture': return 'png';
      default: return 'txt';
    }
  };

  const useInEditor = (asset: GeneratedAsset) => {
    // Store asset for use in editor
    const editorAssets = JSON.parse(localStorage.getItem('editorAssets') || '[]');
    editorAssets.push(asset);
    localStorage.setItem('editorAssets', JSON.stringify(editorAssets));
    
    // Show success message
    const message = document.createElement('div');
    message.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg z-50';
    message.textContent = 'Asset added to editor!';
    document.body.appendChild(message);
    setTimeout(() => document.body.removeChild(message), 2000);
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-5 h-5" />;
      case 'sound':
        return <Music className="w-5 h-5" />;
      case 'model':
        return <Box className="w-5 h-5" />;
      case 'texture':
        return <Palette className="w-5 h-5" />;
      default:
        return <Image className="w-5 h-5" />;
    }
  };

  const previewAsset = (asset: GeneratedAsset) => {
    if (asset.type === 'sound') {
      const audio = new Audio(asset.url);
      audio.play().catch(() => {
        // Fallback for audio preview
        alert('Audio preview not available');
      });
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            AI Asset Generator
          </h2>
          <p className="text-gray-400">Generate and download game assets using AI prompts or import from URLs</p>
        </div>

        {/* Generation Controls */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="space-y-6">
            {/* Asset Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Asset Type</label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { type: 'image', icon: <FileImage className="w-5 h-5" />, label: 'Image' },
                  { type: 'sound', icon: <Volume2 className="w-5 h-5" />, label: 'Sound' },
                  { type: 'model', icon: <Box className="w-5 h-5" />, label: '3D Model' },
                  { type: 'texture', icon: <Palette className="w-5 h-5" />, label: 'Texture' }
                ].map((item) => (
                  <button
                    key={item.type}
                    onClick={() => setAssetType(item.type as any)}
                    className={`flex items-center justify-center gap-2 p-4 rounded-lg transition-all ${
                      assetType === item.type
                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Prompt Generation */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">AI Prompt</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={`Describe the ${assetType} you want to generate...`}
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                />
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim()}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                >
                  <Wand2 className="w-5 h-5" />
                  {isGenerating ? 'Generating...' : 'Generate'}
                </button>
              </div>
            </div>

            {/* URL Import */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Import from URL</label>
              <div className="flex gap-3">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste URL to import asset..."
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                />
                <button
                  onClick={handleUrlImport}
                  disabled={isGenerating || !url.trim()}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                >
                  <Link className="w-5 h-5" />
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Generated Assets */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Generated Assets</h3>
          
          {generatedAssets.length === 0 ? (
            <div className="text-center py-16 bg-gray-800 rounded-lg">
              <div className="text-gray-400 text-xl mb-4">No assets generated yet</div>
              <p className="text-gray-500">Use the AI generator or import from URLs to create assets</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {generatedAssets.map((asset) => (
                <div key={asset.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                  <div className="relative">
                    {asset.type === 'image' || asset.type === 'texture' || asset.type === 'model' ? (
                      <img
                        src={asset.url}
                        alt={asset.name}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <div className="text-center">
                          {getAssetIcon(asset.type)}
                          <span className="block mt-2 text-white font-medium">Audio Asset</span>
                          {asset.type === 'sound' && (
                            <button
                              onClick={() => previewAsset(asset)}
                              className="mt-2 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                            >
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-xs font-medium">
                      {asset.type.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2 truncate">{asset.name}</h4>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{asset.prompt}</p>
                    <p className="text-gray-500 text-xs mb-4">
                      Created: {asset.createdAt.toLocaleDateString()} {asset.createdAt.toLocaleTimeString()}
                    </p>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => useInEditor(asset)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors text-sm font-medium"
                      >
                        <Box className="w-4 h-4" />
                        Use in Editor
                      </button>
                      <button 
                        onClick={() => downloadAsset(asset)}
                        className="p-2 text-green-400 hover:text-green-300 hover:bg-green-900 rounded transition-colors"
                        title="Download Asset"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Templates */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Generate</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { prompt: 'Medieval sword weapon', type: 'image' },
              { prompt: 'Explosion sound effect', type: 'sound' },
              { prompt: 'Stone brick wall texture', type: 'texture' },
              { prompt: 'Simple tree 3D model', type: 'model' }
            ].map((template, index) => (
              <button
                key={index}
                onClick={() => {
                  setPrompt(template.prompt);
                  setAssetType(template.type as any);
                }}
                className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-left transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  {getAssetIcon(template.type)}
                  <span className="text-sm font-medium text-gray-300">{template.type}</span>
                </div>
                <p className="text-sm text-gray-400">{template.prompt}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGenerator;
