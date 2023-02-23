import styled from "styled-components";
import Logo from "../../images/Logo.png";

function Header() {

    const Header = styled.div`
        display: flex;
        width:100%;
        height:60px;
        flex-direction: row;
        background-color: rgb(223, 223, 223);
    `

    const First = styled.div`
       flex:1; 
       display: flex;
    align-items: center;
    `
    const Middle = styled.div`
        flex:1;
        justify-content: center;
        font-size:35px;
        letter-spacing: 6px;
        font-weight: 550;
        display: flex;
        align-items: center;
    `
    const Last = styled.div`
        flex:1;
        flex-direction: row-reverse;
        padding-right:40px;
        font-size: 20px;
        font-weight: 600;
        cursor:pointer;
        display: flex;
        align-items: center;
    `

    const Img = styled.img`
        height: 50px;
        padding:10px;
    `

    return (
        <Header>
            <First>
                <Img src={Logo}/>
            </First>

            <Middle>
                ResumeCraft
            </Middle>

            <Last>
                Contact Us
            </Last>
        </Header>
    );
}

export default Header;