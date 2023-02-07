function Forms() {
    return <>
        <form>
            {/* Building */}
            <label for="building">Building</label>
            <select id="building" required>
                <option value disabled selected>Select a building…</option>
                <option value="BE">Baker Systems Engineering</option>
                <option value="DL">Dreese Laboratories</option>
                <option value="JR">Journalism Building</option>
            </select>

            {/* Room Numbers */}
            <fieldset>
                <label for="room122"><input type="checkbox" id="room122" name="room" />122</label>
                <label for="room124"><input type="checkbox" id="room124" name="room" />124</label>
            </fieldset>

            {/* <!-- Submit Button --> */}
            <button type="submit">Submit</button>
        </form>
    </>
}

export default Forms;