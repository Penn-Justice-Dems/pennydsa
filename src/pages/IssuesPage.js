import React, { Component } from 'react';
import gsap from 'gsap';
import { Row, Col } from 'react-bootstrap';
import BlockBackground from '../components/BlockBackground';
import platform from '../res/data/platform.json';
import IssueCard from '../components/IssueCard';

class IssuesPage extends Component {

    constructor(props) {
        super(props);
    }

    makeIssueCards(category) {
        return platform[category].map((issue, i) => {
            const id = `issue-item-${category}-${i}`;
            return (<div key={id} id={id}><IssueCard issue={issue}/></div>)
        });
    }

    makeIssueSummaries(category) {
        return platform[category].map((issue, i) => {
            const id = `issue-summary-${category}-${i}`;
            const refId = `issue-item-${category}-${i}`;
            const onClick = () => {
                const ref = document.getElementById(refId);
                ref.scrollIntoView();
            };
            return (
                <div key={id} className="summary-title" onClick={onClick}>
                    { issue.summary_title }
                </div>
            )
        });
    }

    componentDidMount() {
        ["national_issues", "penn_issues"].forEach(category => {
            for (let i = 0; i < platform[category].length; i++) {
                const id = `issue-item-${category}-${i}`;
                gsap.from(`#${id}`, {
                    duration: 0.5,
                    opacity: 0,
                    x: -50,
                    scrollTrigger: {
                        trigger: `#${id}`,
                        toggleActions: "restart reset restart reset"
                    }
                });
            }
        });
    }

    render() {

        const nationalIssueCards = this.makeIssueCards("national_issues");
        const pennIssueCards = this.makeIssueCards("penn_issues");
        const nationalIssueSummaries = this.makeIssueSummaries("national_issues");
        const pennIssueSummaries = this.makeIssueSummaries("penn_issues");
        console.log(this.issueRefs);

        return (
            <div className="issues-page">
                <BlockBackground/>
                <div className="main">
                    <h1 className="title">
                        Policies you can believe in
                    </h1>
                    <h1 className="title">
                        Read about our platform
                    </h1>
                    <Row className="content">
                        <Col sm={3} className="sidebar">
                            <h1>Overview</h1>
                            { nationalIssueSummaries }
                            { pennIssueSummaries }
                        </Col>
                        <Col sm={9} className="policies">
                            <div className="policy-section">
                                <h1 className="subtitle">National Issues</h1>
                                {nationalIssueCards}
                            </div>
                            <div className="policy-section">
                                <h1 className="subtitle">Penn Issues</h1>
                                {pennIssueCards}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default IssuesPage;
