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
//Footer
import Footer from "./components/Footer/Body";
//default
import logo from "./assets/logo.png";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import HideAppBar from "./components/AppBar/HideAppBar";
import Navbar from "./components/Mainpage_Appbar/Navbar";
import { Routes, Route } from "react-router-dom";

import { useState } from "react";


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
export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <CssBaseline />
      <nav>
        <HideAppBar login={login} somProp={pages} logo={logo} logoTitle="L3Education" />
        <Navbar pages={mainpages} />
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Classroom" element={<Classroom />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Subscriptions" element={<Subscriptions />} />
{console.log('this',login)}
        <Route path="*" index element={<Mainpage />} />
        <Route path="About_Us" element={<AboutUs />} />
        <Route path="Contact_Us" element={<ContactUs />} />
        <Route path="Our_Courses" element={<OurCourses />} />
        <Route path="Login" element={<Login setLogin={setLogin} />} />
      </Routes>
      <Footer/>
    </>
  );
}
// https://lifelongeducation3.wixsite.com/mysite
