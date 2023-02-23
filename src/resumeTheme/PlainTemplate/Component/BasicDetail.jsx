import styled from "styled-components";
import { AiOutlineLinkedin,AiFillGithub } from 'react-icons/ai';
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";

const themeColor = "#0053c6";

const Wrapper = styled.div`
width:100%;
height: 10%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Name = styled.p`
font-size: 20px;
font-weight: 600;
padding-top: 10px;
`

const PersonalDetail = styled.div`
  display: flex;    
  align-items: center;
  font-size:15px;
  color: ${themeColor}
`

const Email = styled.p`
padding-right: 4%;
`

const Contact = styled.p`
padding-right: 4%;
font-size: 15px;
`

const Address = styled.div`
font-size: 15px;
`

const Line = styled.hr`
    width: 100%;
    background-color: ${themeColor}
`

function BasicDetail(){

    const Data = useContext(resumeContext);

    return (
        <Wrapper>
            <Name>{Data.state.basicDetail.name}</Name>
            <PersonalDetail>
                <Email>{Data.state.basicDetail.email}</Email>
                <Contact>{Data.state.basicDetail.contact}</Contact>
                <AiOutlineLinkedin style={{"fontSize":"180%"}}/>
                <AiFillGithub style={{"fontSize":"180%"}}/>
            </PersonalDetail>
            <Address>{Data.state.basicDetail.address}</Address>
            <Line/>
        </Wrapper>
    )
}

export default BasicDetail;     