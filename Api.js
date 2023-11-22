
const Api = {
    sendOtp: async (phoneNumber) => {
        const endpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:3000';
        const userId = process.env.REACT_APP_USER_ID;

        const response = await fetch(`${endpoint}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber: userId }),
        });

        const responseData = await response.json();

        return responseData;
    },

    verifyOtp: async (phoneNumber, otp) => {
        const endpoint = process.env.REACT_APP_API_ENDPOINT;
        const userId = process.env.REACT_APP_USER_ID;
        const requestId = process.env.REACT_APP_REQUEST_ID;

        const response = await fetch(`${endpoint}/auth/verify_otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: userId,
                requestId: requestId,
                otp: otp,
            }),
        });

        return await response.json();
    },

    resendOtp: async (phoneNumber) => {
        const endpoint = process.env.REACT_APP_API_ENDPOINT;
        const userId = process.env.REACT_APP_USER_ID;
        const requestId = process.env.REACT_APP_REQUEST_ID;

        const response = await fetch(`${endpoint}/auth/resend_otp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: userId,
                requestId: requestId,
            }),
        });

        return await response.json();
    },

    anotherNumber: async (phoneNumber) => {
        const endpoint = process.env.REACT_APP_API_ENDPOINT;
        const userId = process.env.REACT_APP_USER_ID;


        const response = await fetch(`${endpoint}/auth/use_another_number`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: userId,
            }),
        });

        return await response.json();
    },
};


export default Api;
