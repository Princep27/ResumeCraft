import styled from "styled-components";
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
    width: 300px;
    position:relative;
    overflow-y: auto;
    ::-webkit-scrollbar {
    width: 20px;
    }
`

const Eedit = styled.div`
min-width: 330px;
padding-left:15px;
height: 92vh;
background-color: #e0e8e6;
display: flex;
justify-content: center;
align-items: center;
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