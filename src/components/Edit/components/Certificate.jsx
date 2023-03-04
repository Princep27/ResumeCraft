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
margin-bottom: 20px;
    &:hover{
        background-color: #f43c3c;
    }
`

const Wrapper = styled.div`
`

const Button = styled.span`
cursor: pointer;
`

const Section = styled.div`
padding-top: 6px;
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

function Certificates(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(true);


    function handleCertificates(t,index){
        const temp = {...resumeData.state};
        let name = t.target.name.split(" ")[0];

       
        let focusId = t.target.name.split(" ")[1];
        let value = t.target.value;

        temp.certificates[index][name] = value;

        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    

    function handleCertificatesListAdd(){
        const temp = {...resumeData.state};
        temp.certificates.push({"name" : "", "link" : ""});

        const focusId = `ya${temp.certificates.length-1}`;
        temp.focus = {};
        temp.focus[focusId] = true;

        resumeData.setState(temp);
    }

    function handleCertificatesListDelete(){
        const temp = {...resumeData.state};
        temp.certificates.pop();

        const focusId = `ya${temp.certificates.length-1}`;
        temp.focus = {};
        temp.focus[focusId] = true;
        resumeData.setState(temp);
    }    

    function deleteAll(){
        const temp = {...resumeData.state};
        temp.certificates = [];
        temp.focus = {};
        temp.focus.xa0 = true;


        resumeData.setState(temp);  
    }

    return (
        <Section style={{"height" : isExpand ? "22px" : "auto", "overflow" : "hidden" }}>

            <Heading  onClick={()=>setIsExpand(!isExpand)}>Certificate</Heading>

            {                
                <Wrapper>
                {
                    resumeData.state.certificates.map((item,indx)=>{
                        return (
                        <div key={indx}>
                          <Input type="text"  name={`name ya${indx}`} placeholder="Name" value={item.name} autoFocus={focus[`ya${indx}`]} onChange={e=>{handleCertificates(e,indx)}}/>
                          <Input type="text" name={`link yb${indx}`} placeholder="Link" value={item.link} autoFocus={focus[`yb${indx}`]} onChange={e=>{handleCertificates(e,indx)}}/>
                        </div>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleCertificatesListAdd} /></Button>
                <Button><AiFillDelete onClick={handleCertificatesListDelete} /></Button>

                <Delete  onClick={deleteAll}>Delete All</Delete>
                </Wrapper>                                    
            }   

        </Section>
    )
}

export default Certificates;  