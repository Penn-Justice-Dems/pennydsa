import React, { Component } from 'react'
// import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import BlockBackground from '../components/BlockBackground';
// import CalendarEvent from '../components/CalendarEvent';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import { loadCalendarEvents } from '../util/Common';
// import newsItems from '../res/data/news.json';
const images = require.context("../res/images/homepage/");

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
        this.nextImage();
    }

    // async loadCalendar() {
    //     const events = await loadCalendarEvents();
    //     this.setState({ events });
    // }

    nextImage = () => {
        // this.setState({
        //     currentImage: (this.state.currentImage + 1) % 5
        // }, () => {
        //     setTimeout(this.nextImage, 3000);
        // });
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
                            <img src={images("./0.jpg")} alt="Penn Justice Dems Slideshow" />
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
                    <div style={{width: "100%", backgroundColor: "black", marginTop: "500px"}}>more text</div>
                    {/* <Row>
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
                    </Row> */}
                </div>
            </div>
        )
    }
}

export default HomePage;
