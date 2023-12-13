import { useContext } from "react";
import resumeContext from "../../../context/resumeContext";
import styled from "styled-components";

const colorArr = ["#0053c6","#804674","#EB455F","#22A39F","#609966","#DC5F00","#3795BD","#594545","#B7B78A"];

const Input =styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
    `

    const Color = styled.div`
        height: 15px;
        width: 15px;
        margin: 2px;
        background-color: ${props=>props.color};
    `

    const Heading = styled.h3`
        margin: 10px;
    `


function ColorTheme(){
    const resumeData = useContext(resumeContext);

    function setColor(e,value){
        const temp = {...resumeData.state};
        temp.themecolor = value;
        resumeData.setState(temp);    
        // localStorage.setItem("data",JSON.stringify(temp));    
    }

    return (<Input>
        <Heading>Color</Heading>
        {
            colorArr.map(
                (item,index)=> <Color key={index} color={item} onClick={(e)=>setColor(e,item)}></Color>
            )
        }
    </Input>);
}

export default ColorTheme;