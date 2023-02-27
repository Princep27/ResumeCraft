import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import Edit from "../components/Edit/Edit";
import ResumeTheme from "../resumeTheme/PlainTemplate/PlainTempate";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

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
    flex:3;
    background-color: #d8d8d8;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ShowPreview = styled.div`
    height:297mm;
    width: 210mm;
    background-color: #ffffff;
`

const Button = styled.button`
width:100px;
height:30px;
position: absolute;
top:20px;
right:200px;
`

function Template(){
    const componentRef = useRef();

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
                    <ShowPreview>
                        
                        <div ref={componentRef}>
                            <ResumeTheme/>
                        </div>
                        
                    </ShowPreview>
                  </Preview>
                  
                  <Edit/>
               </Wrapper>
           </Body>
           <Footer/>
        </>
    );
}

export default Template;