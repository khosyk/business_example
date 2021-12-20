import React from 'react';
import '../Styles/Footer.css';
import Article from './Article';

// icons

import {SiFacebook, SiYoutubemusic} from 'react-icons/si';
import {RiInstagramFill} from 'react-icons/ri';


export default function Footer() {

    return (
        <>
            <footer>
                <div className='arrows'>
                        <span className='arrow'>←</span>
                        <span>I</span>
                        <span className='arrow'>→</span>
                    </div>

                    
            <div className='footerLeft'>
                <div className='BgImg'>
                </div>
                <div className='wrap'>
                <span>NEWS</span>
                <b>& NOTICE</b>
                <p className='p1'>
                Lorem ipsum, dolor sit amet
                </p>
                <p className='p2'>
                adipisicing elit. Incidunt blanditiis fugiat similique
                </p>
                </div>
            </div>



                <Article
                    name='footerRight'
                    first='CONTACT INFO'
                    third='● 1234 - 5678'
                    fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctioobcaecati sweet desert is always right and we suppose to eat something healthy.'
                />

                <div className='dots'>
                <ul>
                    <li>
                        <SiFacebook/>
                    </li>
                    <li>
                        <SiYoutubemusic/>
                    </li>
                    <li>
                        <RiInstagramFill/> 
                    </li>
                </ul>
                </div>
            </footer>
        </>
    )
};