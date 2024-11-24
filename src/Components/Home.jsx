import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';


const Home = () => {
    const navigate = useNavigate();

    const selectTopic = (topic) => {
        navigate(`/theory/${topic}`);
      }
  return (
    <div className="home-page">
        <h1 className="heading">Welcome to Prep Zone</h1>
        <h3>Select a Topic</h3>
        <button onClick={() =>selectTopic('os')}>Operating System</button>
        <button onClick={()=>selectTopic('cn')}>Computer Networks</button>
        <button onClick={()=>selectTopic('dbms')}>Database Management System</button>
      
    </div>
  )
}

export default Home;


