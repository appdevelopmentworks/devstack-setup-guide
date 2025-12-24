import React from 'react';
import { manuals } from '../data/manuals';
import { Manual } from '../types';
import { getIcon, IconHome } from './Icons';

interface SidebarProps {
  selectedManualId: string | null;
  onSelectManual: (id: string | null) => void;
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-all"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 bg-white border-r border-slate-200 h-full flex flex-col
          transition-transform duration-300 ease-in-out shadow-xl lg:shadow-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-8 border-b border-slate-100">
          <button 
            onClick={() => {
                onSelectManual(null);
                onCloseMobile();
            }}
            className="text-left group"
          >
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tighter group-hover:opacity-80 transition-opacity">
                DevStack
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-bold uppercase tracking-widest">環境構築 入門ガイド</p>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
          {/* Home Link */}
          <div>
            <button
                onClick={() => {
                    onSelectManual(null);
                    onCloseMobile();
                }}
                className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200
                    ${selectedManualId === null 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                    }
                `}
            >
                <IconHome className={`w-5 h-5 ${selectedManualId === null ? 'text-white' : 'text-slate-400'}`} />
                <span>ホーム</span>
            </button>
          </div>

          {Object.entries(groupedManuals).map(([category, items]) => (
            <div key={category}>
              <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                {category}
              </h3>
              <ul className="space-y-1.5">
                {(items as Manual[]).map((manual) => {
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
                          w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                          ${isSelected 
                            ? 'bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 shadow-sm' 
                            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                          }
                        `}
                      >
                        <div className={`p-1.5 rounded-lg transition-colors ${isSelected ? 'bg-indigo-100' : 'bg-transparent group-hover:bg-slate-100'}`}>
                            <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                        </div>
                        <span className="truncate">{manual.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
        
        <div className="p-6 mt-auto border-t border-slate-50">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-indigo-500 opacity-5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Status</p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <p className="text-xs text-slate-600 font-semibold">
                        Ready to Build
                    </p>
                </div>
            </div>
        </div>
      </aside>
    </>
  );
};

