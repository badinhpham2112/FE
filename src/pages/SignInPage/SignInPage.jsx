import React, { useEffect, useState } from "react";
import './SignInPage.scss';
import { useNavigate } from 'react-router-dom';
import { useUserMutation } from "../../hooks/userMutationHook";
import * as UserService from '../../services/UserService';
import*as message from '../../components/Message/Message'
import {jwtDecode} from 'jwt-decode';
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons';


const SignInPage = () => {
    const navigate = useNavigate();
    // const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Latitude, setLatitude] = useState('');
    const [Longitude, setLongitude] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const handleSignUp = () => {
        navigate('/register')
    }

    // const handleOnChangeUsername = (value) => {
    //     setUsername(value)
    // }

    const handleOnChangeEmail = (value) => {
        setEmail(value)

    }

    const handleOnChangePassword = (value) => {
        setPassword(value)

    }

    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }
    
    useEffect(() => {
        const getPosition = async () => {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                setLatitude(latitude);
                setLongitude(longitude);
            } catch (error) {
                console.error("Error getting geolocation:", error);
            }
        };

        getPosition();
    }, []);
    const handleSignIn = () => {
        if (!Email || !Password ) {
            message.error('Mời bạn đăng nhập đủ thông tin');
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            message.error('email phải có đuôi @gmai.com');
            return;
        }

        mutation.mutate({
            Email, Password, Latitude, Longitude
        });
    }

    const mutation = useUserMutation(
        data => UserService.loginUser(data)
    )
    const {data, isLoading, isSuccess, isError} = mutation;

    useEffect(() => {
        if (data && data?.status === 200) {
            message.success('Đăng nhập thành công')
            localStorage.setItem('access_token', JSON.stringify(data?.jwt));
            navigate('/');
        }
        if(data?.access_token){
            const decoded = jwtDecode(data?.access_token);
            console.log('decoded', decoded);
        }
    }, [data]);

    return(
        <div className='login-backgroud'>
        <div className='login-container'>
            <div className='login-content row'>
                <div className='col-12 text-login'>Login</div>
                   <div className='col-12 form-group login-input'>
                        <label>Email: </label>
                        <input type="text" 
                        className='form-control' 
                        placeholder='Enter your Email'
                        value={Email}
                        onChange={(e) => handleOnChangeEmail(e.target.value)}

                       />
                    </div>
                    <div className='col-12 form-group login-input'>
                        <label>Password:</label>
                        <div className='custom-input-password'>
                            <input 
                                className='form-control parent-input-icon' 
                                placeholder='Enter your password'
                                type={isShowPassword ? "text" : "password"}
                                value={Password}
                                onChange={(e) => handleOnChangePassword(e.target.value)}
                            />
                            <div className="icon-login" onClick={handleShowPassword}>
                                {isShowPassword ? (<EyeFilled/>) : (<EyeInvisibleFilled />)}
                            </div>
                        </div>


                </div>
               
                <div className='col-12'>
                <button className='btn-login' onClick={handleSignIn}>Login</button>
                </div>
                <div className='col-12'>
                    <span className='Forgot-password'>Bạn chưa có tài khoản? <span className="sign-up" onClick={handleSignUp}>Đăng ký</span></span>
                </div>
            </div>
        </div>
    </div>
    )
    

}

export default SignInPage;
