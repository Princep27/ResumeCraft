import styled from "styled-components";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Section = styled.div`
    padding-bottom: 7px;
`

const Add = styled.div`
cursor: pointer;
`

const Delete = styled.div`
cursor: pointer;
`

const Wrapper = styled.div`
    padding:10px;
`

function Education(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

    //console.log(resumeData.state.education);

    function handleED(e,index){
        let temp = {...resumeData.state};
        let name = e.target.name.split(" ")[0];
        let focusId = e.target.name.split(" ")[1];
        let value = e.target.value;

        //console.log(resumeData.state.education[index]);
    
        temp.education[index][name] = value;
        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
        // temp.focus.basicDetail[name] = true;
        // resumeData.setState(temp);
    }      

    function handleAdd(){
        let t = {
            "courseName" : "",
            "instituteName" : "",
            "startDate" : "",
            "endDate" : "",
            "grade" : ""
        };

        const temp ={...resumeData.state};
        temp.education.push(t);
        resumeData.setState(temp);
    }

    function handleDelete(){
        const temp = {...resumeData.state};
        temp.education.pop();
        resumeData.setState(temp);
    }


    return (
        <Section>  
            <h3>Education</h3>

            {
                resumeData.state.education.map((item,index)=>{
                    return (
                        <Wrapper>
                        <input type="text" name={`courseName e${index}`} value={item.courseName} autoFocus={focus[`e${index}`]}  onChange={e=>{handleED(e,index)}}/>
                        <input type="text" name={`instituteName f${index}`} value={item.instituteName} autoFocus={focus[`f${index}`]}  onChange={e=>{handleED(e,index)}}/>
                        <input type="text" name={`startDate g${index}`} value={item.startDate} autoFocus={focus[`g${index}`]}  onChange={e=>{handleED(e,index)}}/>
                        <input type="text" name={`endDate h${index}`} value={item.endDate} autoFocus={focus[`h${index}`]} onChange={e=>{handleED(e,index)}}/>
                        <input type="text" name={`grade i${index}`} value={item.grade} autoFocus={focus[`i${index}`]} onChange={e=>{handleED(e,index)}}/>
                        </Wrapper>
                    )                           
                })
            } 

            <Add><BsPlusSquare onClick={handleAdd}/></Add>
            <Delete><AiFillDelete onClick={handleDelete}/></Delete>
        </Section>
    )
}

export default Education;