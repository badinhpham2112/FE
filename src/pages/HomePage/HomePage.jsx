import React, { useState } from "react";
import { Menu } from 'antd';
import './HomePage.scss'
import { AppstoreOutlined, UserOutlined, HomeFilled} from '@ant-design/icons';
import { getItem } from "../../Utils";
import InfomationPage from "../InfomationPage/InfomationPage";


const HomePage = () => {
    const items = [
        getItem('Dành cho bạn', 'infomation', <HomeFilled />),
        getItem('Đang Follow', 'product', <AppstoreOutlined />),
        getItem('Thông tin cá nhân', 'order', <UserOutlined />),
        getItem('Tìm kiếm quanh đây', 'Search-around-here', <UserOutlined />),

       
     
      ];
    const [KeySelected, setKeySelected] = useState('');

    const renderPage = (key) => {
        switch(key) {
            case 'infomation':
            return(
                <InfomationPage/>
            )
            case 'product':
                return(
                    <div>Bốn</div>
                )
            case 'order':
                return(
                    <div>Năm</div>
                    )

            case 'Search-around-here':
                return(
                    <div>Sáu</div>
                    )
            default:
            return <></>
        }
        
    }

    const handleOnClick = ({ key }) => {
        setKeySelected(key)
    }
    console.log('KeySelected', KeySelected)
    return(
        <>
        {/* <HeaderConponents isHiddenSearch = 'false'  isHiddenCart = 'false'/> */}
        <div style={{display: 'flex'}}>
             <Menu 
                mode="inline"
                style={{ width: 256, 
                         height: '100vh',
                         boxShadow: '1px 1px 4px #ccc' 
                       }}
                items={items}
                onClick={handleOnClick}
              />

              <div style={{flex: 1, padding: '15px'}}>
               {renderPage(KeySelected)}
               

            </div>
            
           
        </div>
        </>
        
        
       
    )
}

export default HomePage;