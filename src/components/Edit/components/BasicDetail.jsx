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
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(true);

    function handleBD(t){
        let temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        temp.basicDetail[name] = value;
        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }      

    return (
        <Wrapper style={{"height" : isExpand ? "22px" : "auto", "overflow" : "hidden"}}>
            <Heading onClick={()=>setIsExpand(!isExpand)}>Basic Detail</Heading> 
            <Section>      
                        <Input type="text" name="name a" value={resumeData.state.basicDetail.name}  autoFocus={focus.a} onChange={handleBD}/>
                        <Input type="text" name="email b" value={resumeData.state.basicDetail.email} autoFocus={focus.b} onChange={handleBD}/>
                        <Input type="text" name="linkedin b1" value={resumeData.state.basicDetail.linkedin}  autoFocus={focus.b1} onChange={handleBD}/>
                        <Input type="text" name="github b2" value={resumeData.state.basicDetail.github}  autoFocus={focus.b2} onChange={handleBD}/>
                        <Input type="text" name="contact c" value={resumeData.state.basicDetail.contact} autoFocus={focus.c} onChange={handleBD}/>
                        <Input type="text" name="address d" value={resumeData.state.basicDetail.address} autoFocus={focus.d} onChange={handleBD}/>
                        <Input type="text" name="summary d1" value={resumeData.state.basicDetail.summary} autoFocus={focus.d1} onChange={handleBD}/>
            </Section>
        </Wrapper>
    )
}

export default BasicDetail;