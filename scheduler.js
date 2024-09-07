const schedule = require("node-schedule");
const controller = require('./controllers/eventStatusController');

const scheduleJobs = (identifier ,intervals, index = 0) => {

    if(index >= intervals.length) return; 

   const nextRunTime = intervals[index].time;

   if (!nextRunTime) {
    throw new Error(`Invalid nextRunTime for task ${label}`);
}

    // Schedule the current job
    schedule.scheduleJob(String(identifier), nextRunTime, async() =>{

        const newEventStatusData = {
            jobId: identifier,
            message: "your cart items are waiting",
            messageTimeStamp: nextRunTime,
        };

    
        let newEventStatusTableData = await controller.createNew(newEventStatusData);

        console.log(`Running task: ${intervals[index].label} at ${new Date()}`);

    // Schedule the next job in the array, if any
    scheduleJobs(String(identifier),intervals, index + 1);

});
};

module.exports = scheduleJobs;