import { useState, useEffect } from "react";
import { handleRoom, handleSubmit, handleStartWeek, handleDayTimes, handleOptions } from "./handlers/formHandlers";

function Forms() {
    {/* Pretend this imports rooms */ }
    const rooms = Array.from({ length: 14 }, (_, index) => index + 100);
    //const rooms = [120, 122, 128, 133, 160, 270, 310, 330, 356, 455, 456, 457];
    //const rooms = []

    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState([]);
    const [startWeek, setStartWeek] = useState((new Date().toISOString()).split('T')[0]);
    const [dayTimes, setDayTimes] = useState({});
    const[options, setOptions] = useState({});

    const states = { building, room, startWeek, dayTimes, options };
    const setStates = { setBuilding, setRoom, setStartWeek, setDayTimes, setOptions };

    //initialize start week
    useEffect(() =>{
        let date = {target:{value:startWeek}};
        handleStartWeek(date, setStates);
    },[]);

    return <>
        <form onSubmit={(event) => { handleSubmit(event, states, setStates) }}>
            {/* Building */}
            <label htmlFor="building">Building</label>
            <select id="building" required onChange={(event) => { setBuilding(event.target.value) }}>
                <option value disabled selected>Select a building…</option>
                <option value="BE">Baker Systems Engineering</option>
                <option value="DL">Dreese Laboratories</option>
                <option value="JR">Journalism Building</option>
            </select>

            {/* Room Numbers */}
            <label htmlFor="room">Room Number</label>
            {/* If building selected, then show options */}
            {rooms.length > 0 ?
                <fieldset id="room" className="gridColumn" onChange={(event) => { handleRoom(event, states, setStates) }}>
                    {rooms.map((element) => (
                        <label className="pad1" htmlFor={`room${element}`}>
                            <input type="checkbox" id={element} name="room" />
                            {element}
                        </label>
                    ))}
                </fieldset>

                // else
                : <input type="text" placeholder="Select a building" disabled></input>
            }

            {/* Start week */}
            <label htmlFor="date" onChange={(event) => { handleStartWeek(event, setStates) }}>Start Week
                <input value={startWeek} type="date" id="date" name="date" />
                <small>Sunday is considered the first of the week<br />By default it selects the current week</small>
            </label>

            {/* Time for each day */}

            {dayNames.map((day) => (
                <label htmlFor={day}>{day}
                    <div className="grid" id={day}>
                        <label htmlFor={`start${day}`}>Start
                            <input type="time" id={`start${day}`} name="time" 
                            onChange={(event) => {handleDayTimes(event, states, setStates, `start${day}`)}}/>
                        </label>
                        <label htmlFor={`end${day}`}>End
                            <input type="time" id={`end${day}`} name="time" 
                            onChange={(event) => {handleDayTimes(event, states, setStates, `end${day}`)}}/>
                        </label>
                    </div>
                </label>
            ))}

            {/* Options */}
            <h3>Options</h3>
            <div className="grid">
                <label htmlFor="openBefore">Show rooms open x minutes after selected start time</label>
                <input id="openBefore" type="number" defaultValue={0} min={0} max={59} 
                onChange={(event) => {handleOptions(event, states, setStates, "openBefore")}}/>
            </div>
            <div className="grid">
                <label htmlFor="closeBefore">Show rooms that close x minutes before selected end time</label>
                <input id="closeBefore" type="number" defaultValue={0} min={0} max={59} 
                onChange={(event) => {handleOptions(event, states, setStates, "closeBefore")}}/>
            </div>

            {/* <!-- Submit Button --> */}
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Forms;