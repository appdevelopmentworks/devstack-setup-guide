import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ManualViewer } from './components/ManualViewer';
import { HomeView } from './components/HomeView';
import { manuals } from './data/manuals';
import { IconMenu } from './components/Icons';

function App() {
  // Default to null (Home screen)
  const [selectedManualId, setSelectedManualId] = useState<string | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const selectedManual = manuals.find(m => m.id === selectedManualId);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      
      {/* Sidebar */}
      <Sidebar 
        selectedManualId={selectedManualId}
        onSelectManual={setSelectedManualId}
        isOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 z-30 flex-shrink-0">
          <button 
            onClick={() => setSelectedManualId(null)}
            className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600"
          >
            DevStack
          </button>
          <button 
            onClick={() => setIsMobileSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <IconMenu className="w-6 h-6" />
          </button>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-hide">
          {selectedManual ? (
            <ManualViewer manual={selectedManual} onSelectManual={setSelectedManualId} />
          ) : (
            <HomeView manuals={manuals} onSelectManual={setSelectedManualId} />
          )}
        </div>

      </main>
    </div>
  );
}

export default App;