import React, { useRef, useState } from 'react';


// component
import Article from '../Components/Article';
import Loader from '../Components/Loader';

// icons
import {
    BsArrowsFullscreen,
} from 'react-icons/bs';

// sources
import loadVideo from '../images/t.mp4';


export default function Youtube(props) {
    const { items: data, loader } = props;
    const [youtubePopup, setYoutubePopup] = useState(false);
    const [youtubeData, setYoutubeData] =useState(null);
    const body = document.body;
    function lockScroll(){
        body.classList.toggle('no-Scroll')
    }
    return (
        <>
            <Banner />
            <Youtube01 />
            <Youtube02 data={data} loader={loader} youtubePopup={youtubePopup} setYoutubePopup={setYoutubePopup} setYoutubeData={setYoutubeData} youtubeData={youtubeData} lockScroll={lockScroll}/>
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


const Youtube02 = ({ data,youtubePopup, setYoutubePopup,setYoutubeData, youtubeData,lockScroll }) => {
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
                        {data.map((data) => 
                            <article key={data.id} >
                                <div className='youtubeThumbnail'>
                                    <img src={`${data.snippet.thumbnails.medium.url}`} alt="youtube" onClick={() => {
                                        setYoutubePopup(true);
                                        setYoutubeData(data);
                                        lockScroll();
                                    }} /> 
                                    <h1>{`${data.snippet.title}`}</h1>
                                </div>
                                <div className='youtubeText'>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                                    </p>
                                    <span>PROJECT 21.12.20</span>
                                </div>
                            </article>)}
                        </li>
                    </ul>
                    </div>}
                </div>
                {youtubePopup ? <YoutubePopup setYoutubePopup={setYoutubePopup} youtubeData={youtubeData}/> : ''}
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


const YoutubePopup = ({setYoutubePopup, youtubeData }) => {
    const youtubeUrl = youtubeData.snippet.resourceId.videoId;
    const title = youtubeData.snippet.title;
    return (
        <figure id='popup'>
            <span className='btnClose' onClick={() => {
                document.body.classList.remove('no-Scroll');
                setYoutubePopup()} }>close</span>
            <iframe src={`https://www.youtube.com/embed/${youtubeUrl}`} allowFullScreen frameBorder='0' title={title} >youtube video </iframe>
        </figure>
    )
}