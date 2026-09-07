import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, CheckSquare, HelpCircle, GraduationCap } from 'lucide-react';
import { CHAPTER_DATABASE } from './data/database';
import { NativeChapter, BlockType } from './types/content';
import { TestsView } from './components/TestsView';
import { QuestionsView } from './components/QuestionsView';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

function renderBlock(block: BlockType, index: number) {
  switch (block.type) {
    case 'h1':
      return <h1 key={index} className="text-3xl md:text-5xl font-semibold mt-12 mb-6 tracking-tighter text-neutral-900 dark:text-white leading-tight">{block.content}</h1>;
    case 'h2':
      return <h2 key={index} className="text-2xl md:text-3xl font-medium mt-10 mb-5 tracking-tight text-neutral-800 dark:text-neutral-100">{block.content}</h2>;
    case 'h3':
      return <h3 key={index} className="text-xl md:text-2xl font-medium mt-8 mb-4 text-neutral-700 dark:text-neutral-300">{block.content}</h3>;
    case 'p':
      return <p key={index} className="text-lg md:text-xl leading-relaxed mb-6 text-neutral-700 dark:text-neutral-300 font-light tracking-wide">{block.content}</p>;
    case 'ul':
      return (
        <ul key={index} className="list-none pl-2 mb-8 space-y-3 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-light tracking-wide">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={index} className="list-decimal pl-6 mb-8 space-y-3 text-neutral-700 dark:text-neutral-300 text-lg md:text-xl font-light tracking-wide marker:text-[#D4AF37] marker:font-medium">
          {block.items.map((item, i) => (
            <li key={i} className="pl-2">{item}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div key={index} className="overflow-hidden mb-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                <tr>
                  {block.headers.map((header, i) => (
                    <th key={i} className="px-6 py-4 font-semibold text-neutral-900 dark:text-white tracking-wide">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-neutral-700 dark:text-neutral-300 font-light">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case 'definition':
      return (
        <div key={index} className="mb-8 p-6 md:p-8 bg-neutral-50 dark:bg-[#111] rounded-2xl border-l-4 border-[#D4AF37] shadow-sm">
          <span className="font-semibold text-neutral-900 dark:text-white mr-3 text-lg">{block.term}:</span>
          <span className="text-neutral-700 dark:text-neutral-300 font-light text-lg leading-relaxed">{block.definition}</span>
        </div>
      );
    case 'callout':
      return (
        <div key={index} className="mb-8 p-6 md:p-8 rounded-2xl bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 border border-[#D4AF37]/20 shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-4 relative z-10">
            <span className="font-bold tracking-widest uppercase text-xs text-[#D4AF37] mt-1 shrink-0">{block.style}</span>
            <p className="leading-relaxed text-neutral-800 dark:text-neutral-200 font-light text-lg m-0">{block.content}</p>
          </div>
        </div>
      );
    case 'divider':
      return <hr key={index} className="my-16 border-t border-neutral-200 dark:border-neutral-800" />;
    case 'diagram':
      return (
        <div key={index} className="mb-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#111] overflow-hidden shadow-sm">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a]">
             <h4 className="font-semibold text-neutral-900 dark:text-white">{block.title}</h4>
             {block.description && <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">{block.description}</p>}
          </div>
          {block.svgCode ? (
             <div className="p-6 md:p-8 flex justify-center items-center bg-white dark:bg-[#0a0a0a]" dangerouslySetInnerHTML={{ __html: block.svgCode }} />
          ) : (
             <div className="p-8 md:p-12 flex justify-center items-center text-neutral-400 dark:text-neutral-600 text-sm italic">
                [Diagram: {block.title}]
             </div>
          )}
        </div>
      );
    default:
      return null;
  }
}

type TabType = 'notes' | 'tests' | 'questions';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>('notes');
  const [activeChapter, setActiveChapter] = useState<NativeChapter>(CHAPTER_DATABASE[0]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-200 flex flex-col font-sans selection:bg-[#D4AF37]/30">
      
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#D4AF37] text-white rounded-lg flex items-center justify-center font-bold shrink-0">
              <GraduationCap size={20} />
            </div>
            <h1 className="font-bold text-lg tracking-tight hidden md:block">AI Class 10</h1>
          </div>

          {/* Simple Tab Nav */}
          <nav className="flex items-center gap-2">
            {([
              { id: 'notes', label: 'Notes', icon: FileText },
              { id: 'tests', label: 'Tests', icon: CheckSquare },
              { id: 'questions', label: 'Q&A', icon: HelpCircle }
            ] as const).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 whitespace-nowrap",
                  activeTab === tab.id 
                    ? "bg-[#D4AF37] text-white shadow-md" 
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                )}
              >
                <tab.icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        {/* Chapter Sub-nav (only for Notes) */}
        {activeTab === 'notes' && (
          <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111]">
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
              {CHAPTER_DATABASE.map(chapter => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    setActiveChapter(chapter);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={cn(
                    "whitespace-nowrap px-4 py-1.5 text-xs font-semibold rounded-full transition-all border",
                    activeChapter.id === chapter.id
                      ? "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/50"
                      : "bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-300"
                  )}
                >
                  Ch {chapter.number}: {chapter.title.split(':')[0]}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col py-8 md:py-12">
        {activeTab === 'tests' && (
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
            <div className="bg-white dark:bg-[#111] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm p-6 md:p-8">
              <TestsView />
            </div>
          </div>
        )}
        
        {activeTab === 'questions' && (
          <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
            <div className="bg-white dark:bg-[#111] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm p-6 md:p-8">
              <QuestionsView />
            </div>
          </div>
        )}
        
        {activeTab === 'notes' && (
          <div className="max-w-4xl mx-auto px-4 md:px-6 w-full flex-1">
            <article className="bg-white dark:bg-[#111] p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <header className="mb-12">
                <div className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-bold tracking-widest uppercase mb-4">
                  Chapter {activeChapter.number}
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 dark:text-white leading-tight">
                  {activeChapter.title}
                </h1>
              </header>

              <div className="max-w-none">
                {activeChapter.pages.map((page, pageIndex) => (
                  <div key={pageIndex} className="mb-16">
                    {page.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
                  </div>
                ))}
              </div>

              {/* Simple Chapter Navigation */}
              <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                {(() => {
                  const currentIndex = CHAPTER_DATABASE.findIndex(c => c.id === activeChapter.id);
                  const prev = currentIndex > 0 ? CHAPTER_DATABASE[currentIndex - 1] : null;
                  const next = currentIndex < CHAPTER_DATABASE.length - 1 ? CHAPTER_DATABASE[currentIndex + 1] : null;

                  return (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      {prev ? (
                        <button 
                          onClick={() => {
                            setActiveChapter(prev);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full sm:w-auto text-left group flex-1 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-800"
                        >
                          <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1 font-bold">Previous</div>
                          <div className="font-medium text-neutral-900 dark:text-neutral-200 group-hover:text-[#D4AF37] transition-colors line-clamp-1">{prev.title}</div>
                        </button>
                      ) : <div className="flex-1 hidden sm:block"></div>}
                      
                      {next && (
                        <button 
                          onClick={() => {
                            setActiveChapter(next);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full sm:w-auto text-right group flex-1 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-800"
                        >
                          <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1 font-bold">Next</div>
                          <div className="font-medium text-neutral-900 dark:text-neutral-200 group-hover:text-[#D4AF37] transition-colors line-clamp-1">{next.title}</div>
                        </button>
                      )}
                    </div>
                  );
                })()}
              </div>
            </article>
          </div>
        )}
      </main>

      <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light tracking-wide">
          Curated by Shaurya • CBSE Class 10 AI
        </p>
      </footer>
    </div>
  );
}
