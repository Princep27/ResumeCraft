import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const Delete = styled.button`
display: block;
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

const Section = styled.div`
padding-top: 6px;
`   

const Input = styled.input`
padding : 7px;
margin : 1px;
width: 250px;
font-size: 14px;
border-radius: 5px;
border: none;
`

function Profiles(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(true);


    function handleProfile(t,index){
        const temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];

       
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        temp.profiles[index][name] = value;

        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    

    function handleProfileListAdd(){
        const temp = {...resumeData.state};
        temp.profiles.push({name : "", "link" : ""});

        const focusId = `xa${temp.profiles.length-1}`;
        temp.focus = {};
        temp.focus[focusId] = true;

        resumeData.setState(temp);
    }

    function handleProfileListDelete(){
        const temp = {...resumeData.state};
        temp.profiles.pop();

        const focusId = `xa${temp.profiles.length-1}`;
        temp.focus = {};
        temp.focus[focusId] = true;

        resumeData.setState(temp);
    }    

    function deleteAll(){
        const temp = {...resumeData.state};
        temp.profiles = [];
        
        temp.focus = {};
        temp.focus.x0= true;

        resumeData.setState(temp);  
    }

    return (
        <Section style={{"height" : isExpand ? "23px" : "auto", "overflow" : "hidden"}}>

            <Heading  onClick={()=>setIsExpand(!isExpand)} >Profiles</Heading>

            {                
                <Wrapper>
                {
                    resumeData.state.profiles.map((item,indx)=>{
                        return (
                          <div key={indx}>    
                          <Input type="text" name={`name xa${indx}`} placeholder="Platform" value={item.name} autoFocus={focus[`xa${indx}`]} onChange={e=>{handleProfile(e,indx)}}/>
                          <Input type="text" name={`link xb${indx}`} placeholder="Profile Link" value={item.link} autoFocus={focus[`xb${indx}`]} onChange={e=>{handleProfile(e,indx)}}/>
                          </div>
                        );
                    })
                } 
                <Button><BsPlusSquare onClick={handleProfileListAdd} /></Button>
                <Button><AiFillDelete onClick={handleProfileListDelete} /></Button>

                <Delete  onClick={deleteAll}>Delete All</Delete>
                </Wrapper>                                    
            } 

        </Section>
    )
}

export default Profiles;  