import React, { useContext, useState } from "react";
import { dataContext } from "../../context";
import classes from './Quiz.module.scss'

const Quiz = ({questions}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const {setStart} = useContext(dataContext)

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
        <div className={classes.quiz}>
            {
                showScore ? 
                    <div className={classes.quiz__score}>
                        <div className={classes.quiz__scoreText}>
                            <p>Правильных ответов {score} из {questions.length}</p>
                        </div>
                        <button className={classes.quiz__againBtn} onClick={() => setStart(false)}>
                            Сыграть еще раз
                        </button>
                    </div>
                    :
                    <div className={classes.quiz__body}>
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
        </div>
    )
}

export default Quiz;