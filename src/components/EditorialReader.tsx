import React from 'react';
import { NativeChapter, BlockType } from '../types/content';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface EditorialReaderProps {
  chapter: NativeChapter;
  onBack: () => void;
}

const BlockRenderer: React.FC<{ block: BlockType }> = ({ block }) => {
  switch (block.type) {
    case 'h1':
      return <h1 className="text-4xl md:text-6xl font-serif text-neutral-100 tracking-tight mb-12 mt-20 leading-[1.1]">{block.content}</h1>;
    case 'h2':
      return <h2 className="text-2xl md:text-3xl font-serif text-neutral-200 mt-20 mb-8 border-b border-neutral-800/50 pb-6">{block.content}</h2>;
    case 'h3':
      return <h3 className="text-xl font-medium text-neutral-300 mt-12 mb-6 tracking-wide">{block.content}</h3>;
    case 'p':
      return <p className="text-lg md:text-[21px] text-neutral-400 leading-[1.8] mb-8 font-sans font-light tracking-wide">{block.content}</p>;
    case 'ul':
      return (
        <ul className="list-disc list-outside ml-6 mb-10 text-lg md:text-[21px] text-neutral-400 leading-[1.8] space-y-4 marker:text-neutral-600 font-light">
          {block.items.map((item, i) => <li key={i} className="pl-4">{item}</li>)}
        </ul>
      );
    case 'ol':
      return (
        <ol className="list-decimal list-outside ml-6 mb-10 text-lg md:text-[21px] text-neutral-400 leading-[1.8] space-y-4 marker:text-neutral-600 font-light">
          {block.items.map((item, i) => <li key={i} className="pl-4">{item}</li>)}
        </ol>
      );
    case 'definition':
      return (
        <div className="my-12 flex flex-col md:flex-row gap-4 md:gap-12 items-baseline p-8 bg-neutral-900/20 rounded-2xl border border-neutral-800/30 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-neutral-700/50 group-hover:bg-neutral-500 transition-colors" />
          <dt className="text-lg md:text-xl font-serif font-semibold text-neutral-200 min-w-[160px] tracking-wide">{block.term}</dt>
          <dd className="text-lg md:text-[21px] text-neutral-400 leading-[1.8] m-0 font-light">{block.definition}</dd>
        </div>
      );
    case 'callout':
      const colors = {
        note: 'border-neutral-700 bg-neutral-900/30 text-neutral-300',
        important: 'border-neutral-500 bg-neutral-800/40 text-neutral-200',
        example: 'border-neutral-800 bg-neutral-900/20 text-neutral-400'
      };
      return (
        <div className={`my-12 p-8 rounded-2xl border-l-4 ${colors[block.style]} shadow-xl backdrop-blur-sm`}>
          <span className="uppercase text-xs font-bold tracking-[0.2em] opacity-50 mb-4 block">{block.style}</span>
          <p className="text-lg md:text-[21px] leading-[1.8] font-light">{block.content}</p>
        </div>
      );
    case 'table':
      return (
        <div className="my-16 overflow-x-auto rounded-2xl border border-neutral-800/50 bg-neutral-900/10 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-neutral-800">
                {block.headers.map((th, i) => (
                  <th key={i} className="py-6 px-8 text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase bg-neutral-900/30">
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/50">
              {block.rows.map((row, i) => (
                <tr key={i} className="hover:bg-neutral-900/40 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="py-6 px-8 text-neutral-300 text-lg md:text-[19px] leading-[1.7] font-light">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'diagram':
      return (
        <div className="my-20 p-10 bg-neutral-900/10 rounded-3xl border border-neutral-800/30 flex flex-col items-center justify-center relative overflow-hidden group shadow-2xl">
          {/* Subtle glow behind diagram */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          {block.svgCode ? (
            <div className="w-full max-w-3xl mb-10 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-700" dangerouslySetInnerHTML={{ __html: block.svgCode }} />
          ) : (
            <div className="w-full h-64 border border-dashed border-neutral-800/50 rounded-xl flex items-center justify-center text-neutral-700 mb-10 tracking-widest text-sm uppercase">
              [Visual: {block.title}]
            </div>
          )}
          <div className="text-center relative z-10 border-t border-neutral-800/50 pt-8 w-full max-w-2xl">
            <span className="block text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-3">Fig. — {block.title}</span>
            <span className="block text-sm md:text-base text-neutral-500 font-light leading-relaxed">{block.description}</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export function EditorialReader({ chapter, onBack }: EditorialReaderProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (chapter.pages.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <button onClick={onBack} className="absolute top-12 left-12 flex items-center gap-3 text-neutral-500 hover:text-white transition-colors group">
          <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-neutral-500 transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase">Archive</span>
        </button>
        <p className="text-neutral-500 font-serif text-2xl max-w-lg leading-relaxed">
          The contents of this chapter have not yet been extracted from the source material.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#EDEDED] font-sans selection:bg-neutral-800 selection:text-white pb-32">
      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-neutral-200 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Sticky Header Nav */}
      <header className="fixed top-0 inset-x-0 h-24 bg-gradient-to-b from-[#020202] to-transparent z-50 flex items-center px-6 md:px-12 transition-all">
        <button 
          onClick={onBack}
          className="flex items-center gap-4 text-neutral-500 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border border-neutral-800/80 bg-[#020202]/50 backdrop-blur-md flex items-center justify-center group-hover:border-neutral-500 group-hover:bg-neutral-900 transition-all shadow-lg">
            <ArrowLeft size={16} />
          </div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase hidden md:block">Return</span>
        </button>
        
        <div className="ml-auto flex flex-col items-end gap-1 text-xs font-bold tracking-[0.2em] uppercase text-neutral-600">
          <span className="text-neutral-400">Chapter {chapter.number}</span>
          <span className="opacity-50 text-[10px]">{chapter.title}</span>
        </div>
      </header>

      {/* Article Content */}
      <main className="pt-40 px-6 md:px-12 flex justify-center">
        <article className="w-full max-w-[800px]">
          {chapter.pages.map((page, index) => (
            <motion.div 
              key={page.pageNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-32 relative group"
            >
              {/* Subtle Page Divider line for long-form reading */}
              {index > 0 && (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-neutral-800/50" />
              )}

              {/* Page Number Marker (Internal tracking) */}
              <div className="absolute -left-20 md:-left-40 top-4 text-neutral-700/50 font-mono text-xs hidden lg:block tracking-widest group-hover:text-neutral-600 transition-colors">
                pg. {page.pageNumber}
              </div>

              {page.blocks.map((block, idx) => (
                <BlockRenderer key={idx} block={block} />
              ))}
            </motion.div>
          ))}
          
          {/* Elegant Chapter End */}
          <div className="mt-40 pt-24 border-t border-neutral-800/50 text-center flex flex-col items-center">
            <div className="w-2 h-2 rounded-full bg-neutral-700 mb-8" />
            <p className="text-neutral-500 font-serif text-xl italic mb-4">End of Chapter {chapter.number}</p>
            <p className="text-neutral-600 text-xs tracking-[0.2em] uppercase font-bold mb-12">Curated by Shaurya — AI Notes 2026</p>
            <button onClick={onBack} className="group flex flex-col items-center text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center mb-4 group-hover:border-white transition-all">
                <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
              </div>
              Return to Archive
            </button>
          </div>
        </article>
      </main>
    </div>
  );
}
