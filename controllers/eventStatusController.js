const EventStatus = require("../models/UpdateStatusModel");
const { Op } = require("sequelize");
const controller = {};

controller.createNew = async function (eventStatusData) {
    try {
        const newEventStatusData = await EventStatus.create({

            jobId: eventStatusData.jobId,
            message: eventStatusData.message,
            messageTimeStamp: eventStatusData.messageTimeStamp,
        })
        return newEventStatusData;

    } catch (error) {
        return error;

    }
};

module.exports = controller;