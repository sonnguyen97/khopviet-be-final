const Sequelize = require("sequelize");
const db = require("../db");

const Guest = db.define("guest", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Guest;