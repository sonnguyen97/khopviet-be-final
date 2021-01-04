const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    first_name: { type: Sequelize.STRING },
    last_name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    role: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = User;