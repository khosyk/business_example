import React, { useRef } from 'react';


// component
import Article from '../Components/Article';
import Loader from '../Components/Loader';

// icons
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';

// sources
import loadVideo from '../images/t.mp4';
import { Link } from 'react-router-dom';


export default function Youtube(props) {
    const { items: data, loader } = props;
    const popup = useRef(null);
    return (
        <>
            <Banner />
            <Youtube01 />
            <Youtube02 data={data} loader={loader} popup={popup} />
        </>
    )
}



const Banner = () => {
    return (<>

        <section id="youtubeBanner">
            <video src={loadVideo} autoPlay muted loop >
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

    </>
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


const Youtube02 = ({ data, popup }) => {

    return (
        <section id="youtube02">
            <div className='inner'>
                <div className='innerNumber'>
                    <BsArrowsFullscreen className='innerNumberBg' />
                    <div>02</div>
                </div>
                <h3>
                    OUR WORK
                </h3>
                {data === null ? <Loader /> : <div>
                    <ul>
                        <li>
                            <article>
                                <div>
                                    <img src={`${data[0].snippet.thumbnails.medium.url}`} alt="youtube" onClick={(data,popup) => {data.concat((data, popup) =><YoutubePopup data={data} popup={popup}/> )
                                    }} />
                                    <h1>${data[0].snippet.title}</h1>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                                    </p>
                                    <span>PROJECT 21.12.20</span>
                                </div>
                            </article>
                        </li>
                    </ul>
                    </div>}
                </div>
        </section>
    )
}


// const onRemove = id => {
//     // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
//     // = user.id 가 id 인 것을 제거함
//     setUsers(users.filter(user => user.id !== id));
//   };

const YoutubeLists = (data) => {

    return (
        <>

        </>
    )
}


const YoutubePopup = ({ data, popup }) => {
    console.log(data);
    popup.current.classList.add('on');
    return (
        <figure ref={popup}>
            <iframe src={`https://www.youtube.com/embed/${}`} allowfullscreen frameborder='0' width="600" height="300" title='#'>youtube video </iframe>
            <span class='btnClose' onClick={() => {
                popup.current.classList.remove('off');
            }}>close</span>
        </figure>
    )
}