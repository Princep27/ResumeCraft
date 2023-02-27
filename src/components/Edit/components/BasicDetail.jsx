import styled from "styled-components";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";

const Section = styled.div`
    padding: 10px;
`

function BasicDetail(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

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
        <Section>
            <h3>Basic Detail</h3>       
                    <input type="text" name="name a" value={resumeData.state.basicDetail.name}  autoFocus={focus.a} onChange={handleBD}/>
                    <input type="text" name="email b" value={resumeData.state.basicDetail.email} autoFocus={focus.b} onChange={handleBD}/>
                    <input type="text" name="linkedin b1" value={resumeData.state.basicDetail.linkedin}  autoFocus={focus.b1} onChange={handleBD}/>
                    <input type="text" name="github b2" value={resumeData.state.basicDetail.github}  autoFocus={focus.b2} onChange={handleBD}/>
                    <input type="text" name="contact c" value={resumeData.state.basicDetail.contact} autoFocus={focus.c} onChange={handleBD}/>
                    <input type="text" name="address d" value={resumeData.state.basicDetail.address} autoFocus={focus.d} onChange={handleBD}/>
                    <input type="text" name="summary d1" value={resumeData.state.basicDetail.summary} autoFocus={focus.d1} onChange={handleBD}/>
        </Section>
    )
}

export default BasicDetail;