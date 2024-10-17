import './header.css'
import Nav from './nav/nav.jsx'

import SectOneIMG from '../img/sectOneImg.png'

export default function Header(){
    return(
        <>
            <header>
                <Nav/>
                <div className='header_con'>
                    <div className='header_con_left'>
                        <div className='header_con_left_inside'>
                            <p>Wishbone+Partners</p>
                            <p>The home of beautiful architecture.</p>
                            <p>We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.</p>
                            <button type="button">Read more</button>
                        </div>
                    </div>
                    <div className='header_con_right'>
                        <img src={SectOneIMG} alt="" />
                    </div>
                </div>
            </header>
            
            
        </>
    )
}