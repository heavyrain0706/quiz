import React, { useState } from "react";
import classes from './Quiz.module.scss'

const Quiz = () => {

    const questions = [
        {
            questionText: 'Столица США',
            answerOptions: [
                {answerText: 'Бостон', isCorrect: false},
                {answerText: 'Вашингтон', isCorrect: false},
                {answerText: 'Нью-Йорк', isCorrect: true},
                {answerText: 'Лос-Анджелес', isCorrect: false}
            ]
        },
        {
            questionText: 'Столица Австрии',
            answerOptions: [
                {answerText: 'Вена', isCorrect: false},
                {answerText: 'Гамбург', isCorrect: false},
                {answerText: 'Чизбург', isCorrect: false},
                {answerText: 'Верона', isCorrect: false}
            ]
        },
        {
            questionText: 'Столица Италии',
            answerOptions: [
                {answerText: 'Детройт', isCorrect: false},
                {answerText: 'Рим', isCorrect: false},
                {answerText: 'Неаполь', isCorrect: false},
                {answerText: 'Палермо', isCorrect: false}
            ]
        },
        {
            questionText: 'Столица Поляндии',
            answerOptions: [
                {answerText: 'Катовице', isCorrect: false},
                {answerText: 'Кельн', isCorrect: false},
                {answerText: 'Варшава', isCorrect: false},
                {answerText: 'Вроцлав', isCorrect: false}
            ]
        }
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if(nextQuestion < questions.length) {
             setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    return (

        <>
            {
                showScore ? 
                    <div className="score">
                        <p>Правильных ответов {score} из {questions.length}</p>
                    </div> 
                    :
                    <div className={classes.quiz}>
                    <div className={classes.questions}>
                        <div className={classes.questions__count}>
                            <span>{currentQuestion + 1}</span> / {questions.length}
                        </div>
                        <div className={classes.questions__text}>
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className={classes.answers}>
        
                        {questions[currentQuestion].answerOptions.map(answer => (
                            <button onClick={() => handleAnswer(answer.isCorrect)} className={classes.answers__button}>{answer.answerText}</button>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default Quiz;