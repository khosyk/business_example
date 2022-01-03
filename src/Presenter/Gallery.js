import React from 'react';
import Article from '../Components/Article';


const body = document.querySelector("body");

function Gallery({items, setIsPop,setIndex, isPop, index, showPop, imgSrc}) {

    return (
        <>
        <GalleryBanner/>
        <Gallery01/>
        <Gallery02/>
        </>
    )
    



    function GalleryBanner(){
        return (
            <section id="galleryBanner">
                <div className="inner">
                    <div className='wrap'>
                        <p>
                            UNIQUENESS IS
                        </p>
                        <div className='title'>
                            <span>OUR</span>
                            <h1>PA<span>T</span>H</h1>
                        </div>
                    </div>
                </div>
            </section>
        );}
    
    function Gallery01(){
        
    return (

        <section id='gallery01'>
            <Article
                name='word'
                num='01' first='VIEW' second='PROJECTS' third='Lorem ipsum, dolor sit amet'
                fourth='adipisicing elit. Incidunt blanditiis fugiat similique cupiditate nobis fugit, veniam amet aut distinctio obcaecati?'
            />
        </section>

    )    
    }

    function Gallery02(){
        return(
            <main id="gallery02">
                <div className="inner">
                    <section>
                        {
                            items.map((item, index) => {
                                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
                                return (
                                    <article key={index}>
                                        <div className="inner">
                                            <span>
                                                {item.id.substring(7,11)}.
                                            </span>
                                            <div className="pic" onClick={() => {
                                                setIsPop(true);
                                                //버튼 클릭시 index state변경
                                                setIndex(index);
                                                showPop(index);
                                            }}>
                                                <img src={imgSrc} alt={`${item.title}`}/>
                                            </div>
                                            <h2>{ item.title === '' ? 'NULL' : item.title}</h2>
                                            <div className='picBottom'>
                                                <div>
                                                    <img src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`} alt={item.title}></img>
                                                <strong>{item.owner}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </section>
    
                </div>
                {isPop ? <Pop /> : null}
    
            </main>)
    }


    function Pop() {

        return (
            <aside className="pop">
                {/* 해당 이미지 url적용 */}
                <img src={imgSrc} alt={items[index].title} />
                {/* items의 index번째 객체 안에 있는 텍스트 */}
                <p>{items[index].title}</p>
                <span onClick={() => {
                    setIsPop(false);
                    body.style.overflow = "auto";
                }}>Close</span>
            </aside>
        )
    }
}

export default Gallery;