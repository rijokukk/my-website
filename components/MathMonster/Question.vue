<!-- Component for Math Monster game. Handles the math question. -->
<template>
    <div class="controls">
        <div class="row">
            <h1 class="text-center">{{ question }}</h1>
        </div>
        <div class="row">
            <button id="number" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
            <button id="number" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
            <button id="number" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
            <button id="number" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
        </div>
    </div>
</template>

<script>
    const MODE_ADDITION = 1;
    const MODE_SUBTRACTION = 2;
    export default{
        data() {
            return {
                question: 'Oops, an error ocurred :/',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0}
                ]
            };
        },
        methods: {
            // Generates the math question
            generateQuestion() {
                const firstNumber = this.generateRandomNumber(1, this.questionDifficulty);
                const secondNumber = this.generateRandomNumber(1, this.questionDifficulty);
                const modeNumber = this.generateRandomNumber(1, 2);

                let correctAnswer = 0;

                switch (modeNumber) {
                    case MODE_ADDITION:
                        correctAnswer = firstNumber + secondNumber;
                        this.question = `What's ${firstNumber} + ${secondNumber}?`;
                        break;
                    case MODE_SUBTRACTION:
                        correctAnswer = firstNumber - secondNumber;
                        this.question = `What's ${firstNumber} - ${secondNumber}?`;
                        break;
                    default:
                        correctAnswer = 0;
                        this.question = 'Oops, an Error occurred :/';
                }

                this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[0].correct = false;
                this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[1].correct = false;
                this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[2].correct = false;
                this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                this.btnData[3].correct = false;

                const correctButton = this.generateRandomNumber(0, 3);
                this.btnData[correctButton].correct = true;
                this.btnData[correctButton].answer = correctAnswer;
            },
            // Generaates random number for the math problem
            generateRandomNumber(min, max, except) {
                const rndNumber = Math.round(Math.random() * (max - min)) + min;
                console.log(min, max, rndNumber);
                if (rndNumber == except) {
                    return this.generateRandomNumber(min, max, except);
                }
                return rndNumber;
            },
            // Forwards the answer
            onAnswer(isCorrect) {
                this.$emit('answered', isCorrect);
            }
        },
        created() {
            this.generateQuestion();
        },
        props: ['questionDifficulty']
    }
</script>

<style scoped>
#number {
    background-color: #a8cbeb;
}

#number:hover {
    background-color: #5481aa9d;
}
</style>
