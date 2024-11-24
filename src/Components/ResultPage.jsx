import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import '../styles/Result.css';

const ResultPage = () => {
    const { topic } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { userAnswer, quizQuestions } = location.state;

    const calculateScore = () => {
        let score = 0;
        quizQuestions.forEach((question, index) => {
            const correctAnswerLetter = question.correctAnswer.split(" ")[0];
            const userAnswerLetter = userAnswer[index]?.split(" ")[0];

            if (correctAnswerLetter.trim() === userAnswerLetter?.trim()) {
                score += 1;
            }
        });
        return score;
    };

    const handleReset = () => {
        navigate(`/quiz/${topic}`);
    };

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className='result-page'>
            <h2>Quiz Results:</h2>
            <p>You scored {calculateScore()} out of {quizQuestions.length}</p>
            <button onClick={handleReset} className="reset-button">Reset Quiz</button>
            <button onClick={handleHome} className="home-button">Go to Home</button>
        </div>
    );
};

export default ResultPage;
