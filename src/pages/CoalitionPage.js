import React, { Component } from 'react';
import gsap from 'gsap';
import { Row, Col } from 'react-bootstrap';
import BlockBackground from '../components/BlockBackground'
import groups from '../res/data/coalition.json';
import CoalitionCard from '../components/CoalitionCard';

class CoalitionPage extends Component {

    makeItems() {
        return groups.map((group, i) => {
            return (
                <CoalitionCard group={group} key={i}/>
            )
        });
    }

    componentDidMount = () => {
        gsap.from(".group-card", {
            duration: 0.5,
            opacity: 0,
            x: -150,
            stagger: { amount: 0.5 },
            scrollTrigger: {
                trigger: ".group-card",
                toggleActions: "restart reset restart reset"
            }
        });
    }

    render() {
        return (
            <div className="coalition-page">
                <BlockBackground/>
                <div className="main">
                    <h1 className="title">
                        Working with people?..
                    </h1>
                    <h1 className="title">
                        This is our coalition
                    </h1>
                    <Row>
                        <Col lg={5}>
                            <div className="coalition-summary">
                            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="cards">
                                {this.makeItems()}
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </div>
        )
    }
}

export default CoalitionPage;
