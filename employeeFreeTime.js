const employeeSchedule = [
    [[1, 3], [6, 7]],
    [[2, 4]],
    [[2, 5], [9, 12]]
];

function employeeFreeTime (schedule){
    let events = [];
    for(let employee of employeeSchedule){
        for(let interval of employee){
            events.push({start :interval[0], end: interval[1] })
        }
    }
    events.sort((a,b)=> a.start-b.start)

    let freeTime =[];
    let prevEnd =events[0].end

    for (let event of events){
        if(event.start > prevEnd){
            freeTime.push([prevEnd, event.start])
          
        } 
            prevEnd = Math.max(prevEnd, event.end)
        
    }
    return freeTime;
}

console.log(employeeFreeTime(employeeSchedule))