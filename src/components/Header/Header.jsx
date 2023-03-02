import styled from "styled-components";
import Logo from "../../images/Logo.png";

const Hheader = styled.div`
display: flex;
width:100%;
height:55px;
flex-direction: row;
background-color:#678983;
top:0px;
z-index: 1  ;
position: sticky;
`

const First = styled.div`
flex:1; 
display: flex;
align-items: center;
`
const Middle = styled.div`
flex:1;
justify-content: center;
font-size:30px;
letter-spacing: 6px;
font-weight: 550;
display: flex;
align-items: center;
`
const Last = styled.div`
flex:1;
flex-direction: row-reverse;
padding-right:40px;
font-size: 17px;
font-weight: 600;
cursor:pointer;
display: flex;
align-items: center;
`

const Img = styled.img`
height: 42px;
padding:8px;
`

function Header() {

    function handleClick(){
        
    }

    return (
        <Hheader>
            <First>
                <Img src={Logo} alt=""/>
            </First>
  
            <Middle>
                ResumeCraft
            </Middle>
            <Last>
                Contact Us
            </Last>
        </Hheader>
    );
}

export default Header;