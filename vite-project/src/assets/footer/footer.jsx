import './footer.css'
import Logo from '../img/logo.png'
import Facebook from '../img/facebook.png'
import Insta from '../img/insta.png'
import Twitter from '../img/twitter.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div className='footer_con'>
                    <div className='footer_left'>
                        <img src={Logo} alt="" />
                        <p>Powered by Webflow.</p>
                        <p>All rights reserved Wishbone+Partners, Inc. Licensing.</p>
                    </div>
                    <div className='footer_right'>
                        <img src={Facebook} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
}