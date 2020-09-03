import React, { Component } from 'react'
import gsap from 'gsap';

class IntroOverlay extends Component {

    componentDidMount() {
        gsap.to("body", 0, { css: { visibility: 'visible' } });
        const timeline = gsap.timeline();
        
        timeline
        .set(document.body, {overflow: "hidden"})
        .from(".homepage .quote .line span", 2, {
        y: 80,
        ease: 'power4.out',
        delay: 1,
        stagger: {
            amount: 0.3
        }
        }).to('.overlay-top', 0.5, {
        opacity: 0,
        ease: 'linear'
        })
        .set(document.body, {overflow: "auto"});
    }

    render() {
        return (
            <div className='intro-overlay'>
                <div className="overlay-top"></div>
            </div>
        )
    }
}

export default IntroOverlay;
