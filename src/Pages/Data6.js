import React, { useState, useEffect } from 'react';
import Header from '../Components/header';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import backgroundImage from '../Images/background_image_2.jpg';
import sideimage from '../Images/NSE.jpg';
import { useNavigate } from 'react-router-dom';
import './Data.css';

const App = () => {
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const card1Timer = setTimeout(() => {
      setShowCard1(true);
    }, 0); // Change delay time here for the first card (in milliseconds)

    const card2Timer = setTimeout(() => {
      setShowCard2(true);
    }, 0); // Change delay time here for the second card (in milliseconds)

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 0); // Change delay time here for the button (in milliseconds)

    return () => {
      clearTimeout(card1Timer);
      clearTimeout(card2Timer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/data7');
  };

  const handleHomeButtonClick = () => {
    // Handle navigation to home page
    navigate('/about');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Header />
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {showCard1 && (
            <img
              className="animated-image"
              src={sideimage}
              alt="Side Image"
              height="300px"
              style={{ height: '300px', width: 'auto', marginRight: '40px', borderRadius: '10px' }}
            />
          )}
          {showCard2 && (
            <Card
              className="animated-image"
              style={{
                maxWidth: 600,
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                padding: '20px',
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  component="p"
                  style={{
                    fontSize: '1.2rem',
                    lineHeight: '1.6',
                    textAlign: 'justify',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                The NSE, founded in 1992 and operational since 1994, is a prominent Indian stock exchange, 
                notable for its Nifty 50 index comprising 50 actively traded stocks representing various sectors.

                </Typography>
              </CardContent>
            </Card>
          )}
        </div>
        {showButton && (
          <div>
            <button
              className="animatedButton"
              onClick={handleButtonClick}
              style={{
                marginTop: '40px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: 'blue',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease',
                marginRight: '10px', // Adjust the margin as needed
              }}
            >
              Next
            </button>
            <button
              className="homeButton"
              onClick={handleHomeButtonClick}
              style={{
                marginTop: '40px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: 'green',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.3s ease',
              }}
            >
              Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
