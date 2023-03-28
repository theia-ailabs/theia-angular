import { SERVER_URL } from "../config";

declare let webkitSpeechRecognition: any;

export class VoiceRec {

    theiaUrl = SERVER_URL + '/theia';

    recognition = new webkitSpeechRecognition();
    isStoppedSpeechRecog = false;
    public textSound = "";
    tempWords!: string;

    constructor() { }

    init() {
        this.recognition.interimResults = true;
        this.recognition.lang = 'es';

        this.recognition.addEventListener('result', (e: { results: Iterable<unknown> | ArrayLike<unknown>; }) => {
            const transcript = Array.from(e.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join('');
            this.tempWords = transcript;
            console.log(transcript);
        });
    }

    async start(): Promise<string> {
        this.isStoppedSpeechRecog = false;
        this.recognition.start();
        console.log("Speech recognition started")
        await this.recognition.addEventListener('end', (): string | void => {
            if (this.isStoppedSpeechRecog) {
                this.recognition.stop();
                console.log("End speech recognition");
                return this.textSound;
            } else {
                this.recognition.start();
                console.log(this.tempWords);
            }
        });
        return this.textSound;
    }
    stop() {
        this.isStoppedSpeechRecog = true;
        this.wordConcat();
        this.recognition.stop();
        console.log("End speech recognition");
    }

    wordConcat() {
        this.textSound = this.textSound + ' ' + this.tempWords + '.';
        this.tempWords = '';
    }

}