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
                                New York State Route 175 (NY 175) is an east–west state highway in Onondaga County, New York, in the United States. The 15.46-mile (24.88 km) route begins at an intersection with U.S. Route 20 (US 20) east of the village of Skaneateles and passes through the village of Marcellus before ending at a junction with US 11 in Syracuse. The highway was designated in the 1930 renumbering of state highways in New York.
                            </p>
                            <div className="title">
                                About Us
                            </div>
                            <p className="mission-text">
                                New York State Route 175 (NY 175) is an east–west state highway in Onondaga County, New York, in the United States. The 15.46-mile (24.88 km) route begins at an intersection with U.S. Route 20 (US 20) east of the village of Skaneateles and passes through the village of Marcellus before ending at a junction with US 11 in Syracuse. The highway was designated in the 1930 renumbering of state highways in New York.
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
