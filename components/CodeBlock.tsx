import React, { useState } from 'react';
import { IconCheck, IconCopy } from './Icons';

interface CodeBlockProps {
  code: string;
  label?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, label = 'Terminal' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden bg-[#0f172a] border border-slate-800 shadow-2xl group transition-all duration-300 hover:border-slate-700">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{label}</span>
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all
            ${copied 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          title="Copy to clipboard"
        >
          {copied ? (
            <>
                <IconCheck className="w-3.5 h-3.5" />
                <span>Copied!</span>
            </>
          ) : (
            <>
                <IconCopy className="w-3.5 h-3.5" />
                <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-6 overflow-x-auto scrollbar-hide">
        <pre className="text-[14px] font-mono text-slate-300 leading-7">
          <code className="block">{code}</code>
        </pre>
      </div>
    </div>
  );
};