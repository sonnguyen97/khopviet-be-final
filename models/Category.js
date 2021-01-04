const Sequelize = require("sequelize");
const db = require("../db");

const Category = db.define("category", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    name: { type: Sequelize.STRING },
    priority: { type: Sequelize.STRING },
    meta_title: { type: Sequelize.STRING },
    meta_description: { type: Sequelize.STRING },
    keyword: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Category;