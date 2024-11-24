import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home'
import TheoryPage from './Components/TheoryPage';
import QuizPage from './Components/QuizPage';
import ResultPage from './Components/ResultPage';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path="/theory/:topic" element={<TheoryPage/>}/>
          <Route path="/quiz/:topic" element={<QuizPage/>}/>
          <Route path="/result/:topic" element={<ResultPage />}/>
        </Routes>
      </div>
    </Router> 
  )
}

export default App
