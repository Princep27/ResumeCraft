import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";

const Section = styled.div`
padding-top: 6px;
`

const Add = styled.button`
cursor: pointer;
color: #ffffff;
font-size: 12px;
padding:3px;
border:none;
background-color: #e39191;
border-radius: 4px;
margin-top: 10px;
margin-right: 10px;
&:hover{
    background-color: #f43c3c;
}
`

const Delete = styled.button`
cursor: pointer;
color: #ffffff;
font-size: 12px;
padding:3px;
border:none;
background-color: #e39191;
border-radius: 4px;
margin-top: 10px;
    &:hover{
        background-color: #f43c3c;
    }
`

const Wrapper = styled.div`
padding-top: 6px;
`

const Heading = styled.h2`
cursor:pointer;
letter-spacing: 2px;

`

const Input = styled.input`
padding : 7px;
margin : 1px;
width: 250px;
font-size: 14px;
border-radius: 5px;
border: none;
`

function Education(){

    const resumeData = useContext(resumeContext);
    const [isExpand,setIsExpand] = useState(true);

    //console.log(resumeData.state.education);

    function handleED(e,index){
        let temp = {...resumeData.state};
        let name = e.target.name;
        let value = e.target.value;

        //console.log(resumeData.state.education[index]);
    
        temp.education[index][name] = value;
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

    function handleClick(){
        setIsExpand(!isExpand);
    }


    return (
        <Section style={{"height" : isExpand ? "22px" : "auto", "overflow" : "hidden"}} >  
            <Heading onClick={handleClick} >Education</Heading>

            {
                resumeData.state.education.map((item,index)=>{
                    return (
                        <Wrapper key={index} style={{"height" : isExpand ? "0px" : "100%", "overflow" : "hidden"}} >
                        <Input type="text" placeholder="Course Name" name="courseName" value={item.courseName}  onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="Institute Name" name="instituteName" value={item.instituteName}  onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="Start Date" name="startDate" value={item.startDate}  onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="End Date" name="endDate" value={item.endDate} onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="Grade" name="grade" value={item.grade} onChange={e=>{handleED(e,index)}}/>
                        </Wrapper>
                    )                           
                })
            } 

            <Add onClick={handleAdd}>New</Add>
            <Delete onClick={handleDelete}>Delete</Delete>
        </Section>
    )
}

export default Education;