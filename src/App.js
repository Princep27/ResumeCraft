import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import TemplateList from "./pages/TemplateList";
import Template from "./pages/Template";
import ResumeState from "./context/resumeState";


function App() {

  return (
    <ResumeState>
        <BrowserRouter>
        <Routes  scrollToTop={false}>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/templates" element={<TemplateList/>}></Route> */}
          <Route path="template" element={<Template/>}></Route>
        </Routes>
      </BrowserRouter>
    </ResumeState>
  );
} 

export default App;
