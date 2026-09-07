import React, { useState, useEffect } from 'react';
import { TESTS_DATABASE } from '../data/testsData';
import { Test, MCQ } from '../types/assessment';
import { ChevronRight, ArrowLeft, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function TestsView() {
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Re-attempt triggers on reload since we are keeping it in memory
  // but explicitly we also add a button to reset state.

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReattempt = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!activeTest) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">
            Practice Tests
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Select a test below to practice your objective knowledge. Each test features MCQs with detailed explanations upon submission.
          </p>
        </div>

        <div className="grid gap-4">
          {TESTS_DATABASE.map(test => (
            <button
              key={test.id}
              onClick={() => setActiveTest(test)}
              className="flex items-center justify-between p-6 bg-white dark:bg-[#0a0a0a] rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all group text-left shadow-sm hover:shadow-md"
            >
              <div>
                <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-1 group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors">
                  {test.title}
                </h3>
                <p className="text-sm text-neutral-500">{test.topic} • {test.questions.length} MCQs</p>
              </div>
              <ChevronRight className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  const score = Object.entries(selectedAnswers).filter(([qId, ansId]) => {
    const q = activeTest.questions.find(x => x.id === qId);
    return q?.correctOptionId === ansId;
  }).length;

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 pb-32">
      <button 
        onClick={() => { setActiveTest(null); handleReattempt(); }}
        className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Back to Tests
      </button>

      <div className="mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800 flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-3">{activeTest.topic}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {activeTest.title}
          </h1>
        </div>
        
        {isSubmitted && (
          <div className="text-right">
            <div className="text-xs text-neutral-500 uppercase tracking-wider font-semibold mb-1">Score</div>
            <div className="text-2xl font-extrabold text-[#D4AF37] dark:text-[#D4AF37]">
              {score} <span className="text-lg text-neutral-400 font-medium">/ {activeTest.questions.length}</span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-12">
        {activeTest.questions.map((q, index) => {
          const selectedOptionId = selectedAnswers[q.id];
          const isCorrect = selectedOptionId === q.correctOptionId;
          const showResult = isSubmitted;

          return (
            <div key={q.id} className="p-6 md:p-8 bg-neutral-50 dark:bg-[#0a0a0a] rounded-2xl border border-neutral-100 dark:border-neutral-900">
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-6 leading-relaxed flex items-start justify-between gap-4">
                <div>
                  <span className="text-neutral-400 mr-2">{index + 1}.</span>
                  {q.question}
                </div>
                {q.marks && (
                  <span className="shrink-0 text-sm font-semibold text-neutral-500 dark:text-neutral-400 whitespace-nowrap pt-1">
                    [{q.marks} Mark{q.marks !== 1 ? 's' : ''}]
                  </span>
                )}
              </h3>
              
              <div className="space-y-3">
                {q.options.map(opt => {
                  const isSelected = selectedOptionId === opt.id;
                  const isThisOptionCorrect = opt.id === q.correctOptionId;
                  
                  let optionClass = "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111] hover:bg-neutral-50 dark:hover:bg-neutral-900";
                  let icon = null;

                  if (showResult) {
                    if (isThisOptionCorrect) {
                      optionClass = "border-green-500 bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-100 ring-1 ring-green-500";
                      icon = <CheckCircle2 size={18} className="text-green-500 shrink-0" />;
                    } else if (isSelected && !isThisOptionCorrect) {
                      optionClass = "border-red-500 bg-red-50 dark:bg-red-950/30 text-red-900 dark:text-red-100 ring-1 ring-red-500";
                      icon = <XCircle size={18} className="text-red-500 shrink-0" />;
                    } else {
                      optionClass = "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#111] opacity-50";
                    }
                  } else if (isSelected) {
                    optionClass = "border-[#D4AF37] bg-[#D4AF37]/10 dark:bg-[#967A26]/20 text-[#967A26] dark:text-[#D4AF37]/20 ring-1 ring-[#D4AF37]";
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(q.id, opt.id)}
                      disabled={isSubmitted}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left ${optionClass}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-sm uppercase opacity-50 mt-0.5">{opt.id}.</span>
                        <span className="text-base">{opt.text}</span>
                      </div>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className={`mt-6 p-4 rounded-xl border ${isCorrect ? 'bg-green-50/50 border-green-100 dark:bg-green-900/10 dark:border-green-900/30' : 'bg-red-50/50 border-red-100 dark:bg-red-900/10 dark:border-red-900/30'}`}>
                  <div className="flex gap-2">
                    <span className="font-semibold text-sm uppercase tracking-wider mb-1 block">
                      {isCorrect ? <span className="text-green-600 dark:text-green-400">Correct</span> : <span className="text-red-600 dark:text-red-400">Incorrect</span>}
                    </span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mt-1">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 z-20">
        <div className="max-w-3xl mx-auto flex items-center justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="w-full md:w-auto px-8 py-3 bg-[#D4AF37] text-white font-semibold rounded-xl hover:bg-[#B5952F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              Submit Test ({Object.keys(selectedAnswers).length}/{activeTest.questions.length})
            </button>
          ) : (
            <button
              onClick={handleReattempt}
              className="w-full md:w-auto px-8 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} />
              Re-attempt Test
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
