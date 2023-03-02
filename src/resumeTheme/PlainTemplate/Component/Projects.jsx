import styled from "styled-components";
import {AiFillAppstore} from "react-icons/ai";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";
import {AiOutlineLink} from "react-icons/ai";

const Wrapper = styled.div`
width: auto;
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

const Section = styled.div`
padding:5px 0px 5px 0px;
`

const Title = styled.p`
width:100%;
height:auto;
font-weight: 600;   
`

const About = styled.li`
width:100%;
height:auto;
padding-left: 15px;
`

function Projects(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>

            {resumeData.state.projects.length ? <Heading style={{"color": resumeData.state.themecolor}} > <AiFillAppstore/> Projects</Heading> : ""}
            {resumeData.state.projects.length ? <hr></hr> :  ""}
            {
                resumeData.state.projects.map((item,index)=>{
                    return (
                        <Section key={index}>
                           <Title>{item.title} {item.link ? <a href={item.link} target="_blank" rel="noreferrer" style={{"text-decoration" : "none"}}> <AiOutlineLink style={{"cursor":"pointer","color": resumeData.state.themecolor}}/> </a>: ""} </Title>
                           {
                                item.about.map((itm,idx)=>{
                                return <About key={idx}>{itm}</About>
                              })
                           }
                        </Section>
                    );
                })
            }
        </Wrapper>
    )
}

export default Projects;