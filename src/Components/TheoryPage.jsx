import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData'
import '../styles/Theory.css';

const TheoryPage = () => {
  const { topic } = useParams();
  const navigate = useNavigate();

  const takeQuiz = () => {
    navigate(`/quiz/${topic}`);
  };

  const theoryContent1 = quizData[topic]?.theory1;
  const theoryContent2 = quizData[topic]?.theory2;
  const theoryContent3 = quizData[topic]?.theory3;

  return (
    <div className='theory-page'>
        <div className="theory-header">
            <h2 className="theory-title">{topic.toUpperCase()}</h2>
        </div>
        <div className="theory-content">
            <p className="theory-text">{theoryContent1}</p>
            <p className="theory-text">{theoryContent2}</p>
            <p className="theory-text">{theoryContent3}</p>
        </div>
        <div className="button-container">
            <button onClick={takeQuiz}>Take Quiz</button>
        </div>
    </div>
  )
}

export default TheoryPage;
