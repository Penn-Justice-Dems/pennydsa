import React, { Component } from 'react'
import BlockBackground from '../components/BlockBackground';

class ContactPage extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <BlockBackground/>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdG_1NWe2AXcX6pBW1-17wIG-D6W5nKgF0TXgGrv_0yiMcabQ/viewform?embedded=true" width="640" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        )
    }
}

export default ContactPage;
