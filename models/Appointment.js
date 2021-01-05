const Sequelize = require("sequelize");
const db = require("../db");

const Appointment = db.define("appointment", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category_id: { type: Sequelize.INTEGER },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    date_time: { type: Sequelize.DATE },
    phone_number: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING }
}, {
    timestamps: false,
    freezeTableName: true
});

module.exports = Appointment;