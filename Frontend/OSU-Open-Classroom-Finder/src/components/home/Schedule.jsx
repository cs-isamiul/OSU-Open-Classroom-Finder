import {pageHeightEm, maxHeightEm, minHeightEm, calculateItemPosition} from "../../helpers/calandarHelpers";

function Schedule({ date }) {//, states, setStates }) {
    //useContext and useCallback to update states.dayTimes
    let states = { dayTimes: {} };
    states.dayTimes[`start${date}`] = "10:00AM";
    states.dayTimes[`end${date}`] = "1:00PM";
    const room = "BE128";
    const roomStart = "11:00AM";
    const roomEnd = "12:30PM";

    calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomStart);
    
    return <>
        <div style={{ outlineStyle: "solid", height: `${pageHeightEm}em` }}>
            {/* Start time and day of the week */}
            <div>
                {date} <br />
                {states.dayTimes[`start${date}`]}
            </div>

            {/* Some room */}
            <div style={{position: "absolute", top: `${minHeightEm}em`}}>
                {room}
            </div>

            {/* End time selected */}
            <div style={{position: "absolute", top: `${maxHeightEm}em` }}>
                {states.dayTimes[`end${date}`]}
            </div>
        </div>
    </>
}

export default Schedule;