import styled from "styled-components";
import {HiWrenchScrewdriver} from "react-icons/hi2";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";
const themeColor = "#0053c6";


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

const Section = styled.div`
width:100%;
height:400px;
background-color: azure;
`

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const Title = styled.p`
width:100%;
height:auto;
`
const Skill = styled.li`
padding: 3px 10px 3px 0px;
height:auto;
padding-left: 15px;
list-style-type: "- ";
`

function TechnicalSkill(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>
            {resumeData.state.technicalSkill.skills.length ? <Heading style={{"color": resumeData.state.themecolor}}  > <HiWrenchScrewdriver/> Skills</Heading> : ""}
            {resumeData.state.technicalSkill.skills.length ? <hr></hr> :  ""}
            {/* <Title>{resumeData.state.technicalSkill.title}</Title> */}
            
            <FlexBox>
            {
                resumeData.state.technicalSkill.skills.map((item,index)=>{
                    return <Skill key={index}>{item}</Skill>
                })
            }   
            </FlexBox>
        </Wrapper>
    )
}

export default TechnicalSkill;