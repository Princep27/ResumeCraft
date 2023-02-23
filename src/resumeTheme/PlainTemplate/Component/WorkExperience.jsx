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

const Position = styled.p`
width:100%;
height:auto;
`

const CompanyName = styled.p`
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

const Work = styled.p`
width:100%;
height:auto;
`


function WorkExperience(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>

            {resumeData.state.experience.length ? <Heading>Work Experience</Heading> : "" }

            {
                resumeData.state.experience.map((item,index)=>{
                    return (
                        <>
                           <Position>{item.position}</Position>
                           <CompanyName>{item.companyName}</CompanyName>
                           <StartDate>{item.startDate}</StartDate>
                           <EndDate>{item.endDate}</EndDate>
                           {
                              resumeData.state.experience[index].work.map((itm,idx)=>{
                                return <Work>{itm}</Work>
                              })
                           }
                        </>
                    );
                })
            }
        </Wrapper>
    )
}

export default WorkExperience;