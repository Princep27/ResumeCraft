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

const EditOptions = styled.div`
    height: 100%;
    width:300px;
    `

const Eedit = styled.div`
flex:1;
background-color: #e0e8e6;
height: calc(100vh - 60px);
display: flex;
justify-content: center;
align-items: center;
overflow-y: auto;
overflow-x: scroll;
::-webkit-scrollbar {
width: 20px;
}
`

function Edit(){

    return (
        <Eedit>
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
        </Eedit>
    );
}   

export default Edit;