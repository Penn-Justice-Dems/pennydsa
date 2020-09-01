import React, { Component } from 'react'

class BlockBackground extends Component {
    render() {
        return (
            <div className="block-background">
                <div className="block medium"></div>
                <div className="block dark-small"></div>
                <div className="block dark-large"></div>
                <div className="block medium"></div>
                <div className="block dark-large"></div>
            </div>
        )
    }
}

export default BlockBackground;
