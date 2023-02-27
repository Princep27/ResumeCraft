import styled from "styled-components";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const Delete = styled.div`
cursor: pointer;
`

const Wrapper = styled.div`
    padding:10px;
`

const Button = styled.span`
cursor: pointer;
`


function Achievement(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

    function handleACH(t,index){
        const temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];

       
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        temp.achievements[index] = value;

        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    

    function handleAchievementListAdd(){
        const temp = {...resumeData.state};
        temp.achievements.push(" ");
        resumeData.setState(temp);
    }

    function handleAchievementListDelete(){
        const temp = {...resumeData.state};
        temp.achievements.pop();
        resumeData.setState(temp);
    }    

    function deleteAll(){
        const temp = {...resumeData.state};
        temp.achievements = [];
        resumeData.setState(temp);  
    }

    return (
        <section>

            <h3>Achievements</h3>

            {                
                <Wrapper>
                {/* <input type="text" name={`title v`} value={resumeData.state.technicalSkill.title} autoFocus={focus.v} onChange={e=>{handleTS(e,0)}}/> */}
                {
                    resumeData.state.achievements.map((item,indx)=>{
                        return (<input type="text" name={`achievement w${indx}`} value={item} autoFocus={focus[`x${indx}`]} onChange={e=>{handleACH(e,indx)}}/>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleAchievementListAdd} /></Button>
                <Button><AiFillDelete onClick={handleAchievementListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            } 

        </section>
    )
}

export default Achievement;  