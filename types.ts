export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  isSessionActive: boolean;
}

export enum AppScreen {
  WELCOME = 'WELCOME',
  CHAT = 'CHAT',
}