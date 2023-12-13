import styled from "styled-components";
import {BsFillTrophyFill} from "react-icons/bs";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";


const Wrapper = styled.div`
width: autp;
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

const Achieve = styled.li`
padding-left: 15px;
`


function Achievement(){
    const resumeData = useContext(resumeContext);

    return (
        <Wrapper>
            {resumeData.state.achievements.length ? <Heading style={{"color": resumeData.state.themecolor}}> <BsFillTrophyFill/> Achievements</Heading> : ""}
            {resumeData.state.achievements.length ? <hr></hr> : ""}

            {
                resumeData.state.achievements.map((item,index)=>{
                    return <Achieve key={index}>{item}</Achieve>
                })
            }   
        </Wrapper>
    )
}

export default Achievement;