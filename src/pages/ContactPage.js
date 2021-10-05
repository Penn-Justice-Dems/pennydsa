import React, { Component } from 'react'
import BlockBackground from '../components/BlockBackground';

class ContactPage extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <BlockBackground/>
                <iframe
                    // src="https://docs.google.com/forms/d/e/1FAIpQLSdG_1NWe2AXcX6pBW1-17wIG-D6W5nKgF0TXgGrv_0yiMcabQ/viewform?embedded=true"
                    src="https://upenn.us4.list-manage.com/subscribe?u=fac744dc6ce703993ec13a691&id=9cb75db78e"
                    width="640"
                    height="950"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    title="Penn Justice Dems Contact Form">
                        Loading…
                    </iframe>
            </div>
        )
    }
}

export default ContactPage;
