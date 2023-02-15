import { useEffect } from "react";

function Schedule({ date, states, setStates }) {

    useEffect(() => {
        console.log(states);
    }, [states])

    return <>
        {date}
        {states.dayTimes[`start${date}`]}
    </>
}

export default Schedule;