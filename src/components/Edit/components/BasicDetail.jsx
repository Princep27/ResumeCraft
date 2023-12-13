import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";

const Section = styled.div`
padding-top: 6px;
`

const Input = styled.input`
padding : 7px;
margin : 1px;
width: 250px;
font-size: 14px;
border-radius: 5px;
border: none;
`

const Heading = styled.h2`
cursor: pointer;
letter-spacing: 2px;
`

const Wrapper = styled.div`
`

function BasicDetail(){

    const resumeData = useContext(resumeContext);
    const [isExpand,setIsExpand] = useState(true);

    function handleBD(t){
        let temp = {...resumeData.state};
        let name = t.target.name;
        let value = t.target.value;

        temp.basicDetail[name] = value;
        resumeData.setState(temp);
    }      

    return (
        <Wrapper style={{"height" : isExpand ? "22px" : "auto", "overflow" : "hidden"}}>
            <Heading onClick={()=>setIsExpand(!isExpand)}>Basic Detail</Heading> 
            <Section>      
                        <Input type="text" name="name" value={resumeData.state.basicDetail.name}  onChange={handleBD}/>
                        <Input type="text" name="email" value={resumeData.state.basicDetail.email} onChange={handleBD}/>
                        <Input type="text" name="linkedin" value={resumeData.state.basicDetail.linkedin}   onChange={handleBD}/>
                        <Input type="text" name="github" value={resumeData.state.basicDetail.github}   onChange={handleBD}/>
                        <Input type="text" name="contact" value={resumeData.state.basicDetail.contact} onChange={handleBD}/>
                        <Input type="text" name="address" value={resumeData.state.basicDetail.address} onChange={handleBD}/>
                        <Input type="text" name="summary" value={resumeData.state.basicDetail.summary}  onChange={handleBD}/>
            </Section>
        </Wrapper>
    )
}

export default BasicDetail;