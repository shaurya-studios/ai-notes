import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, CheckSquare, HelpCircle, GraduationCap } from 'lucide-react';
import { CHAPTER_DATABASE } from './data/database';
import { NativeChapter, BlockType } from './types/content';
import { TestsView } from './components/TestsView';
import { QuestionsView } from './components/QuestionsView';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';
import { Background3D } from './components/Background3D';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

function renderBlock(block: BlockType, index: number) {
  switch (block.type) {
    case 'h1':
      return <h1 key={index} className="text-3xl md:text-5xl font-semibold mt-16 mb-8 tracking-tighter text-neutral-900 dark:text-white leading-tight">{block.content}</h1>;
    case 'h2':
      return <h2 key={index} className="text-2xl md:text-3xl font-medium mt-12 mb-6 tracking-tight text-neutral-800 dark:text-neutral-100">{block.content}</h2>;
    case 'h3':
      return <h3 key={index} className="text-xl md:text-2xl font-medium mt-8 mb-4 text-neutral-700 dark:text-neutral-300">{block.content}</h3>;
    case 'p':
      return <p key={index} className="text-lg md:text-xl leading-relaxed mb-6 text-neutral-600 dark:text-neutral-400 font-light tracking-wide">{block.content}</p>;
    case 'ul':
      return (
        <ul key={index} className="list-none pl-2 mb-8 space-y-3 text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-light tracking-wide">
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
        <ol key={index} className="list-decimal pl-6 mb-8 space-y-3 text-neutral-600 dark:text-neutral-400 text-lg md:text-xl font-light tracking-wide marker:text-[#D4AF37] marker:font-medium">
          {block.items.map((item, i) => (
            <li key={i} className="pl-2">{item}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div key={index} className="overflow-hidden mb-10 rounded-3xl border border-neutral-200/50 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-neutral-100/50 dark:bg-white/5 border-b border-neutral-200/50 dark:border-white/10">
                <tr>
                  {block.headers.map((header, i) => (
                    <th key={i} className="px-6 py-4 font-semibold text-neutral-900 dark:text-white tracking-wide">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/50 dark:divide-white/5">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors hover:bg-white/40 dark:hover:bg-white/5">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-neutral-600 dark:text-neutral-400 font-light">{cell}</td>
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
        <div key={index} className="mb-8 p-6 md:p-8 bg-gradient-to-br from-neutral-50 to-white dark:from-[#111] dark:to-[#0a0a0a] rounded-3xl border border-neutral-200/50 dark:border-white/10 shadow-lg relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#D4AF37] opacity-80" />
          <span className="font-semibold text-neutral-900 dark:text-white mr-3 text-lg">{block.term}:</span>
          <span className="text-neutral-600 dark:text-neutral-400 font-light text-lg leading-relaxed">{block.definition}</span>
        </div>
      );
    case 'callout':
      return (
        <div key={index} className="mb-8 p-6 md:p-8 rounded-3xl bg-neutral-900 dark:bg-white/5 backdrop-blur-xl border border-neutral-800 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/20 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="flex items-start gap-4 relative z-10">
            <span className="font-bold tracking-widest uppercase text-xs text-[#D4AF37] mt-1 shrink-0">{block.style}</span>
            <p className="leading-relaxed text-neutral-300 dark:text-neutral-200 font-light text-lg m-0">{block.content}</p>
          </div>
        </div>
      );
    case 'divider':
      return <hr key={index} className="my-16 border-t border-neutral-200 dark:border-white/10" />;
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

  // Physics-based spring config for the dynamic island
  const springConfig = { type: "spring", bounce: 0.25, duration: 0.7 };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#000000] text-neutral-900 dark:text-neutral-100 transition-colors duration-700 flex flex-col font-sans selection:bg-[#D4AF37]/30">
      <Background3D isDarkMode={isDarkMode} />
      
      {/* Morphing Dynamic Island Navbar */}
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          layout
          transition={springConfig}
          className="pointer-events-auto bg-white/70 dark:bg-[#111111]/70 backdrop-blur-3xl border border-neutral-200/50 dark:border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden"
          style={{ borderRadius: 32 }}
        >
          <motion.div layout transition={springConfig} className="p-2.5 flex flex-col w-full max-w-4xl">
            {/* Top Row */}
            <div className="flex items-center justify-between gap-3 md:gap-6">
              
              {/* Brand Logo */}
              <motion.div layout transition={springConfig} className="flex items-center gap-3 pl-2 pr-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] flex items-center justify-center text-black shadow-lg shadow-[#D4AF37]/20 shrink-0">
                  <GraduationCap size={18} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-sm tracking-widest uppercase hidden sm:block text-neutral-900 dark:text-white">AI Class 10</span>
              </motion.div>

              {/* Main Tabs Segmented Control */}
              <motion.div layout transition={springConfig} className="flex items-center p-1 bg-neutral-200/50 dark:bg-black/50 rounded-full border border-neutral-300/50 dark:border-white/5">
                {([
                  { id: 'notes', label: 'Notes', icon: FileText },
                  { id: 'tests', label: 'Tests', icon: CheckSquare },
                  { id: 'questions', label: 'Q&A', icon: HelpCircle }
                ] as const).map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-full transition-colors flex items-center gap-2 whitespace-nowrap",
                      activeTab === tab.id ? "text-black" : "text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                    )}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabBubble"
                        transition={springConfig}
                        className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37] to-[#F3E5AB] rounded-full shadow-md"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <tab.icon size={16} className={activeTab === tab.id ? "text-black" : "opacity-70"} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* Theme Toggle Widget */}
              <motion.button 
                layout
                transition={springConfig}
                onClick={toggleTheme}
                className="relative flex items-center w-14 h-8 bg-neutral-200/80 dark:bg-black/60 rounded-full p-1 transition-colors duration-500 shadow-inner border border-neutral-300/50 dark:border-white/10 shrink-0 group mr-1"
              >
                <motion.div 
                  layout
                  className="w-6 h-6 bg-white dark:bg-[#1a1a1a] rounded-full shadow-md flex items-center justify-center z-10 border border-neutral-200 dark:border-neutral-800"
                  initial={false}
                  animate={{
                    x: isDarkMode ? 24 : 0,
                    rotate: isDarkMode ? 360 : 0
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {isDarkMode ? <Moon size={12} className="text-[#D4AF37]" /> : <Sun size={12} className="text-amber-500" />}
                </motion.div>
                <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity">
                  <Sun size={12} className="text-neutral-500" />
                  <Moon size={12} className="text-neutral-500" />
                </div>
              </motion.button>
            </div>
            
            {/* Morphing Expanded Area: Chapter Selection */}
            <AnimatePresence mode="popLayout">
              {activeTab === 'notes' && (
                <motion.div 
                  initial={{ height: 0, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ height: 'auto', opacity: 1, filter: 'blur(0px)' }}
                  exit={{ height: 0, opacity: 0, filter: 'blur(10px)' }}
                  transition={springConfig}
                  className="overflow-hidden mt-2"
                >
                  <div className="pt-2 pb-1 border-t border-neutral-200/50 dark:border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar mask-edges-horizontal px-2">
                    {CHAPTER_DATABASE.map(chapter => (
                      <button
                        key={chapter.id}
                        onClick={() => {
                          setActiveChapter(chapter);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={cn(
                          "whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 border backdrop-blur-md",
                          activeChapter.id === chapter.id
                            ? "bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                            : "bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border-transparent hover:bg-black/10 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white"
                        )}
                      >
                        Ch {chapter.number}: {chapter.title.split(':')[0]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full flex flex-col pt-32 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col w-full"
          >
            {activeTab === 'tests' && (
              <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="bg-white/70 dark:bg-[#111111]/70 backdrop-blur-3xl rounded-[2.5rem] border border-neutral-200/50 dark:border-white/10 shadow-2xl p-6 md:p-12 min-h-[60vh]">
                  <TestsView />
                </div>
              </div>
            )}
            
            {activeTab === 'questions' && (
              <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="bg-white/70 dark:bg-[#111111]/70 backdrop-blur-3xl rounded-[2.5rem] border border-neutral-200/50 dark:border-white/10 shadow-2xl p-6 md:p-12 min-h-[60vh]">
                  <QuestionsView />
                </div>
              </div>
            )}
            
            {activeTab === 'notes' && (
              <div className="max-w-4xl mx-auto px-4 md:px-6 w-full flex-1">
                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeChapter.id}
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-3xl p-8 md:p-16 rounded-[2.5rem] shadow-2xl border border-neutral-200/50 dark:border-white/10 overflow-hidden group"
                  >
                    {/* Subtle ambient glow inside the card based on theme */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    
                    <header className="mb-16 relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 dark:bg-white/10 text-white dark:text-neutral-100 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm border border-neutral-800 dark:border-white/10">
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                        Chapter {activeChapter.number}
                      </div>
                      <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
                        {activeChapter.title}
                      </h1>
                    </header>

                    <div className="relative z-10 max-w-none">
                      {activeChapter.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="mb-20">
                          {page.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
                        </div>
                      ))}
                    </div>

                    {/* Premium Chapter Navigation */}
                    <div className="mt-24 pt-12 border-t border-neutral-200/50 dark:border-white/10 relative z-10">
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
                                className="w-full sm:w-auto text-left group flex-1 p-6 rounded-3xl bg-neutral-50/50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300 border border-neutral-200/50 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/20 backdrop-blur-md"
                              >
                                <div className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 font-bold">Previous</div>
                                <div className="font-medium text-lg text-neutral-900 dark:text-neutral-200 group-hover:text-[#D4AF37] transition-colors line-clamp-1">{prev.title}</div>
                              </button>
                            ) : <div className="flex-1 hidden sm:block"></div>}
                            
                            {next && (
                              <button 
                                onClick={() => {
                                  setActiveChapter(next);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="w-full sm:w-auto text-right group flex-1 p-6 rounded-3xl bg-neutral-50/50 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300 border border-neutral-200/50 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/20 backdrop-blur-md"
                              >
                                <div className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2 font-bold">Next</div>
                                <div className="font-medium text-lg text-neutral-900 dark:text-neutral-200 group-hover:text-[#D4AF37] transition-colors line-clamp-1">{next.title}</div>
                              </button>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Minimalist Footer */}
      <footer className="relative z-20 pb-12 pt-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-4" />
          <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light tracking-wide">
            Curated by Shaurya • CBSE Class 10 AI • Class of 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
