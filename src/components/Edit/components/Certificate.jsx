import styled from "styled-components";
import { useContext, useState } from "react";
import resumeContext from "../../../context/resumeContext";
import { BsPlusSquare } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const Delete = styled.div`
cursor: pointer;
`

const Wrapper = styled.div`
`

const Button = styled.span`
cursor: pointer;
`

const Section = styled.div`
padding-top: 6px;
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

function Certificates(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;
    const [isExpand,setIsExpand] = useState(false);


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
        <Section style={{"height" : isExpand ? "20px" : "auto", "overflow" : "hidden" }}>

            <Heading  onClick={()=>setIsExpand(!isExpand)}>Certificate</Heading>

            {                
                <Wrapper>
                {
                    resumeData.state.certificates.map((item,indx)=>{
                        return (
                        <>
                          <Input type="text" name={`name ya${indx}`} value={item.name} autoFocus={focus[`ya${indx}`]} onChange={e=>{handleCertificates(e,indx)}}/>
                          <Input type="text" name={`link yb${indx}`} value={item.link} autoFocus={focus[`yb${indx}`]} onChange={e=>{handleCertificates(e,indx)}}/>
                        </>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleCertificatesListAdd} /></Button>
                <Button><AiFillDelete onClick={handleCertificatesListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            }   

        </Section>
    )
}

export default Certificates;  