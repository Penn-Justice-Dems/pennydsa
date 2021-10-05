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
                                About Us
                            </div>
                            <p className="mission-text">
                                Formerly known as <b>Penn Students for Bernie</b>, Penn Justice Democrats serves as an independent left-wing student group with the mission of electing leftist candidates at the local, state, and national level, as well as serving to promote progressive/leftist causes on campus and in Philadelphia. Though we are not affiliated with the National <a href="https://justicedemocrats.com/" target="_blank" rel="noopener noreferrer">Justice Democrats</a> organization, we were inspired by their success at recruiting and electing progressive leaders whom we hope will be committed to fighting for Medicare for All, Housing for All, College for All, Justice for All, and many other leftist policies.
                                <br/> <br/>
                                <b>Activities and Mission</b>
                                <br/> <br/>
                                Penn Justice Democrats stands for <b>social, racial, economic, and environmental justice</b>, and we support policies, campaigns, candidates, and initiatives which will bring us closer to our goal of creating a more just world. Thus, we are fighting for justice not only nationally but also at Penn, in the Philadelphia community, and across the globe. We offer leftists/progressives a place to engage in both electoral and non-electoral organizing, outreach, and activism, divorced from the pursuit of corporate pre-professionalism that is ubiquitous on Penn's campus. Possible activities this semester include phone banking, canvassing, protests, political discussions, monthly meetings, speaker events with notable activists and political leaders, and plenty of social events. We welcome everyone on the left-wing spectrum, including those who prefer to organize for change outside of electoralism. 
                                <br/><br/>
                                <b>Club Structure</b>
                                <br/><br/>
                                We do not have a club President or Executive Director(s). Instead, our Executive Board consists of eight members who have their own respective responsibilities in Outreach, Communications, Creative Design, Finance, Media, Internal Affairs, Organizing, and Social Events. Members not on the Executive Board are <b>highly encouraged</b> to apply for a leadership position on our Content (social media, newsletter, creative design, etc.) or Engagement (event logistics, club retention, local and national outreach, etc.) teams. <b>The acceptance rate is 100% for these positions.</b>
                                <br/><br/>
                                If you want to learn more about us, please fill out the form to join our listserv or reach out to us at <b>pennjusticedems@gmail.com</b>.
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
