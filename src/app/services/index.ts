import { HttpClient, HttpHandler } from '@angular/common/http';

const SERVER_URL: string = 'https://theia-server_762122.onrender.com/theia';

export const askTheia = async (question: Buffer | string): Promise<any> => {
    let http: HttpClient;
    let body = { 'question': question };
    if (!question) {
        body.question = 'welcome';
    }
    const json = JSON.stringify(body);
    http.post<any>(SERVER_URL, json).subscribe((res) => console.log(res))
    return http.post(SERVER_URL, body);
}