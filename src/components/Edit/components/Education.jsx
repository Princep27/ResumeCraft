import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

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
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(true);

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

        temp.focus = {};
        temp.focus[`e${temp.education.length-1}`] = true;

        resumeData.setState(temp);
    }

    function handleDelete(){
        const temp = {...resumeData.state};
        temp.education.pop();

        temp.focus = {};

        if(temp.education.length)
        temp.focus[`e${temp.education.length-1}`] = true;
        else
        temp.focus.a = true;

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
                        <Input type="text" placeholder="Course Name" name={`courseName e${index}`} value={item.courseName} autoFocus={focus[`e${index}`]}  onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="Institute Name" name={`instituteName f${index}`} value={item.instituteName} autoFocus={focus[`f${index}`]}  onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="Start Date" name={`startDate g${index}`} value={item.startDate} autoFocus={focus[`g${index}`]}  onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="End Date" name={`endDate h${index}`} value={item.endDate} autoFocus={focus[`h${index}`]} onChange={e=>{handleED(e,index)}}/>
                        <Input type="text" placeholder="Grade" name={`grade i${index}`} value={item.grade} autoFocus={focus[`i${index}`]} onChange={e=>{handleED(e,index)}}/>
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