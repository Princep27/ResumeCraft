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
import Reset from "./components/Reset";
import ColorTheme from "./components/ColorTheme";

function Edit(){
    const EditOptions = styled.div`
    height: 100%;
    width:300px;
    `

    const Edit = styled.div`
    flex:1;
    background-color: #ddd6d6;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    ::-webkit-scrollbar {
    width: 20px;
    }
    `

    return (
        <Edit>
            <EditOptions>
                
                <Reset/>
                <ColorTheme/>
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