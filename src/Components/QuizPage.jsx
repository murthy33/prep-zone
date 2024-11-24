import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData';
import '../styles/Quiz.css';

const QuizPage = () => {
    const { topic } = useParams();
    const quizQuestions = quizData[topic]?.questions;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const navigate = useNavigate();

    const handleAnswerSelect = (selectedOption, questionIndex) => {
        const updatedAnswers = [...userAnswer];
        updatedAnswers[questionIndex] = selectedOption;

        setUserAnswer(updatedAnswers);
    };

    const handleSubmit = () => {
        navigate(`/result/${topic}`, { state: { userAnswer, quizQuestions } });
    };

    return (
        <div className='quiz-page'>
            <div className='question-section'>
                {quizQuestions.map((question, questionIndex) => (
                    <div key={questionIndex} className="question-block">
                        <h3>{question.questionText}</h3>
                        <div className="options-container">
                            {question.options.map((option, optionIndex) => (
                                <button
                                    key={optionIndex}
                                    className={`option ${userAnswer[questionIndex] === option ? 'selected' : ''}`}
                                    onClick={() => handleAnswerSelect(option, questionIndex)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="submit-button">Submit Quiz</button>
        </div>
    );
};

export default QuizPage;
