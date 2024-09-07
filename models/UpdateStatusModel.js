
const { DataTypes } = require('sequelize');
const ghcDb = require('../database');
const Event = require('../models/EventModel');

const EventStatus = ghcDb.define('EventStatus', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      jobId: {
        type: DataTypes.INTEGER, 
      },
      message: DataTypes.STRING,
      messageTimeStamp: DataTypes.TIME,


});
Event.hasMany(EventStatus, { foreignKey: 'jobId' });
EventStatus.belongsTo(Event, { foreignKey: 'jobId' });

module.exports = EventStatus;
