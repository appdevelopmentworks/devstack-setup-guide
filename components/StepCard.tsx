import React from 'react';
import { Step } from '../types';
import { CodeBlock } from './CodeBlock';
import { IconCheck } from './Icons';

interface StepCardProps {
  step: Step;
  index: number;
  isCompleted: boolean;
  onToggle: () => void;
}

export const StepCard: React.FC<StepCardProps> = ({ step, index, isCompleted, onToggle }) => {
  return (
    <div className={`relative pl-8 md:pl-16 py-4 transition-all duration-500 ${isCompleted ? 'opacity-60 scale-[0.98]' : 'opacity-100'}`}>
      {/* Timeline Line */}
      <div 
        className={`absolute left-3 md:left-6 top-0 bottom-0 w-1 bg-slate-100 transition-colors duration-500 ${isCompleted ? 'bg-indigo-600/20' : ''}`}
        aria-hidden="true"
      />
      
      {/* Step Number/Check Bubble */}
      <button 
        onClick={onToggle}
        className={`absolute left-0 md:left-2 top-6 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border-4 transition-all duration-300 z-10 
            ${isCompleted 
                ? 'bg-indigo-600 border-indigo-100 text-white' 
                : 'bg-white border-indigo-600 text-indigo-600 hover:scale-110'
            }`}
      >
        {isCompleted ? <IconCheck className="w-4 h-4 md:w-5 md:h-5" /> : <span className="font-black text-xs md:text-sm">{index + 1}</span>}
      </button>

      <div className={`
        bg-white rounded-3xl p-6 md:p-8 border transition-all duration-300
        ${isCompleted 
            ? 'border-slate-100 shadow-none bg-slate-50/50' 
            : 'border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-indigo-500/10 hover:border-indigo-200 hover:-translate-y-1'
        }
      `}>
        <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {step.title}
            </h3>
            <button 
                onClick={onToggle}
                className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all
                    ${isCompleted 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-slate-400 border-slate-200 hover:text-indigo-600 hover:border-indigo-600'}`}
            >
                {isCompleted ? '完了済み' : '完了にする'}
            </button>
        </div>
        
        <div className="prose prose-slate prose-sm max-w-none text-slate-600 mb-6">
          <p className="leading-relaxed whitespace-pre-line text-[15px]">
            {step.description.split('**').map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-indigo-600 font-bold bg-indigo-50/50 px-1 rounded">{part}</strong> : part
            )}
          </p>
        </div>

        {step.command && (
          <div className="mt-6 mb-4">
            <CodeBlock code={step.command.code} label={step.command.label} />
          </div>
        )}

        {/* Info Boxes */}
        <div className="grid grid-cols-1 gap-4 mt-6">
            {step.warning && (
            <div className="p-5 bg-rose-50 border border-rose-100 rounded-2xl text-sm text-rose-900 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚠️</span>
                    <span className="font-black uppercase tracking-widest text-[10px] text-rose-500">注意が必要</span>
                </div>
                <p className="leading-relaxed font-medium">{step.warning}</p>
            </div>
            )}

            {step.tip && (
                <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-2xl text-sm text-indigo-900 animate-fade-in-up">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <span className="font-black uppercase tracking-widest text-[10px] text-indigo-500">お役立ちヒント</span>
                    </div>
                    <p className="leading-relaxed font-medium">{step.tip}</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

