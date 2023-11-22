import React, { useState, useEffect } from 'react';
import Api from './Api';
import "./LoginPage.css";
import select from 'react-select';
import { useNavigate } from 'react-router-dom';



const countryOptions = [
  { value: '1', label: 'United States (+1)' },
  { value: '91', label: 'India (+91)' },
  { value: '57', label: 'Colombia (+57)' },
  { value: '44', label: 'United Kingdom (+44)' },
  { value: '49', label: 'Germany (+49)' },
  { value: '57', label: 'Colombia (+57)' },

];

const LoginPage = ({ onPhoneNumberSubmit }) => {

  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const handlePhoneNumberSubmit = async () => {

    const fullPhoneNumber = `+${selectedCountry.value}${phoneNumber}`;
    const response = await Api.sendOtp(fullPhoneNumber);

    if (response.success) {
      onPhoneNumberSubmit(fullPhoneNumber);
      navigate('/verify');
      console.log('OTP Sent successfully');
    } else {
      console.error('Failed to send OTP');

    }

  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Api.sendOtp('yourPhoneNumber');
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      <h1>Sign In</h1>
      <p>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
      <div className="input-container">
        <select
          value={selectedCountry}
          className="select"
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <br />
      <button className="btn" onClick={handlePhoneNumberSubmit}>Sign In</button>
    </div>
  );
};

export default LoginPage;
