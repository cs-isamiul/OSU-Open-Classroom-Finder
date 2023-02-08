function Forms() {
    {/* Pretend this imports rooms */ }
    const rooms = Array.from({ length: 14 }, (_, index) => index + 100);
    //const rooms = [120, 122, 128, 133, 160, 270, 310, 330, 356, 455, 456, 457];
    //const rooms = []

    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return <>
        <form>
            {/* Building */}
            <label htmlFor="building">Building</label>
            <select id="building" required>
                <option value disabled selected>Select a building…</option>
                <option value="BE">Baker Systems Engineering</option>
                <option value="DL">Dreese Laboratories</option>
                <option value="JR">Journalism Building</option>
            </select>

            {/* Room Numbers */}
            <label htmlFor="room">Room Number</label>
            {/* If building selected, then show options */}
            {rooms.length > 0 ?
                <fieldset id="room" className="gridColumn">
                    {rooms.map((element) => (
                        <label className="pad1" htmlFor={`room${element}`}>
                            <input type="checkbox" id={`room${element}`} name="room" />
                            {element}
                        </label>
                    ))}
                </fieldset>

                // else
                : <input type="text" placeholder="Select a building" disabled></input>
            }

            {/* Week of */}
            <label htmlFor="date">Start Week
                <input defaultValue={(new Date().toISOString()).split('T')[0]} type="date" id="date" name="date" />
                <small>Sunday is considered the first of the week<br />By default it selects this week</small>
            </label>

            {/* Time for each day */}

            {dayNames.map((day) => (
                <label htmlFor={day}>{day}
                <div className="grid" id={day}>
                    <label for={`start${day}`}>Start
                        <input type="time" id={`start${day}`} name="time" />
                    </label>
                    <label for={`end${day}`}>End
                        <input type="time" id={`end${day}`} name="time" />
                    </label>
                </div>
                </label>
            ))}

            {/* <!-- Submit Button --> */}
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Forms;