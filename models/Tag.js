const Sequelize = require("sequelize");
const db = require("../db");

const Tag = db.define("tag", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    name: { type: Sequelize.STRING},
    meta_title: { type: Sequelize.STRING },
    meta_description: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Tag;