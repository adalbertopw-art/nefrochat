import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';
import { AppScreen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.WELCOME);

  const startChat = () => {
    setCurrentScreen(AppScreen.CHAT);
  };

  const restartApp = () => {
    // Simple way to reset state is to unmount the chat component
    setCurrentScreen(AppScreen.WELCOME);
  };

  return (
    <div className="h-full w-full">
      {currentScreen === AppScreen.WELCOME ? (
        <WelcomeScreen onStart={startChat} />
      ) : (
        <ChatInterface onRestart={restartApp} />
      )}
    </div>
  );
};

export default App;