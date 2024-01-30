import React, { useEffect, useState } from "react";
import './SignUpPage.scss';
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService'
import { useUserMutation } from "../../hooks/userMutationHook";
import*as message from '../../components/Message/Message';
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons';

const SignUpPage = () => {
    const [Username, setUsername] = useState('')
    const [FullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Latitude, setLatitude] = useState('');
    const [Longitude, setLongitude] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('')
   
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/login')
    }

    const handleOnChangeUsername = (value) => {
        setUsername(value)

    }

    const handleOnChangeFullName = (value) => {
        setFullName(value)

    }

    const handleOnChangeEmail = (value) => {
        setEmail(value)

    }

    const handleOnChangePassword = (value) => {
        setPassword(value)

    }

    const handleOnChangeConfirmPassword = (value) => {
        setConfirmPassword(value)

    }
    const handleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    }

    const handleShowConfirmPassword = () => {
        setIsShowConfirmPassword(!isShowConfirmPassword);
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
      
    const handleSignUp =  () => {
        if (!Username || !FullName || !Email || !Password || !confirmPassword) {
            message.error('Mời bạn đăng nhập đủ thông tin');
            return;
        }
    
        
        if (Password !== confirmPassword) {
            message.error('Mời bạn xem lại mật khẩu');
            return;
        }
    
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            message.error('email phải có đuôi @gmai.com');
            return;
        }
        mutation.mutate({
            Username,
            FullName,
            Email,
            Password,
            confirmPassword,
            Latitude,
            Longitude
        });
          
    };

      const mutation = useUserMutation(
        data => UserService.signupUser(data)
      )
      const {data, isLoading, isSuccess, isError} = mutation;

    useEffect(() => {
        if(isSuccess){
            message.success('Tạo tài khoản thành công')
            navigate('/login')
        }
    })
    
    return(
        <div className='register-backgroud'>
        <div className='register-container'>
            <div className='register-content row'>
                <div className='col-12 text-register'>Register</div>
                    <div className='col-12 form-group register-input'>
                        <label>Username:</label>
                        <input type="text" 
                        className='form-control' 
                        placeholder='Enter your usename'
                        value={Username}
                        onChange={(e) => handleOnChangeUsername(e.target.value)}
                       
                       />
                    </div>

                    <div className='col-12 form-group register-input'>
                        <label>FullName:</label>
                        <input type="text" 
                        className='form-control' 
                        placeholder='Enter your FullName'
                        value={FullName}
                        onChange={(e) => handleOnChangeFullName(e.target.value)}
                       />
                    </div>

                    <div className='col-12 form-group register-input'>
                        <label>Email:</label>
                        <input type="text" 
                        className='form-control' 
                        placeholder='Enter your Email'
                        value={Email}
                        onChange={(e) => handleOnChangeEmail(e.target.value)}
                       />
                    </div>

                    <div className='col-12 form-group register-input'>
                        <label>Password:</label>
                        <div className='custom-input-Password'>
                            <input 
                            className='form-control parent-input-icon' 
                            placeholder='Enter your Password'
                            type={isShowPassword ? "text" : "password"}
                            value={Password}
                            onChange={(e) => handleOnChangePassword(e.target.value)}
                            />
                            <div className="icon-register" onClick={handleShowPassword}>
                                {isShowPassword ? (<EyeFilled/>) : (<EyeInvisibleFilled />)}
                            </div>
                        </div>

                    </div>  

                    <div className='col-12 form-group register-input'>
                        <label>ConfirmPassword:</label>
                        <div className='custom-input-Password'>
                            <input 
                            className='form-control parent-input-icon' 
                            placeholder='Enter your confirmPassword'
                            type={isShowConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => handleOnChangeConfirmPassword(e.target.value)}
                            />
                              <div className="icon-register_ConfirmPassword" onClick={handleShowConfirmPassword}>
                                {isShowConfirmPassword ? (<EyeFilled/>) : (<EyeInvisibleFilled />)}
                            </div>
                        </div>

                    </div>  

                    <div className='col-12'>
                    <button className='btn-register' onClick={handleSignUp}>Register</button>
                    </div>
                    <div className='col-12'>
                        <span className='Forgot-Password'>Bạn đã tạo tài khoản? <span className="sign-in" onClick={handleSignIn}>Đăng nhập</span></span>
                    </div>
            </div>
        </div>
    </div>
    )
    

}

export default SignUpPage;


