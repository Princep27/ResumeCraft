import styled from "styled-components";
import { useContext,useState } from "react";
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


function TechnicalSkill(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(false);


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
        <Section style={{"height" : isExpand ? "15px" : "auto", "overflow" : "hidden"}}>

            <Heading  onClick={()=>setIsExpand(!isExpand)}>Teachnical Skill</Heading>

            {                
                <Wrapper>
                {/* <input type="text" name={`title v`} value={resumeData.state.technicalSkill.title} autoFocus={focus.v} onChange={e=>{handleTS(e,0)}}/> */}
                {
                    resumeData.state.technicalSkill.skills.map((item,indx)=>{
                        return (<Input type="text" name={`skills w${indx}`} value={item} autoFocus={focus[`w${indx}`]} onChange={e=>{handleTS(e,indx)}}/>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleAboutListAdd} /></Button>
                <Button><AiFillDelete onClick={handleAboutListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            } 
        </Section>
    )
}

export default TechnicalSkill;  