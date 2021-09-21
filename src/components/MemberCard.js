import React, { Component } from 'react'
const images = require.context("../res/images/board/");

class MemberCard extends Component {
    render() {
        const member = this.props.member;
        return (
            <div className="member-card">
                <img className="image" src={images(`./${member.image}`)} alt={"Penn Justice Dems: "+ member.name}/>
                <h1 className="name"> { member.name } </h1>
                {/* <h1 className="pronouns"> { member.pronouns } </h1> */}
                <h1 className="position"> { member.position } </h1>
            </div>
        )
    }
}

export default MemberCard;
