import React, { useEffect, useRef } from 'react';
import lootie from 'lottie-web'
const HomeFirst = () => {
    const container = useRef(null)
    useEffect(() => {
        lootie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true, 
            animationData: require('../loot.json')
        })
    })
    return (
       <div className="container">
            <div className='row'>
            <div className="col-md-4">
                <h4>hello</h4>
            </div>
            <div className="col-md-8">
                <div  ref={container} ></div>

            </div>
        </div>
       </div>
    );
};

export default HomeFirst;