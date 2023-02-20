import {pageHeightEm, maxHeightEm, minHeightEm} from "../../helpers/calandarHelpers"

function Schedule({ date }) {//, states, setStates }) {
    //useContext and useCallback to update states.dayTimes
    let states = { dayTimes: {} };
    states.dayTimes[`start${date}`] = "10:00AM";
    states.dayTimes[`end${date}`] = "1:00PM";
    const room = "BE128";
    const roomStart = "11:00PM";
    const roomEnd = "12:30PM";

    return <>
        <div style={{ outlineStyle: "solid", height: `${pageHeightEm}` }}>
            {/* Start time and day of the week */}
            <div>
                {date} <br />
                {states.dayTimes[`start${date}`]}
            </div>

            {/* Some room */}
            <div style={{position: "absolute", top: `${minHeightEm}`}}>
                {room}
            </div>

            {/* End time selected */}
            <div style={{position: "absolute", top: `${maxHeightEm}` }}>
                {states.dayTimes[`end${date}`]}
            </div>
        </div>
    </>
}

export default Schedule;