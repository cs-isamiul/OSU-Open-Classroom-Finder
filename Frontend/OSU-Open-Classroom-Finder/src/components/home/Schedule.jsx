import { useEffect, useState } from "react";
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import { pageHeightEm, maxHeightEm, minHeightEm, calculateItemPosition } from "../../helpers/calandarHelpers";

function Schedule({ date }) {//, states, setStates }) {
    //useContext and useCallback to update states.dayTimes
    let states = { dayTimes: {} };
    states.dayTimes[`start${date}`] = "12:00PM";
    states.dayTimes[`end${date}`] = "8:00PM";
    const room = "BE128";
    const roomStart = "2:00PM";
    const roomEnd = "5:00PM";
    const emPXSize = 20;

    const [gridWidth, setGridWidth] = useState(0);
    const [gridHeight, setGridHeight] = useState(0);

    useEffect(() => {
        const grid = document.getElementById("schedule");
        if (grid) {
            setGridWidth(grid.offsetWidth);
            setGridHeight((grid.offsetHeight) - (minHeightEm * emPXSize));
        }
    }, []);

    return <>
        <div id="schedule" style={{ outlineStyle: "solid", height: `${pageHeightEm + minHeightEm}em` }}>
            {/* Draw block around valid times */}
            <Stage width={gridWidth} height={gridHeight}>
                <Layer>
                    <Rect
                        x={0}
                        y={(calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomStart)) * emPXSize}
                        width={gridWidth}
                        height={(calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomEnd) - (calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomStart)) + 2) * emPXSize}
                        fill="green"
                    />
                </Layer>
            </Stage>

            {/* Draw a given day with start time at top, end time at bottom */}
            {/* Start time selected */}
            <div style={{ position: "absolute", top: 0 }}>
                {date} <br />
                Start Range: {states.dayTimes[`start${date}`]}
            </div>

            {/* Rooms for a given day */}
            <div style={{ position: "absolute", top: `${calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomStart)}em` }}>
                {roomStart}
            </div>
            <div style={{ position: "absolute", top: `${calculateItemPosition(states.dayTimes[`start${date}`], states.dayTimes[`end${date}`], roomEnd)}em` }}>
                {roomEnd}
            </div>
            {/* End time selected */}
            <div style={{ position: "absolute", top: `${pageHeightEm}em` }}>
                End Range: {states.dayTimes[`end${date}`]}
            </div>
        </div>
    </>
}

export default Schedule;