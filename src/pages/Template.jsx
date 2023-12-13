import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Edit from "../components/Edit/Edit";
import ResumeTheme from "../resumeTheme/PlainTemplate/PlainTempate";
import { useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import { useContext } from "react";
import resumeContext from "../context/resumeContext";

const Body = styled.div`
    height: auto;
    width: auto;
`

const Wrapper = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    position: relative;
    @media print {
    @page {
        size: 210mm 297mm;
    }
    }
`

const Preview = styled.div`
    flex: 3;
    min-width: 210mm;
    background-color: #d0c9c9;
    height:92vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 20px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`

const ShowPreview = styled.div`
    height:297mm;
    width: 210mm;
    background-color: #ffffff;
`

const Show = styled.div`
    height: 100%;
`

const Button = styled.button`
width:100px;
height:30px;
position: absolute;
top:15px;
right:200px;
z-index: 10;
border-radius: 5px;
border:none;
cursor: pointer;
background-color: #becbc9;
`

function Template(){
    const componentRef = useRef();
    //const resumeData = useContext(resumeContext);

    // setInterval(
    //     ()=>localStorage.setItem("data",JSON.stringify(resumeData.state)),
    // 3000);

    // useEffect(
    //     ()=>{
    //         if(localStorage.getItem("data") !== null){
    //             resumeData.setState(JSON.parse(localStorage.getItem("data")));
    //         }
    //     },[]
    // )   

    useEffect(() => {
        const unloadCallback = (event) => {
          event.preventDefault();
          event.returnValue = "";
          return "";
        };
      
        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
      }, []);

    return (
        <>
            <ReactToPrint
                trigger={() => <Button>Print</Button>}
                content={() => componentRef.current}
            />
           <Header/>
           <Body>
               <Wrapper>
                  <Preview>
                    <Show>
                    <ShowPreview>
                        
                        <div ref={componentRef}>
                            <ResumeTheme/>
                        </div>
                        
                    </ShowPreview>
                    </Show>
                  </Preview>
                  
                  <Edit/>
               </Wrapper>
           </Body>
        </>
    );
}

export default Template;