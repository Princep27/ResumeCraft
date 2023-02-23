import styled from "styled-components";
import {BiHide} from "react-icons/bi";
import BasicDetails from "./components/BasicDetail";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechnicalSkill from "./components/TechnicalSkill";
import WorkExperience from "./components/WorkExperience";

function Edit(){
    const EditOptions = styled.div`
    height: 100%;
    width:300px;
    background-color: #9c8686;
    `

    const Edit = styled.div`
    flex:1;
    background-color: #cacaca;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `

    return (
        <Edit>
            <EditOptions>
   
                <BasicDetails/>
                <Education/>
                <WorkExperience/>
                <Projects/>
                <TechnicalSkill/>

            </EditOptions>
        </Edit>
    );
}   

export default Edit;