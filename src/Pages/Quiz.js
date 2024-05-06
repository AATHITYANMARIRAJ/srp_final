import React, { useState } from 'react';
import './Quiz.css';
import Swal from 'sweetalert2';

function App() {
  const topCompanies = ['Amazon', 'Google', 'Infosys', 'Microsoft', 'Apple', 'Tesla', 'Facebook', 'Alibaba', 'Tencent', 'Johnson & Johnson'];
  const startups = ['Flipkart', 'Ola', 'Paytm', 'Swiggy', 'Zomato', 'Byju\'s', 'Oyo', 'Udaan', 'Cred', 'Delhivery'];

  const [answers, setAnswers] = useState({ novice: '', investment: '', type: '' });

  const handleSelect = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  const handleSubmit = () => {
    // Check if any question is unanswered
    if (!answers.novice || !answers.investment || !answers.type) {
      Swal.fire({
        title: 'Incomplete!',
        text: 'Please answer all questions.',
        icon: 'warning',
        confirmButtonText: 'Okay'
      });
      return; // Exit function if any question is unanswered
    }

    let message = '';
    if ((answers.novice === 'b'||(answers.novice==='a')) && ((answers.investment === 'a')||(answers.investment === 'b')) && answers.type === 'a') {
      message = "You can invest in companies like Amazon, Google, Infosys";
    } else if ((answers.novice === 'a'||(answers.novice==='b')) && answers.investment === 'b' && answers.type === 'b') {
      message = "You can invest in startups like 'Flipkart', 'Ola'";
    } else {
      const combinedOptions = topCompanies.concat(startups).join(', ');
      message = `You can consider investing in the following:\n\n${combinedOptions}`;
    }

    Swal.fire({
      title: 'Investment Options',
      text: message,
      icon: 'info',
      confirmButtonText: 'Okay'
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h2>Stock Market Investment Questionnaire</h2>
          <div>
            <p>Are you a novice?</p>
            <select onChange={(e) => handleSelect('novice', e.target.value)}>
              <option value="">Select</option>
              <option value="a">No</option>
              <option value="b">Yes</option>
            </select>
          </div>
          <div>
            <p>How much money would you like to invest?</p>
            <select onChange={(e) => handleSelect('investment', e.target.value)}>
              <option value="">Select</option>
              <option value="a">Above 1 Lakh</option>
              <option value="b">Below 1 Lakh</option>
            </select>
          </div>
          <div>
            <p>Would you like to invest in an established company or in a startup?</p>
            <select onChange={(e) => handleSelect('type', e.target.value)}>
              <option value="">Select</option>
              <option value="a">Established Company</option>
              <option value="b">Startup</option>
            </select>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
