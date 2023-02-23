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

const CourseName = styled.p`
width:100%;
height:auto;
`

const InstituteName = styled.p`
width:100%;
height:auto;
`

const StartDate = styled.p`
width:100%;
height:auto;
`

const EndDate = styled.p`
width:100%;
height:auto;
`

const Grade = styled.p`
width:100%;
height:auto;
`


function Education(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>

            {resumeData.state.education.length ? <Heading>Education</Heading> : "" }

            {
                resumeData.state.education.map((item,index)=>{
                    return (
                        <>
                           <CourseName>{item.courseName}</CourseName>
                           <InstituteName>{item.instituteName}</InstituteName>
                           <StartDate>{item.startDate}</StartDate>
                           <EndDate>{item.endDate}</EndDate>
                           <Grade>{item.grade}</Grade>
                        </>
                    );
                })
            }
        </Wrapper>
    )
}

export default Education;