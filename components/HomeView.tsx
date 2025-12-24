import React from 'react';
import { Manual } from '../types';
import { getIcon } from './Icons';

interface HomeViewProps {
  manuals: Manual[];
  onSelectManual: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ manuals, onSelectManual }) => {
  // Group manuals by category for the home screen
  const groupedManuals = manuals.reduce((acc, manual) => {
    if (!acc[manual.category]) {
      acc[manual.category] = [];
    }
    acc[manual.category].push(manual);
    return acc;
  }, {} as Record<string, Manual[]>);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 lg:py-16 space-y-16 animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative rounded-[2rem] overflow-hidden bg-slate-900 text-white p-8 md:p-20 shadow-2xl border border-white/5 group">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-slate-900"></div>
          
          {/* The Generated Image */}
          <img 
            src="/hero_banner.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-lighten scale-110 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
          />

          {/* Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/40 to-indigo-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
          
          {/* Animated Glows */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
          
          {/* Grid Texture */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        </div>


        
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
            Beginner Friendly
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            DevStack <br/>
            <span className="gradient-text">Setup Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            プログラミングの第一歩は環境構築から。
            初心者の方が迷わず、スムーズに開発を始められるよう、
            厳選したツールの導入手順をやさしく解説します。
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
                onClick={() => onSelectManual(manuals[0].id)}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-600/30"
            >
              今すぐ始める
            </button>
            <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                    </div>
                ))}
                <div className="pl-4 flex items-center text-sm text-slate-400">
                    2,000+ 初心者が利用中
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">カテゴリーから探す</h2>
            <p className="text-slate-500">必要なツールをカテゴリーごとに整理しました。上から順番に進めるのがおすすめです。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedManuals).map(([category, manualsInCategory]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">
                {category}
              </h3>
              <div className="space-y-3">
                {(manualsInCategory as Manual[]).map((manual) => {
                  const Icon = getIcon(manual.icon);
                  return (
                    <button
                      key={manual.id}
                      onClick={() => onSelectManual(manual.id)}
                      className="w-full glass-card hover:bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {manual.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                            {manual.shortDescription}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Why DevStack Section */}
      <section className="bg-indigo-50 rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-indigo-100 text-3xl">
                    🔰
                </div>
                <h4 className="font-bold text-slate-900 mb-2">挫折させない解説</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    難しい用語は極力使わず、図解やスクリーンショットを交えて丁寧に説明します。
                </p>
            </div>
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-indigo-100 text-3xl">
                    🚀
                </div>
                <h4 className="font-bold text-slate-900 mb-2">最短ルートで設定</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    現場で使われている標準的な設定をピックアップ。無駄な手順は省きました。
                </p>
            </div>
            <div className="text-center p-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-indigo-100 text-3xl">
                    🛠️
                </div>
                <h4 className="font-bold text-slate-900 mb-2">トラブル解決も充実</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                    「よくあるエラー」とその対処法を「注意点」としてまとめているので安心です。
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};
