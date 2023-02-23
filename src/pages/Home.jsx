import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "../images/bg.png";
import { useContext } from "react";
import ResumeContext from "../context/resumeContext";

function Home() {

    const Wrapper = styled.div`
      position: realtive;
    `

    const Body = styled.div`
    background-color: #b9b9b9;
    background-image: url(${Image});
    background-repeat: none;
    background-size: cover;
    width: 100%;
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    `   

    const P = styled.p`
    font-size: 30px;
    letter-spacing: 3px;
    `

    const Button = styled.button`
    padding:17px;
    cursor: pointer;
    color:white;
    background-color: #929292;
    border-radius: 5px;
    border : none;
    font-size: 20px;
    letter-spacing: 3px;
    margin:30px;
    text-decoration: none;
    
      &:hover{
        background-color: #6d6d6d;
      }
    `

    const resumeData = useContext(ResumeContext);
    console.log(resumeData);

    return (
        <>
            <Header/>
            
            <Wrapper>
                <Body>
                    <P>Built free Resume Online with ResumeCraft</P>
                    <Button><Link to="/templates" style={{ textDecoration: 'none', color:'white' }}>Built Here</Link></Button>
                </Body>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default Home;