import React, { Component } from 'react'
import BlockBackground from '../components/BlockBackground'

export default class JoinPage extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <BlockBackground/>
                <iframe
                    // src="https://docs.google.com/forms/d/e/1FAIpQLSdhLXAW8bTWU6-lUhNLGdW8yfu4tR-RYzXyELhWWo_KhJU3Bw/viewform?embedded=true"
                    src="https://upenn.us4.list-manage.com/subscribe?u=fac744dc6ce703993ec13a691&id=9cb75db78e"
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
