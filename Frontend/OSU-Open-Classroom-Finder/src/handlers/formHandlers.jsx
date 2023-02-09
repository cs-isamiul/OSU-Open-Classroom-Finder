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

export {handleSubmit, handleRoom};