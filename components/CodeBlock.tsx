import React, { useState } from 'react';
import { IconCheck, IconCopy } from './Icons';

interface CodeBlockProps {
  code: string;
  label?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, label = 'BASH' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 shadow-sm group">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950 border-b border-slate-800">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded"
          title="Copy to clipboard"
        >
          {copied ? <IconCheck className="w-4 h-4 text-green-400" /> : <IconCopy className="w-4 h-4" />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-slate-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};