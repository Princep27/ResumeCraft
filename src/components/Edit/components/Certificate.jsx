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


function Certificates(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

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
        <section>

            <h3>Certificate</h3>

            {                
                <Wrapper>
                {
                    resumeData.state.certificates.map((item,indx)=>{
                        return (
                        <>
                          <input type="text" name={`name ya${indx}`} value={item.name} autoFocus={focus[`ya${indx}`]} onChange={e=>{handleCertificates(e,indx)}}/>
                          <input type="text" name={`link yb${indx}`} value={item.link} autoFocus={focus[`yb${indx}`]} onChange={e=>{handleCertificates(e,indx)}}/>
                        </>);
                    })
                } 
                <Button><BsPlusSquare onClick={handleCertificatesListAdd} /></Button>
                <Button><AiFillDelete onClick={handleCertificatesListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            }   

        </section>
    )
}

export default Certificates;  