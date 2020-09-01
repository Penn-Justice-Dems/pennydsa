import React, { Component } from 'react';
const images = require.context("../res/images/coalition/");

class CoalitionCard extends Component {
    render() {
        const group = this.props.group;
        return (
            <div className="group-card">
                <img className="background-image" src={images(`./${group.image}`)}/>
                <div className="text">
                    <h1 className="title">{group.title}</h1>
                    <h1 className="content">{group.content}</h1>
                </div>
                
            </div>
        )
    }
}

export default CoalitionCard;
