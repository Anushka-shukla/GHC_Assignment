
const { DataTypes } = require('sequelize');
const ghcDb = require('../database');


const event = ghcDb.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    identifier: DataTypes.INTEGER,
    event: DataTypes.TEXT,
    status: DataTypes.TEXT,
});


  module.exports = event;