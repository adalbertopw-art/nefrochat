import React from 'react';
import { Option } from '../data/questions';

interface QuizOptionsProps {
  options: Option[];
  onSelect: (option: Option) => void;
  disabled: boolean;
}

const QuizOptions: React.FC<QuizOptionsProps> = ({ options, onSelect, disabled }) => {
  return (
    <div className="grid gap-3 w-full animate-fade-in-up">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className="w-full text-left px-5 py-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:bg-teal-50 hover:border-teal-200 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-semibold flex items-center justify-center mr-4 group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors">
              {option.id.toUpperCase()}
            </span>
            <span className="text-slate-700 font-medium group-hover:text-teal-900">{option.text}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default QuizOptions;