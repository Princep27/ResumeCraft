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
    const [isExpand,setIsExpand] = useState(true);


    function handleCertificates(t,index){
        const temp = {...resumeData.state};
        let name = t.target.name;
        let value = t.target.value;

        temp.certificates[index][name] = value;
        resumeData.setState(temp);
    }    

    function handleCertificatesListAdd(){
        const temp = {...resumeData.state};
        temp.certificates.push({"name" : "", "link" : ""});
        resumeData.setState(temp);
    }

    function handleCertificatesListDelete(){
        const temp = {...resumeData.state};
        temp.certificates.pop();
        resumeData.setState(temp);
    }    

    function deleteAll(){
        const temp = {...resumeData.state};
        temp.certificates = [];
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
                          <Input type="text"  name="name" placeholder="Name" value={item.name} onChange={e=>{handleCertificates(e,indx)}}/>
                          <Input type="text" name="link" placeholder="Link" value={item.link} onChange={e=>{handleCertificates(e,indx)}}/>
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