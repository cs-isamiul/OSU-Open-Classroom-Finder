
const pageHeightEm = 35;
const maxHeightEm = pageHeightEm-3;
const minHeightEm = 3;

const calculateItemPosition = (startTime, endTime, targetTime) => {
    const totalTime = getTimeDiff(startTime, endTime);
    const targetDiff = getTimeDiff(startTime, targetTime);
    return (targetDiff/totalTime)+minHeightEm;
}

//Get diff between time2 and time1, ie time2-time1
const getTimeDiff = (time1, time2) => {
    let h1 = Number(time1.split(':')[0]);
    let h2 = Number(time2.split(':')[0]);
    h1 = time1.includes("PM") && h1 != 12 ? h1+12 : h1;
    h2 = time2.includes("PM") && h2 != 12 ? h2+12 : h2;
    h1 = time1.includes("AM") && h1 == 12 ? 0 : h1;
    h2 = time2.includes("AM") && h2 == 12 ? 0 : h2;

    let m1 = Number(time1.split(':')[1].slice(0,-2))/60;
    let m2 = Number(time2.split(':')[1].slice(0,-2))/60;

    return (h2+m1)-(h1+m2);
}

export {pageHeightEm, maxHeightEm, minHeightEm, calculateItemPosition}; 