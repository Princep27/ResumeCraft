import styled from "styled-components";
import { useContext,useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Section = styled.div`
padding-bottom: 10px;
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

const Button = styled.span`
cursor: pointer;
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


function TechnicalSkill(){

    const resumeData = useContext(resumeContext);
    const [isExpand,setIsExpand] = useState(true);


    function handleTS(t,index){
        const temp = {...resumeData.state};
        let name = t.target.name;
        let value = t.target.value;

        if(name === "skills"){
            temp.technicalSkill.skills[index] = value;

        }else{
            temp.technicalSkill[name] = value;
        }
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
        <Section  style={{"height" : isExpand ? "15px" : "auto", "overflow" : "hidden"}}>

            <Heading  onClick={()=>setIsExpand(!isExpand)}>Technical Skill</Heading>

            {                
                <Wrapper>
                {
                    resumeData.state.technicalSkill.skills.map((item,indx)=>{
                        return (<Input key={indx} type="text" placeholder="Skill" name="skills" value={item} onChange={e=>{handleTS(e,indx)}}/>);
                    })
                } 

                <div>
                    <Button><BsPlusSquare onClick={handleAboutListAdd} /></Button>
                    <Button><AiFillDelete onClick={handleAboutListDelete} /></Button>
                </div>


                <Delete  onClick={deleteAll}>Delete All</Delete>
                </Wrapper>                                    
            } 
        </Section>
    )
}

export default TechnicalSkill;  