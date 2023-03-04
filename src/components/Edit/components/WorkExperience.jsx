import styled from "styled-components";
import { useContext,useEffect,useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const Section = styled.div`
    padding-bottom: 10px;
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
cursor: pointer;
letter-spacing: 2px;
padding-top: 6px;
`

const Button = styled.span``

const Input = styled.input`
padding : 7px;
margin : 1px;
width: 250px;
font-size: 14px;
border-radius: 5px;
border: none;
`

function WorkExperience(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(true);


    function handleWE(t,index,workIndex){
        const temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];

       
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        if(name === "work"){
            temp.experience[index].work[workIndex] = value;

        }else{
            temp.experience[index][name] = value;
        }

        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    
    
    function handleAdd(){
        let t = {
                "position" : "",
                "companyName" : "",
                "startDate" : "",
                "endDate" : "",
                "work" : [ ""
                ]
        };

        const temp ={...resumeData.state};
        temp.experience.push(t);

        temp.foucs = {};
        temp.focus[`l${temp.experience.length-1}`] = true;

        resumeData.setState(temp);
    }

    function handleDelete(){
        const temp = {...resumeData.state};
        temp.experience.pop();

        temp.focus = {};
        if(temp.experience.length)
        temp.focus[`l${temp.experience.length-1}`]= true;
        else
        temp.focus.e0 = true;

        resumeData.setState(temp);
    }  
    
    function handleAboutListAdd(index){
        const temp = {...resumeData.state};
        temp.experience[index].work.push("");

        temp.focus = {};
        temp.focus[`o${index}_${temp.experience[index].work.length-1}`] = true;

        resumeData.setState(temp);
    }

    function handleAboutListDelete(index){
        const temp = {...resumeData.state};
        temp.experience[index].work.pop();

        resumeData.setState(temp);
    }

    return (
        <Section style={{"height" : isExpand ? "20px" : "auto", "overflow" : "hidden"}}>
        <Heading  onClick={()=>setIsExpand(!isExpand) }>Work Experience</Heading>

        {
            resumeData.state.experience.map((item,index)=>{
                return (
                    <Wrapper key={index}>
                    <Input type="text" placeholder="Position" name={`position l${index}`} value={item.position} autoFocus={focus[`l${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    <Input type="text" placeholder="Company Name" name={`companyName m${index}`} value={item.companyName} autoFocus={focus[`m${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    <Input type="text" placeholder="Start Date" name={`startDate n${index}`} value={item.startDate} autoFocus={focus[`n${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    <Input type="text" placeholder="End Date" name={`endDate o${index}`} value={item.endDate} autoFocus={focus[`o${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    {
                        item.work.map((item2,indx)=>{
                            return (<Input key={indx} type="text" placeholder="Work" name={`work o${index}_${indx}`} value={item2} autoFocus={focus[`o${index}_${indx}`]} onChange={e=>{handleWE(e,index,indx)}}/>);
                        })
                    } 
                    <div>
                    <Button><BsPlusSquare onClick={()=>handleAboutListAdd(index)} /></Button>
                    <Button><AiFillDelete onClick={()=>handleAboutListDelete(index)} /></Button>
                    </div>
                    </Wrapper>
                )                           
            })
        } 
         
        <div><Add onClick={handleAdd}>Add</Add>
        <Delete onClick={handleDelete}>Delete</Delete></div>
        
        </Section>
    )
}

export default WorkExperience;