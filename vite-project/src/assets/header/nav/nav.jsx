import './nav.css'

import Logo from '../../img/logo.png'

export default function Nav(){
    return(
        <>
            <nav>
                <div className='nav_con'>
                    <div className='nav_con_left'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='nav_con_right'>
                        <a href="">Projects</a>
                        <a href="">About</a>
                        <a href="">News</a>
                        <a href="">Team</a>
                        <a href="">Contact</a>
                        <button type="button">Get template</button>
                    </div>
                </div>
            </nav>
        </>
    )
}