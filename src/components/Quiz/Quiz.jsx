import React, { useContext, useState } from "react";
import { dataContext } from "../../context";
import classes from './Quiz.module.scss'

const Quiz = () => {

    const {geography} = useContext(dataContext)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    const handleAnswer = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if(nextQuestion < geography.length) {
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
                        <p>Правильных ответов {score} из {geography.length}</p>
                    </div> 
                    :
                    <div className={classes.quiz}>
                    <div className={classes.questions}>
                        <div className={classes.questions__count}>
                            <span>{currentQuestion + 1}</span> / {geography.length}
                        </div>
                        <div className={classes.questions__text}>
                            {geography[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className={classes.answers}>
        
                        {geography[currentQuestion].answerOptions.map(answer => (
                            <button onClick={() => handleAnswer(answer.isCorrect)} className={classes.answers__button}>{answer.answerText}</button>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default Quiz;