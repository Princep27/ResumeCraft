import styled from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import {FaCertificate} from "react-icons/fa";
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

const Item = styled.span`
    padding-right: 20px;
    padding-left: 15px;
`

const FlexBox = styled.div``


function Certificates(){
    const resumeData = useContext(resumeContext);

    return (
        <Wrapper>
            {resumeData.state.certificates.length ? <Heading style={{"color": resumeData.state.themecolor}} > <FaCertificate/> Certificates</Heading> : ""}
            {resumeData.state.certificates.length ? <hr></hr> :  ""}
            
            <FlexBox>
            {
                resumeData.state.certificates.map((item,index)=>{
                    return <Item key={index}>{item.name} {item.link ? <a href={item.link} target="_blank" rel="noreferrer" style={{"text-decoration" : "none", "color": resumeData.state.themecolor}}> <AiOutlineLink style={{"cursor":"pointer"}}/> </a>: ""} </Item>
                })
            }   
            </FlexBox>

        </Wrapper>
    )
}

export default Certificates;