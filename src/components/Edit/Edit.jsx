import styled from "styled-components";
import {BiHide} from "react-icons/bi";
import BasicDetails from "./components/BasicDetail";
import Education from "./components/Education";
import Projects from "./components/Projects";
import TechnicalSkill from "./components/TechnicalSkill";
import WorkExperience from "./components/WorkExperience";
import Achievement from "./components/Achievement";
import Profiles from "./components/Profile";
import Certificates from "./components/Certificate";

function Edit(){
    const EditOptions = styled.div`
    height: 100vh;
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
                <Achievement/>
                <Profiles/>
                <Certificates/>
                
            </EditOptions>
        </Edit>
    );
}   

export default Edit;