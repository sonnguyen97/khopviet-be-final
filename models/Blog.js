const Sequelize = require("sequelize");
const db = require("../db");

const Blog = db.define("blog", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    author_id: { type: Sequelize.INTEGER },
    category_id: { type: Sequelize.INTEGER },
    meta_title: { type: Sequelize.STRING },
    meta_description: { type: Sequelize.STRING },
    keyword: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Blog;