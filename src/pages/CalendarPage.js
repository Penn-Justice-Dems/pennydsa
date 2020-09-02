import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { loadCalendarEvents } from '../util/common';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

class CalendarPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
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

    render() {
        return (
            <div style={{width: "50%", margin: "auto", height: 700}}>
                <Calendar
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    views={["month"]}
                />
            </div>
        )
    }
}

export default CalendarPage;
