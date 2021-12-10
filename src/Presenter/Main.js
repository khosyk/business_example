import React from 'react';
import '../Styles/dist/Main.css';

// Components
import Article from '../Components/Article';

// images
import Banner from '../images/banner.jpg'
import Product1 from '../images/product1.jpg'
import Product2 from '../images/product2.jpg'
import Product3 from '../images/product3.jpg'

// icons
import {HiSpeakerphone} from 'react-icons/hi';
import {BsGearWideConnected ,BsArrowsFullscreen} from 'react-icons/bs';
import {FaUserFriends} from 'react-icons/fa';

export default function Main() {
    return (
        <>
            <section id="banner" style={{ background: `url(${Banner})` }}>
                <div className="inner">
                    <p>
                        LOREMIPSUM
                    </p>
                    <div className='title'>
                        <span>LOREM</span>
                        <h1>IP<span>S</span>UM</h1>
                    </div>
                    <div className='nums'>
                        <ul>
                            <li>
                                01
                            </li>
                            <li>
                                02
                            </li>
                            <li>
                                03
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='arrows'>
                    <span className='arrow'>←</span>
                    <span>I</span>
                    <span className='arrow'>→</span>
                </div>
            </section>

            <section id='intro01'>
                   <Article 
                   name='word'
                   num='01' first='LOREM' second='IPSUM' third='Lorem ipsum, dolor sit amet'
                   fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
                   />
                <div className='wrapArticles'>
                    <div className='wrapArticle'>
                    <article>
                        <img src={Product1} alt="product1" />
                    </article>
                    <article>
                        <img src={Product2} alt="product2" />
                    </article>
                    <article>
                        <img src={Product3} alt="product3" />
                    </article>
                    <div className='productLink'>
                        <span>
                            <b>Product</b>
                            <p>01</p>
                        </span>
                    </div>
                    </div>
                </div>
            </section>

            <section id="intro02">
                <div className='inner'>
                    <div className='innerNumber'>
                        <BsArrowsFullscreen className='innerNumberBg'/>
                        <div>02</div>
                    </div>
                    <h3>
                    OUR BUSINESS
                    </h3>
                    <ul>
                        <li>
                        <HiSpeakerphone className='icons'/>
                        <h4>Lorem ipsum dolor</h4>
                        <p>lorem ipsum dolor bill make some rain please</p>
                        <b>
                            Read News
                        </b>
                        </li>
                        <li>
                        <BsGearWideConnected className='icons'/>
                        <h4>Lorem ipsum dolor</h4>
                        <p>lorem ipsum dolor et doelr consectetur adipisicing </p>
                        <b>
                            Read News
                        </b>
                        </li>
                        <li>
                        
                        <FaUserFriends className='icons'/>
                        <h4>Lorem ipsum dolor</h4>
                        <p>sit amet consectetur adipisicing elit.Lorems is really awesome</p>
                        <b>
                            Read News
                        </b>
                        </li>
                       
                    </ul>
                </div>
            </section>

            <section id='intro03'>

            </section>
        </>
    )
}