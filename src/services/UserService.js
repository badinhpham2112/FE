import axios from 'axios';

export const signupUser = async(data) => {
    console.log('data', data)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
    return res.data;
}

export const loginUser = async(data) => {
    console.log('data', data)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
    return res.data;
}