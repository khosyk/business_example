import React from 'react';


// component
import Article from '../Components/Article';

// icons
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';

// sources
import {BannerVideo} from '../images/youtubeBanner.mp4';


export default function Youtube() {
    return (
        <>
            <Banner />
            <Youtube01/>
            <Youtube02/>
        </>
    )
}



const Banner = () => {
    return (
        <section id="youtubeBanner">
        <video autoplay muted loop width='100%' height='100%'>
            <source src={BannerVideo} type='video/mp4'/>
        </video>
            <div className="inner">
                <div className='wrap'>
                    <p>
                        ENTHUSIASM IS
                    </p>
                    <div className='title'>
                        <span>OUR</span>
                        <h1>WO<span>R</span>K</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}


const Youtube01 = () => {
    
    return (

        <section id='youtube01'>
            <Article
                name='word'
                num='01' first='LOREM' second='IPSUM' third='Lorem ipsum, dolor sit amet'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
            />
            
        </section>

    )
}


const Youtube02 = () => {
    return (
        <section id="youtube02">
            <div className='inner'>
                <div className='innerNumber'>
                    <BsArrowsFullscreen className='innerNumberBg' />
                    <div>02</div>
                </div>
                <h3>
                    OUR TEAM
                </h3>
            </div>
        </section>
    )
}
