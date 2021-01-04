const Sequelize = require("sequelize");
const db = require("../db");

const Comment = db.define("comment", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    relation_id: { type: Sequelize.INTEGER },
    author_id: { type: Sequelize.INTEGER },
    guest_id: { type: Sequelize.INTEGER },
    state: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Comment;