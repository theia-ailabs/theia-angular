export interface Answer {
    question: string;
    answer: string;
    audio: Buffer;
}

export interface User {
    id: string;
    email: string;
    username: string;
    pfp: string;
    gender: string;
    wallet: string;
}