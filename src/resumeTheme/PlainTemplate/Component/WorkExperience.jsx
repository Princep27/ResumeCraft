import styled from "styled-components";
import {MdOutlineWork} from "react-icons/md";
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
padding-bottom:8px;
padding-top: 8px;
`

const Section = styled.div`
padding: 5px 0px 5px 0px;
`

const Position = styled.span`
width:auto;
height:auto;
font-weight: 600;
`

const Dash = styled.span`
font-weight:1000;
font-size:18px;
`

const CompanyName = styled.span`
width:auto;
height:auto;
font-weight: 600;   
`

const StartDate = styled.span`
height:auto;
font-size: 13px;
color:gray
`

const EndDate = styled.span`
height:auto;
font-size: 13px;
color:gray;
`

const Work = styled.li`
width:auto;
height:auto;
padding-left: 15px;
`


function WorkExperience(){
    const resumeData = useContext(resumeContext);
    //console.log(resumeData.state.education);

    return (
        <Wrapper>

            {resumeData.state.experience.length ? <Heading style={{"color": resumeData.state.themecolor}} > <MdOutlineWork/> Work Experience</Heading> : "" }
            {resumeData.state.experience.length ? <hr></hr> :  ""}
            

            {
                resumeData.state.experience.map((item,index)=>{
                    return (
                        <Section key={index}>
                           <Position>{item.position}</Position>
                           <Dash>  |  </Dash>
                           <CompanyName>{item.companyName}</CompanyName>

                           <div></div>

                           <StartDate>{item.startDate}</StartDate>
                           <Dash>  -  </Dash>
                           <EndDate>{item.endDate}</EndDate>

                           {
                              resumeData.state.experience[index].work.map((itm,idx)=>{
                                return <Work key={idx}>{itm}</Work>
                              })
                           }
                        </Section>
                    );
                })
            }
        </Wrapper>
    )
}

export default WorkExperience;