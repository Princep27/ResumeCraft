import styled from "styled-components";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";

const themeColor = "#0053c6";


const Wrapper = styled.div`
width:100%;
height: 10%;
background-color: transparent;
display: flex;
justify-content: center;
flex-direction: column;
`

const Heading = styled.h3`
`

const Section = styled.div`
width:100%;
height:400px;
background-color: azure;
`

const Title = styled.p`
width:100%;
height:auto;
`

const About = styled.p`
width:100%;
height:auto;
`


function Projects(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>

            {resumeData.state.projects.length ? <Heading>Projects</Heading> : ""}

            {
                resumeData.state.projects.map((item,index)=>{
                    return (
                        <>
                           <Title>{item.title}</Title>
                           {
                                item.about.map((itm,idx)=>{
                                return <About>{itm}</About>
                              })
                           }
                        </>
                    );
                })
            }
        </Wrapper>
    )
}

export default Projects;