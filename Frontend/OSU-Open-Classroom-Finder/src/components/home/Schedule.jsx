import { useEffect } from "react";
import {pageHeightEm, maxHeightEm, minHeightEm, calculateItemPosition} from "../../helpers/calandarHelpers";

function Schedule({ date }) {//, states, setStates }) {
    //useContext and useCallback to update states.dayTimes
    let states = { dayTimes: {} };
    states.dayTimes[`start${date}`] = "12:00PM";
    states.dayTimes[`end${date}`] = "8:00PM";
    const room = "BE128";
    const roomStart = "12:00PM";
    const roomEnd = "3:30PM";

    // useEffect(() => {
    //     calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomStart)
    //     //console.log("testing");
    // },[]);
    
    return <>
        <div style={{ outlineStyle: "solid", height: `${pageHeightEm+minHeightEm}em` }}>
            {/* Start time and day of the week */}
            <div>
                {date} <br />
                {states.dayTimes[`start${date}`]}
            </div>

            {/* Some room */}
            <div style={{position: "absolute", top: `${calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomStart)}em`}}>
                {room}
            </div>

            {/* End time selected */}
            <div style={{position: "absolute", top: `${pageHeightEm}em` }}>
                {states.dayTimes[`end${date}`]}
            </div>
        </div>
    </>
}

export default Schedule;