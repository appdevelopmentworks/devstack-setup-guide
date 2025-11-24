import React from 'react';
import { Manual } from '../types';
import { StepCard } from './StepCard';
import { getIcon, IconExternalLink } from './Icons';

interface ManualViewerProps {
  manual: Manual;
}

export const ManualViewer: React.FC<ManualViewerProps> = ({ manual }) => {
  const Icon = getIcon(manual.icon);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 lg:py-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 border-b border-slate-200 pb-8">
        <div className="flex gap-5">
          <div className="flex-shrink-0 p-4 bg-indigo-50 rounded-2xl text-indigo-600">
            <Icon className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{manual.title}</h1>
            <p className="mt-2 text-slate-600 text-lg">{manual.shortDescription}</p>
            <div className="mt-3 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                    {manual.category}
                </span>
            </div>
          </div>
        </div>
        <a 
          href={manual.officialUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors self-start md:self-center"
        >
          公式ドキュメント
          <IconExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-slate-900 mb-6 pl-2 border-l-4 border-indigo-500">
          導入手順
        </h2>
        <div className="pb-10">
          {manual.steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
      
      {/* Footer for Manual */}
      <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>手順はOSやバージョンによって異なる場合があります。必ず公式サイトの情報も併せてご確認ください。</p>
      </div>
    </div>
  );
};