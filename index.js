// code your solution here
function superbowlWin(array) {
    let football = array.find(record => record.result === "W");
    //return (football.year);
    if (football) {
        return (football.year) 
    } 
    else {
        return (undefined)
    }
}