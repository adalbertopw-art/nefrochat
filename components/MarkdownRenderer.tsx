import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
        strong: ({ children }) => <span className="font-semibold text-teal-800">{children}</span>,
        ul: ({ children }) => <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>,
        li: ({ children }) => <li className="pl-1">{children}</li>,
        h1: ({ children }) => <h1 className="text-xl font-bold mb-2 text-teal-900">{children}</h1>,
        h2: ({ children }) => <h2 className="text-lg font-bold mb-2 text-teal-800">{children}</h2>,
        h3: ({ children }) => <h3 className="text-md font-bold mb-1 text-teal-700">{children}</h3>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;