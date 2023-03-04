import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Section = styled.div`
    padding-bottom: 10px;
`

const Add = styled.span`
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

const Button = styled.span`
cursor: pointer;    
`

const Wrapper = styled.div`
padding-top: 6px;
`

const Heading = styled.h2`
cursor: pointer;
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

function Projects(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(true);


    function handleP(t,index,aboutIndex){
        const temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];

       
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        if(name === "about"){
            temp.projects[index].about[aboutIndex] = value;

        }else{
            temp.projects[index][name] = value;
        }

        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    
    
    function handleAdd(){
        let t = {
            "title" : "",
            "about" : [""],   
        }

        const temp ={...resumeData.state};
        temp.projects.push(t);

        temp.focus = {};
        temp.focus[`r${temp.projects.length-1}`] = true;                    

        resumeData.setState(temp);
    }

    function handleDelete(){
        const temp = {...resumeData.state};
        temp.projects.pop();

        temp.focus = {};

        if( temp.projects.length)
        temp.focus[`r${temp.projects.length-1}`] = true; 
        else
        temp.focus.l0 = true;

        resumeData.setState(temp);
    }   

    function handleAboutListAdd(index){
        const temp = {...resumeData.state};
        temp.projects[index].about.push(" ");

        temp.focus = {};
        temp.focus[`t${temp.projects.length-1}_${temp.projects[temp.projects.length-1].about.length-1}`] = true;

        resumeData.setState(temp);
    }

    function handleAboutListDelete(index){
        const temp = {...resumeData.state};
        temp.projects[index].about.pop();

        temp.focus = {};
        temp.focus[`t${temp.projects.length-1}_${temp.projects[temp.projects.length-1].about.length-1}`] = true;

        resumeData.setState(temp);
    }

    return (
        <Section style={{"height" : isExpand ? "15px" : "auto", "overflow" : "hidden"}}>
            <Heading  onClick={()=>setIsExpand(!isExpand)} >Projects</Heading>

            {
                resumeData.state.projects.map((item,index)=>{
                    return (
                        <Wrapper key={index} >
                            <Input type="text" placeholder="Title" name={`title r${index}`} value={item.title} autoFocus={focus[`r${index}`]} onChange={e=>{handleP(e,index,0)}}/>
                            <Input type="text" placeholder="Link" name={`link s${index}`} value={item.link} autoFocus={focus[`s${index}`]} onChange={e=>{handleP(e,index,0)}}/>
                            {
                                item.about.map((item2,indx)=>{
                                    return (<Input key={indx} type="text" placeholder="About" name={`about t${index}_${indx}`} value={item2} autoFocus={focus[`t${index}_${indx}`]} onChange={e=>{handleP(e,index,indx)}}/>);
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

            <div>
                <Add onClick={handleAdd}>New</Add>
                <Delete onClick={handleDelete}>Delete</Delete>
            </div>
            
        </Section>
    )
}

export default Projects;