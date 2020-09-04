import {PreciseDate} from '@google-cloud/precise-date';

const calendarAPIKey = "AIzaSyCsnzwg0D52daWwsAquHZ9IctPBSL2gvL8";
const calendarID = "pennjusticedems@gmail.com";
const calendarURL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?`;
const formNameKey = "entry.795803210";
const formMessageKey = "entry.792572781";
const formEmailKey = "entry.2089231029";
const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5j0EQV_DcXf4yoGWCcBdY9rZjK9t02hl8m5QPimryDIdC9g/formResponse";

export const loadCalendarEventsFromNow = async () => {
    const minTime = new PreciseDate(new Date().getTime()).toISOString();
    return await loadCalendarEvents(minTime);
}

export const loadCalendarEvents = async (minTime) => {
    const params = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    let queryParams = `key=${calendarAPIKey}&orderBy=startTime&singleEvents=true`;
    if (minTime) queryParams += `&timeMin=${minTime}`;
    const response = await fetch(calendarURL + queryParams, params)
    const json = await response.json();
    let events = [];
    json.items.forEach(item => events.push({
        title: item.summary,
        location: item.location,
        description: item.description,
        start: item.start.dateTime,
        end: item.end.dateTime
    }));
    return events;
}

export const submitGoogleForm = async (name, email, message) => {
    const formData = new FormData();
    formData.append(formNameKey, name);
    formData.append(formEmailKey, email);
    formData.append(formMessageKey, message);
    const params = {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Accept": "*/*",
            "Content-Type": "multipart/form-data"
        },
        body: formData
    };
    try {
        const response = await fetch(formURL, params);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
    
    return {};
}
