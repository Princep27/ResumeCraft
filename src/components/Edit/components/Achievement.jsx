import styled from "styled-components";
import { useContext,useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Section = styled.div`

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
    background-color: #e39191;
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

function Achievement(){

    const resumeData = useContext(resumeContext);
    const [isExpand,setIsExpand] = useState(true);


    function handleACH(t,index){
        const temp = {...resumeData.state};
        let value = t.target.value;

        temp.achievements[index] = value;
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
        <Section style={{"height" : isExpand ? "23px" : "auto", "overflow" : "hidden"}}>

            <Heading  onClick={()=>setIsExpand(!isExpand)} >Achievements</Heading>

            {                
                <Wrapper>
                {
                    resumeData.state.achievements.map((item,indx)=>{
                        return (<Input type="text" key={indx} name={`achievement x${indx}`} value={item} onChange={e=>{handleACH(e,indx)}}/>);
                    })
                } 
                <div>
                    <Button><BsPlusSquare onClick={handleAchievementListAdd} /></Button>
                    <Button><AiFillDelete onClick={handleAchievementListDelete} /></Button>
                </div>
                

                <Delete  onClick={deleteAll}>Delete All</Delete>
                </Wrapper>                                    
            } 

        </Section>
    )
}   

export default Achievement;  