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

const Button = styled.span`
cursor: pointer;
`


function TechnicalSkill(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

    function handleTS(t,index){
        const temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];

       
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        if(name === "skills"){
            temp.technicalSkill.skills[index] = value;

        }else{
            temp.technicalSkill[name] = value;
        }

        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    

    function handleAboutListAdd(){
        const temp = {...resumeData.state};
        temp.technicalSkill.skills.push(" ");
        resumeData.setState(temp);
    }

    function handleAboutListDelete(){
        const temp = {...resumeData.state};
        temp.technicalSkill.skills.pop();
        resumeData.setState(temp);
    }    

    function deleteAll(){
        const temp = {...resumeData.state};
        temp.technicalSkill.skills = [];
        resumeData.setState(temp);
    }

    return (
        <section>

            <h3>Teachnical Skill</h3>

            {                
                <Wrapper>
                {/* <input type="text" name={`title v`} value={resumeData.state.technicalSkill.title} autoFocus={focus.v} onChange={e=>{handleTS(e,0)}}/> */}
                {
                    resumeData.state.technicalSkill.skills.map((item,indx)=>{
                        return (<input type="text" name={`skills w${indx}`} value={item} autoFocus={focus[`w${indx}`]} onChange={e=>{handleTS(e,indx)}}/>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleAboutListAdd} /></Button>
                <Button><AiFillDelete onClick={handleAboutListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            } 
        </section>
    )
}

export default TechnicalSkill;  