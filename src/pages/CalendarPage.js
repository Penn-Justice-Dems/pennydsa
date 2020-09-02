import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import BlockBackground from '../components/BlockBackground';
import { loadCalendarEvents } from '../util/common';
import moment from 'moment';

const localizer = momentLocalizer(moment);

class CalendarPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            showPopup: true,
            selectedEvent: null
        };
    }

    componentDidMount() {
        this.loadCalendarEvents();
    }

    async loadCalendarEvents() {
        const events = await loadCalendarEvents();
        console.log(events);
        this.setState({ events });
    }

    onSelectEvent = (event) => {
        this.setState({
            showPopup: true,
            selectedEvent: event
        });
    }

    renderPopup() {
        let event = this.state.selectedEvent;
        if (!event) return null;
        let startDate = new Date(event.start);
        let endDate = new Date(event.end);
        let start = `${startDate.toLocaleTimeString()} on ${startDate.toLocaleDateString()}`;
        let end = `${endDate.toLocaleTimeString()} on ${endDate.toLocaleDateString()}`;
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.showPopup}
                onHide={() => this.setState({ showPopup: false })}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        { event.title }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> { event.description } </p>
                    <hr/>
                    <p> <b>Location:</b> { event.location } </p>
                    <p> Starts at { start } </p>
                    <p> Ends at { end } </p>
                </Modal.Body>
            </Modal>
        );
    }

    render() {
        return (
            <>
                <BlockBackground/>
                <div className="calendar-main">
                    <Calendar
                        localizer={localizer}
                        events={this.state.events}
                        startAccessor="start"
                        endAccessor="end"
                        views={["month"]}
                        onSelectEvent={this.onSelectEvent}
                    />
                </div>
                { this.renderPopup() }
            </>
        )
    }
}

export default CalendarPage;
