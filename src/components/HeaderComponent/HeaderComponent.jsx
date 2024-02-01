import React from "react";
import './HeaderComponent.scss'
import Logo from '../../assets/logoIUDI.jpg'
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
        
    }
    return(
        <div className="header-body">
            <div className="container text-center">
                <div className="row">
                    <div className="col-6 Logo">
                        <img src={Logo} width='110px' className="img-fluid" alt="Logo" />
                    
                    </div>

                    {/* <div className="col-6 form-search">
                        <div className="input-group">
                            <input type="text" className="form-control input-search" placeholder="Search"/>
                            <button className="btn btn-search"><SearchOutlined className="icon-search" /></button>
                        </div>
                    </div> */}
                    <div className="col-6 form-Login">
                        <button className="btn btn-login" onClick={handleLogin}>Đăng nhập</button>
                    </div>
               </div>
            </div>

        </div>
     
    )
}
export default HeaderComponent