import styled from "styled-components";
import {IoMdSchool} from "react-icons/io";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";


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
margin: 5px 0px 5px 0px;
`

const CourseName = styled.p`
width:100%;
height:auto;
font-weight: 600;
`

const InstituteName = styled.p`
width:100%;
height:auto;
padding-left: 15px;
`

const StartDate = styled.span`
height:auto;
padding-right:6px;
color:gray;
font-size: 12px;
padding-left: 15px;
`

const EndDate = styled.span`
height:auto;
color:gray;
padding-left:6px;
font-size: 12px;
`

const Dash = styled.span``

const Grade = styled.p`
width:100%;
height:auto;
font-size: 13px;
color:grey;
padding-left: 15px;
`


function Education(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);
    return (
        <Wrapper>

            {resumeData.state.education.length ? <Heading  style={{"color": resumeData.state.themecolor}} ><IoMdSchool/> Education</Heading> : "" }
            {resumeData.state.education.length ? <hr></hr> :  ""}

            {
                resumeData.state.education.map((item,index)=>{
                    return (
                        <Section key={index}>
                           <CourseName>{item.courseName}</CourseName>
                           <InstituteName>{item.instituteName}</InstituteName>
                           <StartDate>{item.startDate}</StartDate>
                           <Dash>-</Dash>
                           <EndDate>{item.endDate}</EndDate>
                           <Grade>{item.grade}</Grade>
                        </Section>
                    );
                })
            }
        </Wrapper>
    )
}

export default Education;