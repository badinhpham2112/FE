import React, { useState } from "react";
import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './InfomationPage.scss'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/hu10.jpg'
import img3 from '../../assets/hu5.jpg'
import img4 from '../../assets/hu9.jpg'

import { LikeOutlined, MessageOutlined, ShareAltOutlined} from '@ant-design/icons';
const InfomationPage = () => {
    return(
        <div className="container">
                <div className="col-6 form-search">
                    <div className="input-group">
                        <input type="text" className="form-control input-search" placeholder="Search"/>
                        <button className="btn btn-search"><SearchOutlined className="icon-search" /></button>
                    </div>
                </div>

                <div className="group-content">
                <div className="group">
                    <div className="group-nav">
                        <span className="group-children">yêu động vật</span>
                        <span className="group-children">Độc thân</span>
                        <span className="group-children">chán cơm thèm phở</span>

                        <span className="group-children">yêu động vật</span>
                        <span className="group-children">Độc thân</span>
                        <span className="group-children">chán cơm thèm phở</span>

                    </div>


                </div> 
                <div>
                <div className="content">
                    <div className="name-avartar">
                        <div className="logo-name">
                               PB
                        </div>
                        <div className="name">
                            Ba Đình phạm
                        </div>

                    </div>


                    <div className="description">ảnh đẹp hôm nay</div>

                    <div className="imgs-content">
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>

                        <div className="feature">
                         <span><LikeOutlined />Thích</span> 
                         <span><MessageOutlined />Bình luận</span>
                         <span><ShareAltOutlined />Chia sẻ</span>
                       
                          
                        </div>
                    </div> 

                    
                        

                  


                </div> 


                <div className="content">
                    <div className="name-avartar">
                        <div className="logo-name">
                               PB
                        </div>
                        <div className="name">
                            Ba Đình phạm
                        </div>

                    </div>


                    <div className="description">ảnh đẹp hôm nay</div>

                    <div className="imgs-content">
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>
                        <img src={img1} alt="" width={'154px'} className="img-user"/>

                        <div className="feature">
                         <span><LikeOutlined />Thích</span> 
                         <span><MessageOutlined />Bình luận</span>
                         <span><ShareAltOutlined />Chia sẻ</span>        
                        </div>
                    </div> 

                    
                        

                  


                </div> 
                </div>

              

                </div>

           
              

        </div>
    )
}


export default InfomationPage;