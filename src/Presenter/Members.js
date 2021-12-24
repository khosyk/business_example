import React from 'react';

export default function Members(props) {
    const {members} = props;
    
    return(
        <>
        <Banner/>
        </>
    )
}



const Banner = () => {
    return (
        <section id="memberBanner">
            <div className="inner">
                <div className='wrap'>
                <p>
                    VISION IS
                </p>
                <div className='title'>
                    <span>OUR</span>
                    <h1>TE<span>A</span>M</h1>
                </div>
                </div>
            </div>
            <div className='arrows'>
                <button className='arrowLeft'>←</button>
                <span>I</span>
                <button className='arrowRight'>→</button>
            </div>
        </section>

    );
}