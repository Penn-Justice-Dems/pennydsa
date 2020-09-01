import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import newsItems from '../res/data/news.json';
import NewsItem from '../components/NewsItem';
import BlockBackground from '../components/BlockBackground';

gsap.registerPlugin(ScrollTrigger);

const NewsPage = () => {

    useEffect(() => {
        for (let i = 0; i < newsItems.length; i++) {
            gsap.from("#news-item-"+i, {
                duration: 0.5,
                opacity: 0,
                x: -50,
                scrollTrigger: {
                    trigger: "#news-item-"+i,
                    toggleActions: "restart reset restart reset"
                }
                
            });
        }
    }, []);

    return (
        <div className="news-page">
            <BlockBackground/>
            <div className="title-container">
                <h2 className="title">
                    Penn Justice Dems <b>In The News</b>
                </h2>
            </div>
            <div>
                {
                    newsItems.map((item, index) => {
                        return <div id={`news-item-${index}`} key={index}> <NewsItem item={item}/> </div>
                    })
                }
            </div>
        </div>
    )
    
}

export default NewsPage;
