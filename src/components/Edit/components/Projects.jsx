import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Section = styled.div`
    padding-bottom: 10px;
`

const Add = styled.div`
cursor: pointer;
`

const Delete = styled.div`
cursor: pointer;
`

const Button = styled.span`
cursor: pointer;    
`

const Wrapper = styled.div`
padding-top: 6px;
`

const Heading = styled.h3`
cursor: pointer;
letter-spacing: 2px;
`

const Input = styled.input`
padding : 2px;
margin : 1px;
width: 250px;
font-size: 14px;
`    


function Projects(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(false);


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
        resumeData.setState(temp);
    }

    function handleDelete(){
        const temp = {...resumeData.state};
        temp.projects.pop();
        resumeData.setState(temp);
    }   

    function handleAboutListAdd(index){
        const temp = {...resumeData.state};
        temp.projects[index].about.push(" ");
        resumeData.setState(temp);
    }

    function handleAboutListDelete(index){
        const temp = {...resumeData.state};
        temp.projects[index].about.pop();
        resumeData.setState(temp);
    }

    return (
        <Section style={{"height" : isExpand ? "15px" : "auto", "overflow" : "hidden"}}>
            <Heading  onClick={()=>setIsExpand(!isExpand)} >Projects</Heading>

            {
                resumeData.state.projects.map((item,index)=>{
                    return (
                        <Wrapper>
                            <Input type="text" name={`title r${index}`} value={item.title} autoFocus={focus[`r${index}`]} onChange={e=>{handleP(e,index,0)}}/>
                            <Input type="text" name={`link s${index}`} value={item.link} autoFocus={focus[`s${index}`]} onChange={e=>{handleP(e,index,0)}}/>
                            {
                                item.about.map((item2,indx)=>{
                                    return (<Input type="text" name={`about t${index}_${indx}`} value={item2} autoFocus={focus[`t${index}_${indx}`]} onChange={e=>{handleP(e,index,indx)}}/>);
                                })
                            }

                            <Button><BsPlusSquare onClick={()=>handleAboutListAdd(index)} /></Button>
                            <Button><AiFillDelete onClick={()=>handleAboutListDelete(index)} /></Button>
                        </Wrapper>
                    )                           
                })
            } 

            <Add><BsPlusSquare onClick={handleAdd}/></Add>
            <Delete><AiFillDelete onClick={handleDelete}/></Delete>
        </Section>
    )
}

export default Projects;