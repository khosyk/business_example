import React from 'react';
import '../Styles/Footer.css';
import Article from './Article';

export default function Footer() {

    return (
        <>
            <footer>
                <div className='BgImg'>
                    <div className='BgBlock'></div>
                    <div className='arrows'>
                        <span className='arrow'>←</span>
                        <span>I</span>
                        <span className='arrow'>→</span>
                    </div>
                </div>
                <Article
                    name='footerLeft' first='NEWS' second='& NOTICE' third='Lorem ipsum, dolor sit amet'
                    fourth='adipisicing elit. Incidunt blanditiis fugiat similique'
                />



                <Article
                    name='footerRight'
                    first='CONTACT INFO'
                    third='● 1234 - 5678    
                    ● ex@mail.com'
                    fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctioobcaecati sweet desert is always right and we suppose to eat something healthy and light but what can they help to make us happy to live?'
                />

                <div className='dots'>
                <div>● ● ●</div>
                </div>
            </footer>
        </>
    )
};