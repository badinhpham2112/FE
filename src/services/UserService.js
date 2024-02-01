import axios from 'axios';

export const signupUser = async(data) => {

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
    console.log('res: ', res)
    return res.data;
}

export const loginUser = async(data) => {
    console.log('data', data)
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
    return res.data;
}