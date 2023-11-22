import React, { useState } from 'react';
import Api from './Api';
import "./VerifyOtpPage.css"

const VerifyOtpPage = ({ phoneNumber }) => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpVerification = async () => {
        const enteredOtp = otp.join(''); // Combine the digits to form the complete OTP
        const response = await Api.verifyOtp(phoneNumber, enteredOtp);

        if (response.success) {
            console.log('OTP Verified');
        } else {
            console.error('OTP Verification Failed');
        }
    };

    const handleResendOtp = async () => {
        const response = await Api.resendOtp(phoneNumber);

        if (response.success) {
            console.log('OTP Resent');
        } else {
            console.error('Failed to resend OTP');
        }
    };
    const handleUseAnotherNumber = async () => {
        const response = await Api.anotherNumber(phoneNumber);

        if (response.success) {
            console.log('OTP Resent');
        } else {
            console.error('Failed to resend OTP');
        }
    };
    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };
    return (
        <div>
            <h1>OTP Verification</h1>
            <p>We have sent and OTP to {phoneNumber} Please enter the code received to verify.</p>
            <div className="grid grid-cols-4 gap-4">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className="input1"
                    />
                ))}
            </div>
            <br />
            <button className='btn1' onClick={handleOtpVerification}>Verify</button><br />
            <button className='btn2' onClick={handleResendOtp}>Resend OTP</button><br />
            <button className='btn2' onClick={handleUseAnotherNumber}>Use another number</button>
        </div>
    );
};

export default VerifyOtpPage;
