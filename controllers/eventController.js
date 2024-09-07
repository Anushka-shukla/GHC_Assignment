const Event = require("../models/EventModel");
const { Op } = require("sequelize");
const controller = {};


// Get All data in user Table
controller.findOne = async function (data) {
    try {
        const event = await Event.findOne({ where: { identifier:  data.id} });
        if (event === null) {
          console.log('Not found!');
        } else {
          console.log(event instanceof Event); // true
          return event;
        }
        
    } catch (error) {
        return error;
    }
};

controller.createNew = async function (eventData) {
    try {
        const newEventData = await Event.create({

            identifier: eventData.identifier,
            event: eventData.event,
            status: eventData.status,
        })
        return newEventData;

    } catch (error) {
        return error;

    }
};

module.exports = controller;