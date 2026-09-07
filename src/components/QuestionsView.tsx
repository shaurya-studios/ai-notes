import React, { useState } from 'react';
import { QUESTIONS_DATABASE } from '../data/questionsData';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export function QuestionsView() {
  const [openQuestionIds, setOpenQuestionIds] = useState<Set<string>>(new Set());

  const toggleQuestion = (id: string) => {
    setOpenQuestionIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Group questions by chapter
  const groupedQuestions = QUESTIONS_DATABASE.reduce((acc, q) => {
    if (!acc[q.chapterTitle]) {
      acc[q.chapterTitle] = [];
    }
    acc[q.chapterTitle].push(q);
    return acc;
  }, {} as Record<string, typeof QUESTIONS_DATABASE>);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
          Important Questions
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          Curated short-answer and subjective questions aligned with CBSE Class 10 AI (Code 417). 
          Test your knowledge before viewing the CBSE-standard solutions.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(groupedQuestions).map(([chapterTitle, questions]) => (
          <div key={chapterTitle}>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 border-l-4 border-[#D4AF37] pl-4 py-1">
              {chapterTitle}
            </h2>
            <div className="space-y-4">
              {questions.map((q, index) => {
                const isOpen = openQuestionIds.has(q.id);
                return (
                  <div key={q.id} className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden transition-all shadow-sm">
                    <button
                      onClick={() => toggleQuestion(q.id)}
                      className="w-full flex items-start justify-between p-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
                    >
                      <div className="flex gap-4 items-start pr-6">
                        <span className="font-mono text-sm font-semibold text-neutral-400 mt-1">
                          Q{index + 1}.
                        </span>
                        <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
                          {q.question}
                          {q.marks && (
                            <span className="inline-block ml-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                              [{q.marks} Mark{q.marks !== 1 ? 's' : ''}]
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0 mt-0.5">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${isOpen ? 'text-[#D4AF37] dark:text-[#D4AF37]' : 'text-neutral-400'}`}>
                          {isOpen ? 'Hide Solution' : 'View Solution'}
                        </span>
                        {isOpen ? <ChevronUp size={18} className="text-[#D4AF37] dark:text-[#D4AF37]" /> : <ChevronDown size={18} className="text-neutral-400" />}
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2">
                        <div className="p-6 bg-[#D4AF37]/10/50 dark:bg-[#967A26]/10 rounded-xl border border-[#D4AF37]/20 dark:border-[#967A26]/30">
                          <div className="flex items-center gap-2 text-[#D4AF37] dark:text-[#D4AF37] font-semibold text-sm uppercase tracking-wider mb-3">
                            <CheckCircle2 size={16} />
                            Answer / Solution
                          </div>
                          <p className="text-neutral-700 dark:text-neutral-300 whitespace-pre-line leading-relaxed text-base">
                            {q.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
