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


function Profiles(){

    const resumeData = useContext(resumeContext);
    const focus = resumeData.state.focus;

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
        <section>

            <h3>Profiles</h3>

            {                
                <Wrapper>
                {
                    resumeData.state.profiles.map((item,indx)=>{
                        return (
                          <>    
                          <input type="text" name={`name xa${indx}`} value={item.name} autoFocus={focus[`xa${indx}`]} onChange={e=>{handleProfile(e,indx)}}/>
                          <input type="text" name={`link xb${indx}`} value={item.link} autoFocus={focus[`xb${indx}`]} onChange={e=>{handleProfile(e,indx)}}/>
                          </>
                        );
                    })
                } 
                <Button><BsPlusSquare onClick={handleProfileListAdd} /></Button>
                <Button><AiFillDelete onClick={handleProfileListDelete} /></Button>

                <Delete  onClick={deleteAll}><AiFillDelete/></Delete>
                </Wrapper>                                    
            } 

        </section>
    )
}

export default Profiles;  