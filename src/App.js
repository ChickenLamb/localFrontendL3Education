import logoSVG from "./logo.svg"
// UserNavbar
import Classroom from "./pages/Classroom/Body";
import Settings from "./pages/Settings/Body";
import Subscriptions from "./pages/Subscriptions/Body";
import Home from "./pages/Home/Body";
//MainNavbar
import Mainpage from "./pages/Mainpage/pages/Mainpage/Body";
import AboutUs from "./pages/Mainpage/pages/About_Us/Body";
import ContactUs from "./pages/Mainpage/pages/Contact_Us/Body";
import Login from "./pages/Mainpage/pages/Login/Body";
import OurCourses from "./pages/Mainpage/pages/Our_Courses/Body";
import CourseInfo from "./pages/CourseInfo/Body";
//Footer
import Footer from "./components/Footer/Body";
//AdminNavBar
import UserInfo from "./pages/Admin/UserInformation/Body";
import CreateClassroom from "./pages/Admin/CreateClassroom/Body";
import EditClassroom from "./pages/Admin/EditClassroom/Body";
import AnnouncementSetting from "./pages/Admin/AnnouncementSetting/Body";
import PromotionSetting from "./pages/Admin/PromotionSetting/Body";
import Report from "./pages/Admin/Report/Body";
//default
import logo from "./assets/logo.png";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import HideAppBar from "./components/AppBar/HideAppBar";
import Navbar from "./components/Mainpage_Appbar/Navbar";
import { Routes, Route } from "react-router-dom";

import axios from 'axios';
import { useState, useEffect } from "react";


const pages = [
  {
    name: "我的首頁",
    link: "Home"
  },

  {
    name: "教室",
    link: "Classroom"
  },
  {
    name: "设定",
    link: "Settings"
  },
  {
    name: "购买课程",
    link: "Subscriptions"
  }
];
const adminPages = [
  {
    name: "用戶資料/激活狀態",
    link: "UserInfo"
  },
  {
    name: "教室",
    link: "CreateClassroom"
  }
  ,
  {
    name: "設置通知管理",
    link: "AnnouncementSetting"
  }
  ,
  {
    name: "優惠設置",
    link: "PromotionSetting"
  }
  ,
  {
    name: "報告",
    link: "Report"
  }
];
const mainpages = [
  {
    name: "首頁",
    link: "index.php"
  },

  {
    name: "关于我们",
    link: "About_Us"
  },
  {
    name: "课程",
    link: "Our_Courses"
  },
  {
    name: "联系我们",
    link: "Contact_Us"
  },
  {
    name: "登入/登出",
    link: "Login"
  }
];

function tokenTesting(token){

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://api.l3education.com.my/course/list',
    headers: { 
      'Authorization': 'Bearer '+token,  

    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

export default function App() {
  const [signedin, setSignedin] = useState(0);
  const [token, setToken] = useState('');
  const [group, setGroup] = useState('');
    //use function to set state of setSignedin
function signedinset(signedin){
  setSignedin(signedin);
  }
  //use function to set state of setToken
function tokenset(token){
setToken(token);
}
  //use function to set state of setGroup
function groupset(group){
  setGroup(group);
  }
  useEffect(() => {
    //get token from local storage
    setToken(localStorage.getItem(Object.keys(localStorage)
    .filter( (key)=> key.includes('accessToken') )));
    
    },[] );
useEffect(() => {
  tokenTesting(token);
  console.log('info',token,'\n\n',group,'\n');
  },[token] );

  return (
    <>
      <CssBaseline />
      <nav>
   
      {/* <HideAppBar login={login} somProp={pages} logo={logo} logoTitle="L3Education" /> */}
      <HideAppBar signedinset={signedin} somProp={adminPages} logo={logo} logoTitle="L3Education" />
        <Navbar pages={mainpages} />
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Classroom" element={<Classroom />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Subscriptions" element={<Subscriptions />} />
        <Route path="*" index element={<Mainpage />} />
        <Route path="About_Us" element={<AboutUs />} />
        <Route path="Contact_Us" element={<ContactUs />} />
        <Route path="Our_Courses" element={<OurCourses />} />
        <Route path="Login" element={<Login tokenset={tokenset} groupset={groupset} signedinset={signedinset}/>} />
        <Route path="UserInfo" element={<UserInfo />} />
        <Route path="CreateClassroom" element={<CreateClassroom />} />
        <Route path="EditClassroom" element={<EditClassroom />} />
        <Route path="AnnouncementSetting" element={<AnnouncementSetting />} />
        <Route path="PromotionSetting" element={<PromotionSetting />} />
        <Route path="Report" element={<Report />} />
        <Route path="CourseInfo" element={<CourseInfo />} />
      </Routes>
      <Footer/>
    </>
  );
}
// https://lifelongeducation3.wixsite.com/mysite
