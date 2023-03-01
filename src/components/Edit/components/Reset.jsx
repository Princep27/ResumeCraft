import styled from "styled-components";
import {GrPowerReset} from "react-icons/gr";
import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";

const Button = styled.button`
padding: 4px 15px 4px 15px;
cursor: pointer;
position: absolute;
top: 80px;
right: 30px;
width: 50px;
height:30px;    
padding:1px;
border-radius: 4px;
border: none;
color: grey;

 &:hover{
    background-color:grey;
    color : white;
 }
`

function Reset(){

    const resumeData = useContext(resumeContext);
    const state = {

        "themecolor" : "#0053c6",

        "basicDetail" : {
            "name" : "Prince Patel",
            "email" : "abcde@gmail.com",
            "contact" : "+911010101110",
            "linkedin" : "linkedin link",
            "github" : "github link",
            "address" : "12 Your City Rajendra Nagar, Indore",
            "summary" : "Prefinal Year Computer Science student Looking for full time, part time SDE / SWE intern",
        },

        "education" : [
            {
                "courseName" : "Bachelor of Technology in Computer Science",
                "instituteName" : "Institute of Engineering & Science ,Indore",
                "startDate" : "6/2020",
                "endDate" : "Present",
                "grade" : "9.2"
            },
            {
                "courseName" : "Your Course Name",
                "instituteName" : "Name of your institution",
                "startDate" : "06/2018",
                "endDate" : "06/2020",
                "grade" : "8.0"
            },
            
        ],

        "experience" : [
            {
                "position" : "Your Job Title",
                "companyName" : "Company Name",
                "startDate" : "09/2020",
                "endDate" : "Present",
                "work" : [
                    "Sucessfully Managed to complete Project in very short duration",
                    "Developed and managed new Marketing Strategy",
                    "Received employee of the month reward"
                ]
            },
            {
                "position" : "Your Job Title",
                "companyName" : "Company Name",
                "startDate" : "09/2020",
                "endDate" : "09/2021",
                "work" : [
                    "Sucessfully Managed to complete Project in very short duration",
                    "Developed and managed new Marketing Strategy",
                    "Received employee of the month reward"
                ]
            },
        ],
        
        "projects" : [
            {
                "title" : "Body Pose Detection App",
                "link"  :  "",
                "about" : [
                    "Body Pose Detection App using Google ML-Kit Flutter",
                    "All-time body pose detection",
                    "Used Dart, SQlit, flutter framework",
                    "User-friendly" ],   
            },
        ],


        "technicalSkill" : {
                "title" : "TechnicalSkill",
                "skills" : [
                    "c c++", "HTML CSS", "Vanilla Javascript", "React",
                    "Data Structure & Algorithm", "Operating System", "Frontend Web Development"
                ],
        },


        "achievements" : [
            "Global ranking 30 in Long challenge in Codechef",
            "Solved 300+ Questions on GFG ,LeetCode , Codeforces",
            "1000+ Coding Score in GFG",
            "Won Coding Decoding Hackathon in Campus"
        ],

        
        "profiles" : [
            {
                "name" : "CodeChef",
                "link"  : ""
            },
            {
                "name" : "Codeforces",
                "link" : ""
            },
            {
                "name" : "leetcode",
                "link" : "",
            }
        ],

        "certificates" : [
            {
                "name" : "Introduction to Web Dev",
                "link" : "",
            },
            {
                "name" : "Problem Solving",
                "link" : "",
            },
            {
                "name" : "Writer",
                "link" : "",
            } 
        ],

        "focus" : {
            
        },
    };

    function handleClick(){
        resumeData.setState(state);
        localStorage.setItem("data",JSON.stringify(state));
    }
    
    return <Button onClick={handleClick}>Reset</Button>
}

export default Reset;