import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw, AlertCircle, Award } from 'lucide-react';
import { Message } from '../types';
import ChatMessage from './ChatMessage';
import QuizOptions from './QuizOptions';
import { getRandomQuestions, Question, Option } from '../data/questions';
import Button from './Button';

interface ChatInterfaceProps {
  onRestart: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onRestart }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(-1); // -1 means intro
  const [score, setScore] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (text: string, role: 'user' | 'model') => {
    setMessages(prev => [...prev, {
      id: Date.now().toString() + Math.random(),
      role,
      text,
      timestamp: new Date()
    }]);
  };

  // Helper to simulate bot thinking delay
  const simulateBotResponse = async (text: string, delay = 1000) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, delay));
    setIsTyping(false);
    addMessage(text, 'model');
  };

  // Start the conversation
  useEffect(() => {
    const startQuiz = async () => {
      // 1. Initialize Random Questions
      const questionsForSession = getRandomQuestions(10);
      setQuizQuestions(questionsForSession);

      // 2. Greetings
      await simulateBotResponse("¡Hola! Soy **NefroAmigo** 👋, tu asistente virtual del **Centro de Excelencia en Enfermedad Renal Crónica del Hospital Internacional de Colombia**.");
      await simulateBotResponse(`Estoy aquí para repasar contigo conocimientos clave sobre el **autocuidado en etapas previas a la diálisis** (preservación de la función renal).\n\nTe haré **${questionsForSession.length} preguntas breves**. No te preocupes si fallas, ¡estamos aquí para aprender!`);
      
      // 3. Ask first question
      if (questionsForSession.length > 0) {
        await simulateBotResponse(questionsForSession[0].text, 1000);
      }
      
      setCurrentQuestionIdx(0);
    };

    if (messages.length === 0) {
      startQuiz();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionSelect = async (option: Option) => {
    // 1. Show user selection
    addMessage(option.text, 'user');
    
    // 2. Validate and Score
    const currentQ = quizQuestions[currentQuestionIdx];
    const isCorrect = option.isCorrect;
    if (isCorrect) setScore(s => s + 1);

    // 3. Bot Feedback
    // Dynamic feedback based on correctness + educational explanation
    const feedbackPrefix = isCorrect 
      ? "✅ **¡Correcto!**" 
      : "❌ **No exactamente.**";
      
    await simulateBotResponse(`${feedbackPrefix} ${currentQ.explanation}`, 600);

    // 4. Move to next question or finish
    const nextIdx = currentQuestionIdx + 1;
    if (nextIdx < quizQuestions.length) {
      await simulateBotResponse(quizQuestions[nextIdx].text, 1200);
      setCurrentQuestionIdx(nextIdx);
    } else {
      finishQuiz(score + (isCorrect ? 1 : 0), quizQuestions.length); 
    }
  };

  const finishQuiz = async (finalScore: number, totalQuestions: number) => {
    setQuizFinished(true);
    setCurrentQuestionIdx(-1); // Disable options
    
    let evaluation = "";
    if (finalScore === totalQuestions) {
      evaluation = "¡Excelente! 🌟 Demuestras un gran compromiso con el cuidado de tus riñones. ¡Sigue así!";
    } else if (finalScore >= totalQuestions * 0.7) {
      evaluation = "¡Muy bien! 👍 Tienes buenas bases para proteger tu función renal, pero siempre hay algo nuevo que aprender.";
    } else {
      evaluation = "Gracias por participar. 💪 Aprender sobre la enfermedad es el primer paso para retrasar su progresión. ¡No te desanimes!";
    }

    await simulateBotResponse(`🎉 **¡Cuestionario completado!**\n\nHas acertado **${finalScore} de ${totalQuestions}** preguntas.\n\n${evaluation}`);
  };

  const currentQuestion = currentQuestionIdx >= 0 && currentQuestionIdx < quizQuestions.length 
    ? quizQuestions[currentQuestionIdx] 
    : null;

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      {/* Header */}
      <header className="flex-none bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm z-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white shadow-md">
            <Award size={24} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-800">NefroAmigo</h1>
            <p className="text-xs text-slate-500 font-medium">HIC - Hospital Internacional de Colombia</p>
          </div>
        </div>
        <button 
          onClick={onRestart}
          className="text-slate-500 hover:text-teal-600 transition-colors p-2 rounded-full hover:bg-slate-100"
          title="Reiniciar cuestionario"
        >
          <RefreshCw size={20} />
        </button>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-hide">
        <div className="max-w-3xl mx-auto pb-4">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          
          {isTyping && (
             <div className="flex w-full justify-start mb-6 animate-fade-in-up">
               <div className="flex max-w-[75%] flex-row gap-3">
                 <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-sm bg-teal-100 text-teal-600">
                    <div className="h-2 w-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 </div>
                 <div className="px-5 py-4 rounded-2xl rounded-tl-none bg-white border border-slate-100 shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                 </div>
               </div>
             </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input / Options Area */}
      <div className="flex-none bg-slate-50 border-t border-slate-200 p-4 pb-6 md:pb-8">
        <div className="max-w-2xl mx-auto">
          {currentQuestion && !isTyping && (
            <QuizOptions 
              options={currentQuestion.options} 
              onSelect={handleOptionSelect}
              disabled={isTyping} 
            />
          )}

          {quizFinished && !isTyping && (
            <div className="flex justify-center animate-fade-in-up">
              <Button onClick={onRestart}>
                <RefreshCw size={18} className="mr-2" />
                Reiniciar Cuestionario
              </Button>
            </div>
          )}
          
          {/* Fallback if waiting but not typing and no question (unlikely but safe) */}
          {!currentQuestion && !quizFinished && !isTyping && messages.length === 0 && (
             <p className="text-center text-slate-400 text-sm">Iniciando...</p>
          )}

          <p className="text-center text-xs text-slate-400 mt-4">
            Selecciona la opción que consideres correcta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;