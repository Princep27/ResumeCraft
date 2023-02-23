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

    function WorkExperience(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

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
                "work" : [
                ]
        };

        const temp ={...resumeData.state};
        temp.experience.push(t);
        resumeData.setState(temp);
    }

    function handleDelete(){
        const temp = {...resumeData.state};
        temp.experience.pop();
        resumeData.setState(temp);
    }   

    return (
        <section>
        <h3>Work Experience</h3>

        {
            resumeData.state.experience.map((item,index)=>{
                return (
                    <Wrapper>
                    <input type="text" name={`position l${index}`} value={item.position} autoFocus={focus[`l${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    <input type="text" name={`companyName m${index}`} value={item.companyName} autoFocus={focus[`m${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    <input type="text" name={`startDate n${index}`} value={item.startDate} autoFocus={focus[`n${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    <input type="text" name={`endDate o${index}`} value={item.endDate} autoFocus={focus[`o${index}`]} onChange={e=>{handleWE(e,index,0)}}/>
                    {
                        item.work.map((item2,indx)=>{
                            return (<input type="text" name={`work o${index}_${indx}`} value={item2} autoFocus={focus[`o${index}_${indx}`]} onChange={e=>{handleWE(e,index,indx)}}/>);
                        })
                    } 
                    </Wrapper>
                )                           
            })
        } 

        <Add><BsPlusSquare onClick={handleAdd}/></Add>
        <Delete><AiFillDelete onClick={handleDelete}/></Delete>
        </section>
    )
}

export default WorkExperience;