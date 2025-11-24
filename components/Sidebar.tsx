import React from 'react';
import { manuals } from '../data/manuals';
import { Manual } from '../types';
import { getIcon } from './Icons';

interface SidebarProps {
  selectedManualId: string | null;
  onSelectManual: (id: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ selectedManualId, onSelectManual, isOpen, onCloseMobile }) => {
  // Group manuals by category
  const groupedManuals = manuals.reduce((acc, manual) => {
    if (!acc[manual.category]) {
      acc[manual.category] = [];
    }
    acc[manual.category].push(manual);
    return acc;
  }, {} as Record<string, Manual[]>);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 bg-white border-r border-slate-200 h-full overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 sticky top-0 bg-white z-10 border-b border-slate-100">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight">
            DevStack
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">環境構築 入門マニュアル</p>
        </div>

        <nav className="p-4 space-y-8">
          {Object.entries(groupedManuals).map(([category, items]) => (
            <div key={category}>
              <h3 className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {category}
              </h3>
              <ul className="space-y-1">
                {items.map((manual) => {
                  const Icon = getIcon(manual.icon);
                  const isSelected = selectedManualId === manual.id;
                  
                  return (
                    <li key={manual.id}>
                      <button
                        onClick={() => {
                          onSelectManual(manual.id);
                          onCloseMobile();
                        }}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                          ${isSelected 
                            ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }
                        `}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                        <span>{manual.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className="p-4 mt-auto">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs text-slate-500 text-center leading-relaxed">
                    <strong>DevStack Guide</strong><br/>
                    初心者向け環境構築<br/>
                    v1.0.0
                </p>
            </div>
        </div>
      </aside>
    </>
  );
};
