import ResumeContext from "../context/resumeContext";
import { useState } from "react";

const ResumeState = (props) => {
    const st = {

        "basicDetail" : {
            "name" : "Prince Patel",
            "email" : "abcde@gmail.com",
            "contact" : "+911010101110",
            "address" : "12 Your City Rajendra Nagar, Indore",
        },

        "education" : [
            {
                "courseName" : "Bachelor of Technology in Computer Science",
                "instituteName" : "Institute of Engineering & Science ,Indore",
                "startDate" : "6/2020",
                "endDate" : "6/2024",
                "grade" : "9.2"
            },
            {
                "courseName" : "Bachlor of Architechture",
                "instituteName" : "School of Architecture Indore",
                "startDate" : "60/2020",
                "endDate" : "60/2024",
                "grade" : "8.0"
            },
            
        ],

        "experience" : [
            {
                "position" : "Your Postion",
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
                "position" : "Yaour Postion",
                "companyName" : "Company Name",
                "startDate" : "09/2020",
                "endDate" : "Present",
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
                "about" : [
                    "Body Pose Detection App using Google ML-Kit Flutter",
                    "All-time body pose detection",
                    "Used Dart, SQlit, flutter framework",
                    "User-friendly" ],   
            },

            {
                "title" : "Body PoSe Detection App",
                "about" : [
                    "Body Pose Detection App using Google ML-Kit Flutter",
                    "All-time body pose detection",
                    "Used Dart, SQlit, flutter framework",
                    "User-friendly" ],   
            }
        ],


        "technicalSkill" : {
                "title" : "TechnicalSkill",
                "skills" : [
                    "c  c++", "HTML CSS", "Vanilla Javascript", "React",
                    "Data Structure & Algorithm", "Operating System", "Frontend Web Development"
                ],
        },


        "achievements" : [
            "Global ranking 30 in Long challenge in Codechef",
            "Solved 300+ Questions on GFG ,LeetCode , Codeforces",
            "1000+ Coding Score in GFG",
            "Won Coding Decoding Hackathon in Campus"
        ],

        "profiles" : [],

        "focus" : {
            
        },
    }

    const [state,setState] = useState(st);

    return (
            <ResumeContext.Provider value={{state,setState}}>
                {props.children} 
            </ResumeContext.Provider    >
    )
}   

export default ResumeState; 