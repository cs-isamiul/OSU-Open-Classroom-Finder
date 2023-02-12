const handleSubmit = (event, states, setStates) => {
    event.preventDefault();
    console.log(states.building, states.room);
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

export {handleSubmit, handleRoom, handleStartWeek};