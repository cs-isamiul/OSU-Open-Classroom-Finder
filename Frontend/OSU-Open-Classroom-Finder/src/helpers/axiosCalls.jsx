import axios from "axios";
import * as room from "../../../../FakeData/classroom.json";

function GETBuildingRoom(id) {
    let rooms = [];
    for(var i in room[id]){
        rooms.push(i);
    }

    return rooms;
};

export {GETBuildingRoom};