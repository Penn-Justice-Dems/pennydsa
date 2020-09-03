import React, { Component } from 'react'
import gsap from 'gsap';
import members from '../res/data/members.json';
import MemberCard from '../components/MemberCard';
import BlockBackground from '../components/BlockBackground';
import { Row, Col } from 'react-bootstrap';

class AboutPage extends Component {

    componentDidUpdate() {
        for (let i = 0; i < members.length; i++) {
            gsap.from("#member-"+i, {
                duration: 0.5,
                opacity: 0,
                x: -50,
                scrollTrigger: {
                    trigger: "#member-"+i,
                    toggleActions: "restart reset restart reset"
                }
                
            });
        }
    }

    render() {
        return (
            <div className="about-page">
                <BlockBackground/>
                <div className="main">
                    <Row>
                        <Col lg={6}>
                            <div className="title">
                                Mission
                            </div>
                            <p className="mission-text">
                                We offer left wing progressives a place on Penn’s campus to engage in both electoral and non-electoral organizing, outreach and activism -- divorced from the primary pursuit of corporate pre-professionalism. 
                            </p>
                            <div className="title">
                                About Us
                            </div>
                            <p className="mission-text">
                                Formerly known as Penn Students for Bernie, Penn Justice Democrats serves as an independent progressive student group with the mission of electing left-wing candidates at the local, state, and national level, as well as serving to promote progressive causes on campus and in Philadelphia. We were inspired by the <a href="https://justicedemocrats.com/" target="_blank" rel="noopener noreferrer">National Justice Democrats</a> organization in their extraordinary success at recruiting the leaders of the next generation of politics--leaders like Alexandria Ocasio-Cortez and Jamaal Bowman, and leaders who are committed to a platform of Medicare for All, Housing for All, College for All, and Justice for All.
                                <br/> <br/>
                                Possible activities this semester include: phonebanking, bi-monthly meetings, debate watch parties, panel events with notable activists and political leaders, movie nights, happy hours, and more. Under normal circumstances, our events would also potentially include campaign canvassing (including traveling to different states!), large scale protests, and BYO's, among other projects and activities. 
                                <br/><br/>
                                Reach out to us at <b>pennjusticedems@gmail.com</b>.
                            </p>
                        </Col>
                        <Col>
                            <div className="title">
                                Meet Our Board Members
                            </div>
                            <div className="members">
                                { members.map((member, i) => <MemberCard member={member} key={i} id={`member-${i}`}/>) }
                            </div>
                        </Col>
                    </Row>
                    
                    
                </div>
            </div>
        )
    }
}

export default AboutPage;
