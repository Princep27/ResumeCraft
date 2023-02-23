import "./footer.css";
import Logo from "../../images/Logo.png";


function Footer(){
    return (
        <>
           <div class="footer">
               <div className = "footerFirst">
                  <img src={Logo} alt=""></img>
               </div>

               <div className = "footerLast">
                  <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Resume Templates</li>
                    <li>Donate</li>
                    <li>Help</li>
                  </ul>
               </div>
           </div>
        </>
    );
}

export default Footer;