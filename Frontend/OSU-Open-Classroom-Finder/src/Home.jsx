import { useState, useEffect } from "react";
import Forms from "./components/home/Forms";
import Schedule from "./components/home/Schedule";

function Home() {
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    const [building, setBuilding] = useState('');
    const [room, setRoom] = useState([]);
    const [startWeek, setStartWeek] = useState((new Date().toISOString()).split('T')[0]);
    const [dayTimes, setDayTimes] = useState({});
    const[options, setOptions] = useState({});

    const states = { building, room, startWeek, dayTimes, options };
    const setStates = { setBuilding, setRoom, setStartWeek, setDayTimes, setOptions };

    return <>
        <div className="grid gridColumnsMinGap">
            <Forms states={states} setStates={setStates} dayNames={dayNames}/>
            <Schedule date={'Monday'} states={states} setStates={setStates}/>
        </div>
    </>
}

export default Home;