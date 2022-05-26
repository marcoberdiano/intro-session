import { useState, useEffect } from 'react'

import herodesktop from '../images/image-hero-desktop.png'
import heromobile from '../images/image-hero-mobile.png'
import clientDataBiz from '../images/client-databiz.svg'
import clientAudioPhile from '../images/client-audiophile.svg'
import clientMeet from '../images/client-meet.svg'
import clientMaker from '../images/client-maker.svg'
import '../css/Hero.css'

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toogleImage = () =>{
        window.innerWidth < 1100 ? setIsMobile(true) : setIsMobile(false) 
    }

    useEffect(()=>{
        window.addEventListener('resize', toogleImage);

        return () => {
            window.removeEventListener('resize', toogleImage);
        }
    },[isMobile])

    return ( 
        <main className='hero-container'>
            <div className='hero-left'>
                <h1 className='hero-title'>Make remote work</h1>
                <p className='hero-text'>
                    Get your team in sync, no matter your location. Streamline processes, 
                    create team rituals, and watch productivity soar.
                </p>
                <button className='btn'>Learn more</button>
                <div className='brand'>
                    <img src={clientDataBiz} alt="" />
                    <img src={clientAudioPhile} alt="" />
                    <img src={clientMeet} alt="" />
                    <img src={clientMaker} alt="" />
                </div>
            </div>
            <div className='hero-right'>
                <img className='hero-image' src={isMobile ? heromobile : herodesktop} alt={herodesktop} />
            </div>
        </main>
     );
}
 
export default Hero;