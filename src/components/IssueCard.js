import React, { Component } from 'react'
const images = require.context("../res/images/issues/");

class IssueCard extends Component {
    render() {
        const issue = this.props.issue;
        return (
            <div className="issue-card">
                <div className="icon">
                    <img src={images(`./${issue.icon}`)} alt="PJD Issue Icon"/>
                </div>
                <div className="text">
                    <h1>{ issue.title }</h1>
                    <ul>
                        {
                            issue.content.map(p => <li><p>{ p }</p></li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default IssueCard;
