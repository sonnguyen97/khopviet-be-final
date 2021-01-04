const Sequelize = require("sequelize");
const db = require("../db");

const Image = db.define("image", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    url: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Image;