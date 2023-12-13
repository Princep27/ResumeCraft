import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

function TemplateList(){

    const Body = styled.div`
        height:auto;
        width:100%;
    `

    const Wrapper = styled.div`
        padding:50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `

    const ItemWrapper = 
    styled.div`
    `

    const Item = styled.div`
        height:350px;
        width:250px;
        background-color: #d0c9c9;
        cursor: pointer;

        &:hover{
            background-color: #d9d2d2;
        }
    `

    const Para = styled.p`
        height:30px;
        width:250px;
        font-size: 20px;        
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 3px ;
    `
    

    return (
        <>
           <Header/>
           
           <Body>
              <Wrapper>
                 <ItemWrapper>
                    <Item></Item>
                    <Para>Plain</Para>
                 </ItemWrapper>
              </Wrapper>
           </Body>

           <Footer/>        
        </>
    );
}       

export default TemplateList;