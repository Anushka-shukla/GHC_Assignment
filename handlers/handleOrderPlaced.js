const controller = require('../controllers/eventController');
const schedule = require('node-schedule');

async function handleOrderPlaced(data){
    console.log("order placed data: ", data);
   
    const newData = {
        id: data.id,
   
    };
    try {
        let newOrderData = await controller.findOne(newData);
        console.log("newOrderData::", newOrderData.id);
        var cancelEventTrigger = schedule.scheduledJobs[newOrderData.id];
        cancelEventTrigger.cancel();
        console.log("event cancelled::")
        return;
        
    } catch (error) {
        return error;
        
    }

    
}

module.exports = handleOrderPlaced;