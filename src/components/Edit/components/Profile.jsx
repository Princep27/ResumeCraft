import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


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

const Section = styled.div`
padding-top: 6px;
`   

const Input = styled.input`
padding : 2px;
margin : 1px;
width: 250px;
font-size: 14px;
`

function Profiles(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(false);


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
        resumeData.setState(temp);
    }

    function handleProfileListDelete(){
        const temp = {...resumeData.state};
        temp.profiles.pop();
        resumeData.setState(temp);
    }    

    function deleteAll(){
        const temp = {...resumeData.state};
        temp.profiles = [];
        resumeData.setState(temp);  
    }

    return (
        <Section style={{"height" : isExpand ? "20px" : "auto", "overflow" : "hidden"}}>

            <Heading  onClick={()=>setIsExpand(!isExpand)} >Profiles</Heading>

            {                
                <Wrapper>
                {
                    resumeData.state.profiles.map((item,indx)=>{
                        return (
                          <>    
                          <Input type="text" name={`name xa${indx}`} value={item.name} autoFocus={focus[`xa${indx}`]} onChange={e=>{handleProfile(e,indx)}}/>
                          <Input type="text" name={`link xb${indx}`} value={item.link} autoFocus={focus[`xb${indx}`]} onChange={e=>{handleProfile(e,indx)}}/>
                          </>
                        );
                    })
                } 
                <Button><BsPlusSquare onClick={handleProfileListAdd} /></Button>
                <Button><AiFillDelete onClick={handleProfileListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            } 

        </Section>
    )
}

export default Profiles;  