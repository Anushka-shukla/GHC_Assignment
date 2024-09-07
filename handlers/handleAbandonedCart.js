const controller = require('../controllers/eventController');
const { EVENT_STATUS } = require('../constants/eventStatus');
const schedule = require('node-schedule');
const scheduleJobs = require('../scheduler');

async function handleAbandonedCart(data, event) {

    let sendMessageTime = [];

    const newData = {
        identifier: data.id,
        event: event,
        status: EVENT_STATUS.pending,
    };

    let newTableData = await controller.createNew(newData);

    let checkoutAbandonmentTimeStr = (newTableData.createdAt);
    let checkoutAbandonmentTime = new Date(checkoutAbandonmentTimeStr);
    console.log("T = Time of checkout abandonment --", checkoutAbandonmentTime);

    const intervals = [
        { time: 1 * 10 * 1000, label: '10 sec later' },
        { time: 1 * 20 * 1000, label: '20 sec later' },
        { time: 1 * 30 * 1000, label: '30 sec later' },
        { time: 1 * 60 * 1000, label: '1 minute later' },
        { time: 30 * 60 * 1000, label: `30 minutes later` },
        { time: 24 * 60 * 60 * 1000, label: `1 day later` },
        { time: 3 * 24 * 60 * 60 * 1000, label: `3 days later` }
    ];

    sendMessageTime =
        intervals.map(timeInterval => {

            return { time: new Date(timeInterval.time + (checkoutAbandonmentTime).getTime()), label: timeInterval.label };

        });

    // calling function
    try {

        scheduleJobs(newTableData.id, sendMessageTime);
        return;

    } catch (error) {
        return error

    }

}

module.exports = handleAbandonedCart;