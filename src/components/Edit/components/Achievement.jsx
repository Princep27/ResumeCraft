import styled from "styled-components";
import { useContext,useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Section = styled.div``

const Delete = styled.div`
cursor: pointer;
`

const Wrapper = styled.div`
padding-top: 6px;
`

const Button = styled.span`
cursor: pointer;
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

function Achievement(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(false);


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
        <Section style={{"height" : isExpand ? "20px" : "auto", "overflow" : "hidden"}}>

            <Heading  onClick={()=>setIsExpand(!isExpand)} >Achievements</Heading>

            {                
                <Wrapper>
                {/* <input type="text" name={`title v`} value={resumeData.state.technicalSkill.title} autoFocus={focus.v} onChange={e=>{handleTS(e,0)}}/> */}
                {
                    resumeData.state.achievements.map((item,indx)=>{
                        return (<Input type="text" name={`achievement x${indx}`} value={item} autoFocus={focus[`x${indx}`]} onChange={e=>{handleACH(e,indx)}}/>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleAchievementListAdd} /></Button>
                <Button><AiFillDelete onClick={handleAchievementListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            } 

        </Section>
    )
}

export default Achievement;  