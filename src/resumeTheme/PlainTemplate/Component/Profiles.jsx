import styled from "styled-components";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";
import {AiOutlineLink} from "react-icons/ai";
import {RiProfileFill} from "react-icons/ri";

const Wrapper = styled.div`
width:auto;
height: 10%;
background-color: transparent;
display: flex;
justify-content: center;
flex-direction: column;
padding: 4px 70px 4px 70px;
`

const Heading = styled.h3`
padding-bottom: 8px;
padding-top: 8px;
`

const P = styled.span`
width:auto;
padding-right: 20px;
padding-left: 15px;
`

const FlexBox = styled.div`
    justify-content: center;
`
//temp

function Profiles(){
    const resumeData = useContext(resumeContext);

    return (
        <Wrapper>
            {resumeData.state.profiles.length ? <Heading style={{"color": resumeData.state.themecolor}} > <RiProfileFill/> Profiles</Heading> : ""}
            {resumeData.state.profiles.length ? <hr></hr> :  ""}
            <FlexBox>
            {
                resumeData.state.profiles.map((item,index)=>{
                    return <span key={index}>
                       <P>{item.name} {item.link ? <a href={item.link} target="_blank" rel="noreferrer" style={{"text-decoration" : "none"}}> <AiOutlineLink style={{"cursor":"pointer","color": resumeData.state.themecolor}}/> </a>: ""}</P> 
                    </span>
                })
            }   
            </FlexBox>
        </Wrapper>
    )
}

export default Profiles;