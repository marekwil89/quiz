export class Quiz {
    constructor(
        public name: string,
        public category: string,
        public questions: Array<
        {
            text: string, 
            answers: Array<{
                text: string,
                correct: boolean
            }>
        }>
    ) {  }
}