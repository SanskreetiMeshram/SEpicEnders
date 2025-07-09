import React, { useState } from 'react';
import { File, Edit, Eye, HelpCircle, Settings, Save, FolderOpen, Download, Upload, Undo, Redo } from 'lucide-react';

interface MenuBarProps {
  currentView: string;
  onViewChange: (view: 'templates' | 'editor' | 'projects' | 'ai-generator') => void;
  onSettingsClick: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ currentView, onViewChange, onSettingsClick }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = {
    file: [
      { 
        label: 'New Project', 
        icon: <File className="w-4 h-4" />, 
        shortcut: 'Ctrl+N',
        action: () => onViewChange('templates')
      },
      { 
        label: 'Open Project', 
        icon: <FolderOpen className="w-4 h-4" />, 
        shortcut: 'Ctrl+O',
        action: () => onViewChange('projects')
      },
      { 
        label: 'Save Project', 
        icon: <Save className="w-4 h-4" />, 
        shortcut: 'Ctrl+S',
        action: () => {
          // Trigger save in current editor
          const event = new CustomEvent('saveProject');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Export Game', 
        icon: <Download className="w-4 h-4" />, 
        shortcut: 'Ctrl+E',
        action: () => {
          // Trigger export in current editor
          const event = new CustomEvent('exportGame');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Import Assets', 
        icon: <Upload className="w-4 h-4" />, 
        shortcut: 'Ctrl+I',
        action: () => onViewChange('ai-generator')
      }
    ],
    edit: [
      { 
        label: 'Undo', 
        icon: <Undo className="w-4 h-4" />, 
        shortcut: 'Ctrl+Z',
        action: () => {
          const event = new CustomEvent('undo');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Redo', 
        icon: <Redo className="w-4 h-4" />, 
        shortcut: 'Ctrl+Y',
        action: () => {
          const event = new CustomEvent('redo');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Copy Object', 
        icon: <Edit className="w-4 h-4" />, 
        shortcut: 'Ctrl+C',
        action: () => {
          const event = new CustomEvent('copyObject');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Paste Object', 
        icon: <Edit className="w-4 h-4" />, 
        shortcut: 'Ctrl+V',
        action: () => {
          const event = new CustomEvent('pasteObject');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Delete Object', 
        icon: <Edit className="w-4 h-4" />, 
        shortcut: 'Delete',
        action: () => {
          const event = new CustomEvent('deleteObject');
          window.dispatchEvent(event);
        }
      }
    ],
    view: [
      { 
        label: 'Game Templates', 
        action: () => onViewChange('templates')
      },
      { 
        label: 'Game Editor', 
        action: () => onViewChange('editor')
      },
      { 
        label: 'My Projects', 
        action: () => onViewChange('projects')
      },
      { 
        label: 'AI Generator', 
        action: () => onViewChange('ai-generator')
      },
      { 
        label: 'Toggle 2D/3D', 
        shortcut: 'Tab',
        action: () => {
          const event = new CustomEvent('toggleView');
          window.dispatchEvent(event);
        }
      },
      { 
        label: 'Fullscreen', 
        shortcut: 'F11',
        action: () => {
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
        }
      }
    ],
    help: [
      { 
        label: 'Getting Started',
        action: () => {
          window.open('https://github.com/epicenders/docs/getting-started', '_blank');
        }
      },
      { 
        label: 'Keyboard Shortcuts',
        action: () => {
          alert(`Keyboard Shortcuts:
          
🎮 General:
• Ctrl+N - New Project
• Ctrl+O - Open Project  
• Ctrl+S - Save Project
• Ctrl+E - Export Game
• Tab - Toggle 2D/3D View
• F11 - Fullscreen

✏️ Editor:
• Ctrl+Z - Undo
• Ctrl+Y - Redo
• Ctrl+C - Copy Object
• Ctrl+V - Paste Object
• Delete - Delete Object
• Double-click - Reposition Object

🎯 Game Controls:
• WASD/Arrow Keys - Move
• Space - Jump/Action
• Mouse - Click/Select`);
        }
      },
      { 
        label: 'Video Tutorials',
        action: () => {
          window.open('https://youtube.com/epicenders', '_blank');
        }
      },
      { 
        label: 'Community Forum',
        action: () => {
          window.open('https://discord.gg/epicenders', '_blank');
        }
      },
      { 
        label: 'Report Bug',
        action: () => {
          window.open('https://github.com/epicenders/issues', '_blank');
        }
      },
      { 
        label: 'About EpicEnders',
        action: () => {
          alert(`EpicEnders v1.0
          
🎮 The Ultimate No-Code Game Development Platform

Create professional games without writing a single line of code! 

✨ Features:
• Visual drag-and-drop editor
• AI-powered asset generation
• 12+ game templates
• Real-time physics simulation
• Export to HTML for sharing
• Professional game mechanics

Made with ❤️ by the EpicEnders Team
© 2024 EpicEnders. All rights reserved.`);
        }
      }
    ]
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleMenuItemClick = (item: any) => {
    if (item.action) {
      item.action();
    }
    setActiveMenu(null);
  };

  // Add keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'n':
            e.preventDefault();
            onViewChange('templates');
            break;
          case 'o':
            e.preventDefault();
            onViewChange('projects');
            break;
          case 's':
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('saveProject'));
            break;
          case 'e':
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('exportGame'));
            break;
          case 'i':
            e.preventDefault();
            onViewChange('ai-generator');
            break;
        }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('toggleView'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onViewChange]);

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4 z-50">
      <div className="flex items-center space-x-1">
        {Object.entries(menuItems).map(([menu, items]) => (
          <div key={menu} className="relative">
            <button
              onClick={() => handleMenuClick(menu)}
              className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 transition-colors ${
                activeMenu === menu ? 'bg-gray-700' : ''
              }`}
            >
              {menu === 'file' && <File className="w-4 h-4" />}
              {menu === 'edit' && <Edit className="w-4 h-4" />}
              {menu === 'view' && <Eye className="w-4 h-4" />}
              {menu === 'help' && <HelpCircle className="w-4 h-4" />}
              <span className="capitalize font-medium">{menu}</span>
            </button>
            
            {activeMenu === menu && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                {items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleMenuItemClick(item)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.shortcut && (
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {item.shortcut}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded font-medium">
          {currentView === 'templates' && '🎮 Game Templates'}
          {currentView === 'editor' && '🛠️ Game Editor'}
          {currentView === 'projects' && '📁 My Projects'}
          {currentView === 'ai-generator' && '🤖 AI Generator'}
        </div>
        <button
          onClick={onSettingsClick}
          className="p-2 rounded hover:bg-gray-700 transition-colors"
          title="Settings"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
      
      {/* Click outside to close menu */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </div>
  );
};

export default MenuBar;