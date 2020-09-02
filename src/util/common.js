const calendarAPIKey = "AIzaSyCsnzwg0D52daWwsAquHZ9IctPBSL2gvL8";
const calendarID = "pennjusticedems@gmail.com";
const calendarURL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${calendarAPIKey}`;
const formNameKey = "entry.795803210";
const formMessageKey = "entry.792572781";
const formEmailKey = "entry.2089231029";
const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5j0EQV_DcXf4yoGWCcBdY9rZjK9t02hl8m5QPimryDIdC9g/formResponse";
const corsEscape = "https://cors-escape.herokuapp.com/";

export const loadCalendarEvents = async () => {
    const params = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };

    const response = await fetch(calendarURL, params)
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
