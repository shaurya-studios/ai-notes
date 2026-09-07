import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronRight, BookOpen } from 'lucide-react';
import { CHAPTER_DATABASE } from './data/database';
import { NativeChapter, BlockType } from './types/content';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

function renderBlock(block: BlockType, index: number) {
  switch (block.type) {
    case 'h1':
      return <h1 key={index} className="text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight text-neutral-900 dark:text-neutral-100">{block.content}</h1>;
    case 'h2':
      return <h2 key={index} className="text-2xl md:text-3xl font-semibold mt-10 mb-4 tracking-tight text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-800 pb-2">{block.content}</h2>;
    case 'h3':
      return <h3 key={index} className="text-xl md:text-2xl font-medium mt-8 mb-3 text-neutral-800 dark:text-neutral-200">{block.content}</h3>;
    case 'p':
      return <p key={index} className="text-base md:text-lg leading-relaxed mb-6 text-neutral-700 dark:text-neutral-300">{block.content}</p>;
    case 'ul':
      return (
        <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="list-decimal pl-6 mb-6 space-y-2 text-neutral-700 dark:text-neutral-300 text-base md:text-lg">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div key={index} className="overflow-x-auto mb-8 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                {block.headers.map((header, i) => (
                  <th key={i} className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-[#0a0a0a]">
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="px-4 py-3 text-neutral-700 dark:text-neutral-300">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'definition':
      return (
        <div key={index} className="mb-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800">
          <strong className="block text-neutral-900 dark:text-neutral-100 mb-1 text-lg">{block.term}</strong>
          <span className="text-neutral-700 dark:text-neutral-300">{block.definition}</span>
        </div>
      );
    case 'callout':
      const styles = {
        note: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 text-blue-800 dark:text-blue-200',
        important: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200',
        example: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200',
      };
      return (
        <div key={index} className={cn("mb-6 p-4 rounded-lg border", styles[block.style])}>
          <div className="font-semibold mb-1 uppercase text-xs tracking-wider opacity-80">{block.style}</div>
          <div className="text-base">{block.content}</div>
        </div>
      );
    case 'diagram':
      return (
        <div key={index} className="mb-8 p-6 bg-white dark:bg-[#111] rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="text-neutral-400 dark:text-neutral-600 mb-4">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>
          <strong className="block text-neutral-900 dark:text-neutral-100 mb-2">{block.title}</strong>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md">{block.description}</p>
          <div className="mt-4 text-xs font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-500">Diagram Visualization Placeholder</div>
        </div>
      );
    default:
      return null;
  }
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeChapter, setActiveChapter] = useState<NativeChapter>(CHAPTER_DATABASE[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 flex font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-neutral-50 dark:bg-[#0a0a0a] border-r border-neutral-200 dark:border-neutral-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen lg:sticky top-0 flex flex-col",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center font-bold">
              <BookOpen size={18} />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight tracking-tight">AI Notes</h1>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Class of 2026</p>
            </div>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2 lg:hidden text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4 px-2 mt-2">Contents</div>
          {CHAPTER_DATABASE.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => {
                setActiveChapter(chapter);
                setIsSidebarOpen(false);
              }}
              className={cn(
                "w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex flex-col gap-1 group",
                activeChapter.id === chapter.id 
                  ? "bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700" 
                  : "hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 border border-transparent"
              )}
            >
              <div className="flex items-center justify-between">
                <span className={cn(
                  "font-medium text-sm",
                  activeChapter.id === chapter.id ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200"
                )}>
                  Chapter {chapter.number}
                </span>
                {activeChapter.id === chapter.id && <ChevronRight size={16} className="text-neutral-400" />}
              </div>
              <span className={cn(
                "text-xs line-clamp-2",
                activeChapter.id === chapter.id ? "text-neutral-600 dark:text-neutral-300" : "text-neutral-500 dark:text-neutral-500"
              )}>
                {chapter.title}
              </span>
              
              {/* Button Detail Requirement */}
              <div className="mt-2 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">AI 2026</span>
                <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">By Shaurya</span>
              </div>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-neutral-200 dark:border-neutral-900">
          <button 
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-sm font-medium"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen max-w-full overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 border-b border-neutral-200 dark:border-neutral-900 flex items-center justify-between px-4 sticky top-0 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md z-30">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-neutral-600 dark:text-neutral-400">
              <Menu size={24} />
            </button>
            <span className="font-bold">AI Notes 2026</span>
          </div>
          <button onClick={toggleTheme} className="p-2 text-neutral-600 dark:text-neutral-400">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Article Content */}
        <div className="flex-1 overflow-y-auto w-full">
          <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
            <div className="mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800">
              <div className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">Chapter {activeChapter.number}</div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
                {activeChapter.title}
              </h1>
            </div>

            {activeChapter.pages.map((page, pageIndex) => (
              <div key={pageIndex} className="mb-16">
                {page.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
                
                {/* Page Divider & Credits Requirement */}
                <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
                    <span>Page {page.pageNumber}</span>
                  </div>
                  <div className="font-medium tracking-wide">
                    Curated by Shaurya • AI Notes 2026
                  </div>
                </div>
              </div>
            ))}
            
            {/* Chapter Navigation Footer */}
            <div className="mt-20 flex justify-between items-center pt-8 border-t border-neutral-200 dark:border-neutral-800">
              {(() => {
                const currentIndex = CHAPTER_DATABASE.findIndex(c => c.id === activeChapter.id);
                const prev = currentIndex > 0 ? CHAPTER_DATABASE[currentIndex - 1] : null;
                const next = currentIndex < CHAPTER_DATABASE.length - 1 ? CHAPTER_DATABASE[currentIndex + 1] : null;
                
                return (
                  <>
                    <div className="flex-1">
                      {prev && (
                        <button 
                          onClick={() => {
                            setActiveChapter(prev);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-left group"
                        >
                          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Previous</div>
                          <div className="font-medium text-neutral-900 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Chapter {prev.number}: {prev.title}</div>
                        </button>
                      )}
                    </div>
                    <div className="flex-1 text-right">
                      {next && (
                        <button 
                          onClick={() => {
                            setActiveChapter(next);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-right group"
                        >
                          <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">Next</div>
                          <div className="font-medium text-neutral-900 dark:text-neutral-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Chapter {next.number}: {next.title}</div>
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
