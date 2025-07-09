import React, { useState } from 'react';
import { Play, Edit, Settings, HelpCircle, File, Eye, Folder } from 'lucide-react';
import GameEditor from './components/GameEditor';
import GameTemplates from './components/GameTemplates';
import ProjectManager from './components/ProjectManager';
import AIGenerator from './components/AIGenerator';
import MenuBar from './components/MenuBar';
import SettingsPanel from './components/SettingsPanel';

type View = 'templates' | 'editor' | 'projects' | 'ai-generator';

interface Project {
  id: string;
  name: string;
  type: '2D' | '3D';
  lastModified: Date;
  thumbnail: string;
}

function App() {
  const [currentView, setCurrentView] = useState<View>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'My Racing Game',
      type: '3D',
      lastModified: new Date(),
      thumbnail: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]);

  const handleTemplateSelect = (templateId: string, mode: 'play' | 'edit') => {
    setSelectedTemplate(templateId);
    if (mode === 'edit') {
      setCurrentView('editor');
    }
  };

  const handleNewProject = (name: string, type: '2D' | '3D') => {
    const newProject: Project = {
      id: Date.now().toString(),
      name,
      type,
      lastModified: new Date(),
      thumbnail: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    setProjects([...projects, newProject]);
    setEditingProject(newProject);
    setCurrentView('editor');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'templates':
        return (
          <GameTemplates
            onTemplateSelect={handleTemplateSelect}
            onNewProject={handleNewProject}
          />
        );
      case 'editor':
        return (
          <GameEditor
            selectedTemplate={selectedTemplate}
            editingProject={editingProject}
            onSave={(project) => {
              setProjects(prev => prev.map(p => p.id === project.id ? project : p));
            }}
          />
        );
      case 'projects':
        return (
          <ProjectManager
            projects={projects}
            onProjectSelect={(project) => {
              setEditingProject(project);
              setCurrentView('editor');
            }}
            onProjectDelete={(id) => {
              setProjects(prev => prev.filter(p => p.id !== id));
            }}
          />
        );
      case 'ai-generator':
        return <AIGenerator />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <MenuBar
        currentView={currentView}
        onViewChange={setCurrentView}
        onSettingsClick={() => setShowSettings(true)}
      />
      
      <div className="flex h-screen pt-12">
        <nav className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
          <div className="p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold text-blue-400">EpicEnders</h1>
            <p className="text-sm text-gray-400">Create Epic Games, No Code Required</p>
          </div>
          
          <div className="flex-1 p-4 space-y-2">
            <button
              onClick={() => setCurrentView('templates')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'templates' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Play className="w-5 h-5" />
              Game Templates
            </button>
            
            <button
              onClick={() => setCurrentView('editor')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'editor' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Edit className="w-5 h-5" />
              Game Editor
            </button>
            
            <button
              onClick={() => setCurrentView('projects')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'projects' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Folder className="w-5 h-5" />
              My Projects
            </button>
            
            <button
              onClick={() => setCurrentView('ai-generator')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === 'ai-generator' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Eye className="w-5 h-5" />
              AI Generator
            </button>
          </div>
        </nav>
        
        <main className="flex-1 overflow-auto">
          {renderCurrentView()}
        </main>
      </div>
      
      {showSettings && (
        <SettingsPanel onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}

export default App;