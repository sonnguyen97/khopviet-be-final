const Sequelize = require('sequelize');
module.exports = new Sequelize('khopviet', 'manager', 'Zaq@123456', {
    host: '34.126.105.244',
    dialect: 'mysql',
    port: 3306,
    timestamps: false,
    // insecureAuth: true,
    // dialectOptions: { options: { encrypt: true } },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});