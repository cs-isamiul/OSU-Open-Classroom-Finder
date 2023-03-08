import { GETBuildingRoom } from "../axiosCalls";

const handleSubmit = (event, states, setStates) => {
    event.preventDefault();
    console.log(states);
    //do api call
};

const handleBuilding = (event, states, setStates) => {
    const selected = event.target.value;
    setStates.setBuilding(selected);
    return GETBuildingRoom(selected);
};

const handleRoom = (event, states, setStates) => {
    //Make a copy of room list
    let copy = [...states.room];
    const newRoom = event.target.id;

    //if room isn't in list then add it, else remove it
    if(copy.indexOf(newRoom) == -1){
        copy.push(newRoom);
    } else {
        copy.splice(copy.indexOf(newRoom), 1);
    }

    setStates.setRoom(copy);
    //console.log(copy);
};

const handleStartWeek = (event, setStates) => {
    //Get date selected, find out day of the week
    let selected = event.target.value;
    const dayOfWeek = (new Date(Date.parse(selected)).getDay());

    //Subtract day of week by ms in a day to get sunday
    selected = Date.parse(selected)-(((dayOfWeek+1)%7)*86400000);
    selected = (new Date(selected).toISOString()).split('T')[0];

    //Set day
    setStates.setStartWeek(selected);
}

const handleDayTimes = (event, states, setStates, element) => {
    //Get time elements
    let h = event.target.value.split(':')[0];
    const m = event.target.value.split(':')[1];
    const suffix = h >= 12 ? "PM": "AM";
    h = (12+h)%12;
    h = h == 0 ? 12: h;
    
    //Set time element
    let copy = states.dayTimes;
    copy[element] = `${h}:${m}${suffix}`
    setStates.setDayTimes = copy;
}

const handleOptions = (event, states, setStates, element) => {
    let copy = states.options;
    copy[element] = event.target.value;
    setStates.setOptions = copy;
}

export {handleSubmit, handleBuilding, handleRoom, handleStartWeek, handleDayTimes, handleOptions};