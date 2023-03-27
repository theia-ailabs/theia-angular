import { HttpClient } from '@angular/common/http';
import { Answer } from '../types';

const SERVER_URL: string = 'https://theia-server_762122.onrender.com/theia';

export const askTheia = async (question: Buffer | string):
    Promise<Object | Answer> => {
    let http: HttpClient;
    let body = { 'question': question };
    if (!question) {
        body.question = 'welcome';
    }
    const json = JSON.stringify(body);
    http.post<any>(SERVER_URL, json).subscribe((res) => {
        console.log(res);
        return res as Answer;
    })
    return http.post(SERVER_URL, body);
}