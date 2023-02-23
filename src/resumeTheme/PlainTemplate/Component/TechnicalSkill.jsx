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
const Skill = styled.p`
width:100%;
height:auto;
`

function TechnicalSkill(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>
            {resumeData.state.technicalSkill.skills.length ? <Heading>Technical Skill</Heading> : ""}
            
            {/* <Title>{resumeData.state.technicalSkill.title}</Title> */}
            {
                resumeData.state.technicalSkill.skills.map((item)=>{
                    return <Skill>{item}</Skill>
                })
            }
        </Wrapper>
    )
}

export default TechnicalSkill;