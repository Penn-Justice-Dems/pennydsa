import React, { Component } from 'react'
// import Calendar from 'react-calendar'
import CrossfadeImage from 'react-crossfade-image';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import 'react-calendar/dist/Calendar.css';
import BlockBackground from '../components/BlockBackground';
import newsItems from '../res/data/news.json';
import NewsItem from '../components/NewsItem';
// import CalendarEvent from '../components/CalendarEvent';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { loadCalendarEvents } from '../util/Common';
// import newsItems from '../res/data/news.json';
const images = require.context("../res/images/general/");
const imageCount = 7;
const msPerImage = 3000;

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            events: null,
            currentImage: 0
        };
    }

    componentDidMount = () => {
        // this.loadCalendar();
        setTimeout(this.nextImage, msPerImage);
        
    }

    // async loadCalendar() {
    //     const events = await loadCalendarEvents();
    //     this.setState({ events });
    // }

    nextImage = () => {
        this.setState({
            currentImage: (this.state.currentImage + 1) % imageCount
        }, () => {
            setTimeout(this.nextImage, msPerImage);
        });
    }

    loadEvents() {
        // return this.state.events.map(event => {
        //     console.log(event)
        //     return <CalendarEvent calendarEvent={event}/>
        // });
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
                    <div className="summaries">
                        <div className="news">
                            <a href="/news">
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
                            <a href="/issues">
                                <h1>
                                    Read More About Our Platform
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