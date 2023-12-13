import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Template from "./pages/Template";
import ResumeState from "./context/resumeState";
import resumeContext from "./context/resumeContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";


function App() {
  const [fetchData,setFetchData] = useState(JSON.parse(localStorage.getItem("data")));

  // setInterval(
  //     ()=>{
  //       console.log(resumeData);
  //       localStorage.setItem("data",res);
  //     },
  // 2000);

//   setInterval(
//     ()=>{
//       console.log(localStorage.getItem("data"));
//     },
//  4000);  

  
  return (
    <ResumeState>
        <BrowserRouter>
        <Routes  scrollToTop={false}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="template" element={<Template props={{fetchData,setFetchData}} />}></Route>
        </Routes>
      </BrowserRouter>
    </ResumeState>
  );
} 

export default App;
