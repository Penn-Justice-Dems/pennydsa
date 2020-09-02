import React, { Component } from 'react'
import gsap from 'gsap';
import CrossfadeImage from 'react-crossfade-image';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import 'react-calendar/dist/Calendar.css';
import BlockBackground from '../components/BlockBackground';
import { loadCalendarEvents } from '../util/common';
import newsItems from '../res/data/news.json';
import NewsItem from '../components/NewsItem';
import { Spinner } from 'react-bootstrap';
const images = require.context("../res/images/general/");
const imageCount = 7;
const msPerImage = 3000;

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            event: null,
            currentImage: 0
        };
    }

    componentDidMount = () => {
        this.loadNextEvent();
        setTimeout(this.nextImage, msPerImage);
        [".news-title", ".platform-title", ".upcoming-event"].forEach(className => {
            gsap.from(className, {
                duration: 0.5,
                opacity: 0,
                x: -150,
                stagger: { amount: 0.5 },
                scrollTrigger: {
                    trigger: className,
                    toggleActions: "restart reset restart reset"
                }
            });
        });
    }

    async loadNextEvent() {
        const events = await loadCalendarEvents();
        this.setState({ event: events[0] });
    }

    nextImage = () => {
        this.setState({
            currentImage: (this.state.currentImage + 1) % imageCount
        }, () => {
            setTimeout(this.nextImage, msPerImage);
        });
    }

    render() {
        return (
            <div>
                <div className="homepage">
                    <BlockBackground/>
                    <div className="image_section">
                        <div className="images">
                            <CrossfadeImage
                                duration={500}
                                src={images(`./${this.state.currentImage}.jpg`)}/>
                        </div>
                        <div className="quote">
                            <h2>
                                <div className="line">
                                    <span>A THREAT TO <b>JUSTICE</b> ANYWHERE</span>
                                </div>
                                <div className="line">
                                    <span>IS A THREAT TO <b>JUSTICE</b> EVERYWHERE</span>
                                </div>
                            </h2>
                        </div>
                    </div>
                    <a href="/join">
                        <h1 className="join-button">
                            Join Us Today!
                        </h1>
                    </a>
                    <a href="/calendar">
                        <div className="upcoming-event">
                            <h1 className="upcoming-event-title">
                                Our Next Upcoming Event
                            </h1>
                            <h1 className="event-title">
                                { this.state.event ? this.state.event.title : <Spinner animation="grow" variant="primary"/> }
                            </h1>
                            <h2 className="event-date">
                                { this.state.event ?
                                    new Date(this.state.event.start).toLocaleDateString() + ", " +
                                    new Date(this.state.event.start).toLocaleTimeString() :
                                    null
                                }
                            </h2>
                        </div>
                    </a>
                    <div className="summaries">
                        <div className="news">
                            <a href="/news" className="news-title">
                                <h1>
                                    View All News
                                </h1>
                            </a>
                            <div className="news-items">
                                <NewsItem item={newsItems[0]}/>
                                <NewsItem item={newsItems[1]}/>
                                <NewsItem item={newsItems[2]}/>
                                <NewsItem item={newsItems[3]}/>
                            </div>
                        </div>
                        <div className="platform">
                            <a href="/issues" className="platform-title">
                                <h1>
                                    A Platform For <b>Justice</b>?
                                </h1>
                            </a>
                            <a href="/issues" className="platform-title">
                                <h1>
                                    Read More
                                </h1>
                            </a>
                            <div className="issue-items">
                                {
                                    ["Green New Deal", "PILOTs", "Guaranteed Health Care", "Housing For All", "Criminal Justice", "Defunding Philadelphia Police"]
                                    .map(title => {
                                        return (
                                            <a href="/issues">
                                                <h3 className="issue-title">{title}</h3>
                                            </a>
                                            
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="twitter">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="pennjusticedems"
                                options={{height: 600}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;

/*

                    <Row>
                        <Col sm={8}>
                            <img width="100%" src={images(`./${this.state.currentImage}.jpg`)} alt="Homepage"/>
                        </Col>
                        <Col>
                            <h2>
                                Here's our motto
                            </h2>
                            <hr/>
                            <div>
                                Check out our upcoming events!
                            </div>
                            <hr/>
                            <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="pennjusticedems"
                                    options={{height: 600}}
                                />
                        </Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col className="events_scroll">
                            <div style={{textAlign: "center"}}>Upcoming Events</div>
                            {
                                this.state.events ? 
                                this.loadEvents().reverse() :
                                <div>
                                    <Spinner animation="border" />
                                </div>
                            }
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>

*/