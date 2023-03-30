export interface Answer {
  question: string;
  answer: string;
  audio: any;
}

export interface User {
  id: string;
  email: string;
  username: string;
  pfp: string;
  gender: string;
  wallet: string;
}

export interface Message {
  author: string;
  message: string;
  datetime: string;
}

export interface AudioMsg {
  message: Message;
  audio: Buffer;
}
