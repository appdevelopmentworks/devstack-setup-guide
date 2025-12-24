import React, { useEffect, useState } from 'react';
import { Manual } from '../types';
import { manuals } from '../data/manuals';
import { StepCard } from './StepCard';
import { getIcon, IconExternalLink, IconCheck } from './Icons';


interface ManualViewerProps {
  manual: Manual;
  onSelectManual: (id: string) => void;
}

export const ManualViewer: React.FC<ManualViewerProps> = ({ manual, onSelectManual }) => {

  const Icon = getIcon(manual.icon);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  const toggleStep = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const progress = (completedSteps.length / manual.steps.length) * 100;

  // Reset progress when manual changes
  useEffect(() => {
    setCompletedSteps([]);
  }, [manual.id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-16 animate-fade-in-up">
      {/* Sticky Progress Bar */}
      <div className="sticky top-0 z-20 bg-slate-50/80 backdrop-blur-md -mx-4 px-4 py-4 mb-8 border-b border-slate-200 lg:hidden">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Progress</span>
            <span className="text-xs font-bold text-indigo-600">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
                className="h-full bg-indigo-600 transition-all duration-500" 
                style={{ width: `${progress}%` }}
            />
        </div>
      </div>

      {/* Header */}
      <div className="relative group mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col md:flex-row md:items-center gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-indigo-500/5">
            <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-indigo-50 to-white rounded-3xl border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-inner">
                <Icon className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                        {manual.category}
                    </span>
                    {progress === 100 && (
                        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                            <IconCheck className="w-3 h-3" />
                            Completed
                        </span>
                    )}
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {manual.title}
                </h1>
                <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                    {manual.shortDescription}
                </p>
            </div>
            <a 
                href={manual.officialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg self-start md:self-center"
            >
                公式サイト
                <IconExternalLink className="w-4 h-4" />
            </a>
        </div>
      </div>

      {/* Steps Section Header */}
      <div className="hidden lg:flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-black">
                {manual.steps.length}
            </span>
            導入ステップ
        </h2>
        <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                完了状況: {completedSteps.length} / {manual.steps.length}
            </span>
            <div className="h-2 w-32 bg-slate-200 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-indigo-600 transition-all duration-500" 
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-4 pb-20">
        {manual.steps.map((step, index) => (
          <StepCard 
            key={index} 
            step={step} 
            index={index} 
            isCompleted={completedSteps.includes(index)}
            onToggle={() => toggleStep(index)}
          />
        ))}
      </div>
      
      {/* Next Manual Suggestion */}
      {manual.id !== manuals[manuals.length - 1].id && (
        <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-xl shadow-indigo-200 group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-indigo-200">Next Step</span>
                    <h4 className="text-2xl font-bold mt-1">次は「{manuals[manuals.findIndex(m => m.id === manual.id) + 1].title}」を設定しましょう</h4>
                    <p className="text-indigo-100 mt-2 text-sm opacity-80">
                        環境構築をさらに進めて、開発の準備を完璧にしましょう。
                    </p>
                </div>
                <button 
                  onClick={() => {
                    const currentIndex = manuals.findIndex(m => m.id === manual.id);
                    const nextManual = manuals[currentIndex + 1];
                    if (nextManual) {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        onSelectManual(nextManual.id);
                    }
                  }}

                  className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
                >
                    次へ進む
                </button>
            </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="mt-12 bg-slate-100/50 rounded-2xl p-8 border border-slate-200 text-center">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl shadow-sm">
            💡
        </div>
        <h4 className="font-bold text-slate-900 mb-2">お疲れ様でした！</h4>
        <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto">
            環境構築は個人差があり、OSや既存の環境によって手順が異なる場合があります。
            うまくいかない場合は、公式サイトの最新ドキュメントやエラーメッセージを参考にしてください。
        </p>
      </div>
    </div>
  );
};