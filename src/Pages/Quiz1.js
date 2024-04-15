import Swal from 'sweetalert2';
import { SweetAlertProvider } from '@sweetalert2/react-content';
import React, { useState } from 'react';
import Header from '../Components/header'; // Import the Header component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../Images/bk3.jpg'; // Import the background image
import './Data.css';

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const showAlert = () => {
    Swal.fire('Hello, world!');
  };
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const correctAnswer = 'd) DAX';
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckAnswer = () => {
    setShowAnswer(true);
    setIsCorrect(selectedOption === correctAnswer);
  };

  return (
   
    <div style={appStyle}>
       <SweetAlertProvider>
      <Header />
      <br />
      <div className="cardContainer">
        <Card className="questionCard">
          <CardContent>
            <Typography variant="h5" component="h2">
              Which index represents the performance of the top 30 companies listed on the Frankfurt Stock Exchange in Germany?
            </Typography>

            <div className="optionsContainer">
              <label className="option">
                <input type="radio" value="a) NASDAQ" checked={selectedOption === 'a) NASDAQ'} onChange={handleOptionChange} />
                NASDAQ
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="b) FTSE 100" checked={selectedOption === 'b) FTSE 100'} onChange={handleOptionChange} />
                FTSE 100
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="c) CAC 40" checked={selectedOption === 'c) CAC 40'} onChange={handleOptionChange} />
                CAC 40
              </label>
              <br></br>
              <label className="option">
                <input type="radio" value="d) DAX" checked={selectedOption === 'd) DAX'} onChange={handleOptionChange} />
                DAX
              </label>
            </div>
            <br />
            <button className="checkButton" onClick={handleCheckAnswer}>Check Answer</button>

            {showAnswer && (
              <div>
                <Typography variant="h5" component="h2">
                  Answer
                </Typography>
                <Typography variant="body1">
                  The correct answer is: <b>{correctAnswer}</b>
                </Typography>
                {isCorrect ? <p className="feedbackText">Congratulations! You selected the correct answer.</p> : <p className="feedbackText">Oops! You selected the wrong answer.</p>}
              </div>
            )}
          </CardContent>
        </Card>
        <br></br>
        <button onClick={showAlert}>Next Question</button>
      </div>
      </SweetAlertProvider>
    </div>
  );
};

export default App;
