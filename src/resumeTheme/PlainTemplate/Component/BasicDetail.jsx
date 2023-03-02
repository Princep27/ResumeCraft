import styled from "styled-components";
import { AiOutlineLinkedin,AiFillGithub } from 'react-icons/ai';
import {MdLocationOn,MdEmail} from "react-icons/md";
import {IoCall} from "react-icons/io5";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";


const Wrapper = styled.div`
width:auto;
height: 10%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 7px;
`

const Name = styled.p`
font-size: 20px;
font-weight: 600;
padding-top: 10px;
`

const PersonalDetail = styled.div`
  display: flex;    
  align-items: center;
  font-size:15px;
`

const Email = styled.div`
padding-right: 4%;
cursor: pointer;
`

const Contact = styled.div`
padding-right: 4%;
font-size: 15px;
cursor: pointer;
`

const Address = styled.div`
font-size: 15px;
`

const Line = styled.hr`
    width: 100%;
`

const Icon = styled.div`
font-size: 19px;
color: ${(props) => props.color}
`

const Summary = styled.p`
font-size: 13px;
text-align: center;
letter-spacing: 1px;
padding: 4px;
`


function BasicDetail(){

    const Data = useContext(resumeContext);

    return (
        <>
            <Wrapper>
                <Name>{Data.state.basicDetail.name}</Name>
                <PersonalDetail style={{"color": Data.state.themecolor}}>
                    <Icon><MdEmail/></Icon>
                    <Email>{Data.state.basicDetail.email}</Email>
                    <Icon><IoCall/></Icon>
                    <Contact>{Data.state.basicDetail.contact}</Contact>
                    <a href={Data.state.basicDetail.linkedin} target="_blank" rel="noreferrer"><Icon color={Data.state.themecolor}><AiOutlineLinkedin/></Icon></a>
                    <a href={Data.state.basicDetail.github} target="_blank" rel="noreferrer"><Icon color={Data.state.themecolor}><AiFillGithub/></Icon></a>
                </PersonalDetail>
                <Address><MdLocationOn/>{Data.state.basicDetail.address}</Address> 
            </Wrapper>
            
            <Line/>
            <Summary>{Data.state.basicDetail.summary}</Summary>
            <Line/>
        </>
    )
}

export default BasicDetail;     