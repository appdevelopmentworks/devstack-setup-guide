import React from 'react';
import { Step } from '../types';
import { CodeBlock } from './CodeBlock';

interface StepCardProps {
  step: Step;
  index: number;
}

export const StepCard: React.FC<StepCardProps> = ({ step, index }) => {
  return (
    <div className="relative pl-8 md:pl-12 py-2 group">
      {/* Timeline Line */}
      <div 
        className="absolute left-3 md:left-4 top-3 bottom-0 w-px bg-slate-200 group-last:bottom-auto group-last:h-full" 
        aria-hidden="true"
      />
      
      {/* Step Number Bubble */}
      <div className="absolute left-0 top-2 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-indigo-600 text-white font-bold text-xs md:text-sm shadow-md z-10 ring-4 ring-white">
        {index + 1}
      </div>

      <div className="bg-white rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
          {step.title}
        </h3>
        
        <div className="prose prose-slate prose-sm max-w-none text-slate-600">
          <p className="leading-relaxed whitespace-pre-line">
            {step.description.split('**').map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-indigo-700 font-bold bg-indigo-50 px-1 rounded">{part}</strong> : part
            )}
          </p>
        </div>

        {step.warning && (
          <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r text-sm text-amber-900 flex gap-3">
            <span className="text-xl">⚠️</span>
            <div>
               <span className="font-bold block mb-1">注意</span>
               {step.warning}
            </div>
          </div>
        )}

        {step.tip && (
            <div className="mt-4 p-4 bg-emerald-50 border-l-4 border-emerald-400 rounded-r text-sm text-emerald-900 flex gap-3">
            <span className="text-xl">💡</span>
            <div>
                <span className="font-bold block mb-1">ヒント</span>
                {step.tip}
            </div>
          </div>
        )}

        {step.command && (
          <div className="mt-4">
            <CodeBlock code={step.command.code} label={step.command.label} />
          </div>
        )}
      </div>
    </div>
  );
};
