import React from 'react';
import { HeartPulse, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from './Button';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white flex flex-col items-center justify-center p-6 text-center">
      
      <div className="max-w-md w-full animate-fade-in-up">
        {/* Hero Icon */}
        <div className="mx-auto h-24 w-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 rotate-3 hover:rotate-6 transition-transform duration-300">
           <HeartPulse size={48} className="text-teal-500" />
        </div>

        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Nefro<span className="text-teal-600">Chat</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Un espacio seguro para evaluar y mejorar tus conocimientos sobre el cuidado de tus riñones.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 mb-10 text-left">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
              <Activity size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Evaluación Interactiva</h3>
              <p className="text-sm text-slate-500">Responde preguntas sencillas sobre tu salud renal.</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3">
            <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mt-1">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Consejos de Autocuidado</h3>
              <p className="text-sm text-slate-500">Recibe retroalimentación inmediata y consejos prácticos.</p>
            </div>
          </div>
        </div>

        <Button onClick={onStart} className="w-full group shadow-teal-500/25">
          <span>Comenzar Cuestionario</span>
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <p className="mt-6 text-xs text-slate-400">
          Diseñado con ❤️ para pacientes renales.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;