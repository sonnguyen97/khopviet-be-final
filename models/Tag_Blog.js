const Sequelize = require("sequelize");
const db = require("../db");

const Tag_Blog = db.define("tag_blog", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    blog_id: { type: Sequelize.INTEGER },
    tag_id: { type: Sequelize.INTEGER }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Tag_Blog;