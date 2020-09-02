import React, { Component } from 'react'
import BlockBackground from '../components/BlockBackground'

export default class JoinPage extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <BlockBackground/>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdhLXAW8bTWU6-lUhNLGdW8yfu4tR-RYzXyELhWWo_KhJU3Bw/viewform?embedded=true"
                    width="640"
                    height="1700"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="Penn Justice Dems Join Form">
                        Loading…
                    </iframe>
            </div>
        )
    }
}
