import insta from '../insta.png'
import fb from '../fb.svg'
import tw  from '../tw.svg'

function Footer(){
    return(
        <footer style={{display: "flex",width: "100%"}} calssName='footer'>
            <div style={{width:"40%",padding:20}}>
        <div>
            <img style={{width: "150px"}}src='https://static.vecteezy.com/system/resources/previews/019/514/630/non_2x/letter-k-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg'></img>
            <h1 style={{fontSize: '20px',color:"orange"}}>Hi,This is Keerthi I am a Fullstack Developer in Python.</h1>
            <p>1800 266 6123</p>
        </div>
        <div className=" social-icon">
            <img style={{width: "20px"}} src={insta} alt='social icon' />
            <img style={{width: "20px"}} src={fb} alt='social icon' />
            <img style={{width: "20px"}} src={tw} alt='social icon' />
            </div> 
            </div> 
        <div style={{width: "60%",display:'flex',justifyContent:'center' , gap:'30px',padding:20}} className='right-footer'>
            <div className="footer-menu" style={{display:'flex',flexDirection:'column'}}>
            <h3>Information</h3>
            <p>Track Your Order</p>
            <p>Videos</p>
            <p>FAQ</p>
            <p>Careers</p>
            </div>
            <div className="footer-menu" style={{display:'flex',flexDirection:'column'}}>
             <h3>My Account</h3>   
            <p>Cart</p>
            <p>Checkout</p>
            <p>My Account</p>
            <p>Payment Options</p>
            </div>
            <div className="footer-menu" style={{display:'flex',flexDirection:'column'}}>
            <h3>Services</h3>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Roub B2B</p>
            </div>
            <div className="footer-menu" style={{display:'flex',flexDirection:'column'}}>
            <h3>Policies</h3>
            <p>Investor</p>
            <p>Relations</p>
            <p>MACFOS CSR</p>
            <p>Privacy Policy</p>
            </div> 
        </div>
        </footer>
    )
}
export default Footer;