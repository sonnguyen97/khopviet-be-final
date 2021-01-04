const Sequelize = require("sequelize");
const db = require("../db");

const Blog_Image = db.define("blog_image", {
    id: { type: Sequelize.INTEGER, primarykey : true, autoIncrement: true },
    blog_id: { type: Sequelize.INTEGER },
    image_id: { type: Sequelize.INTEGER }
},
{
  timestamps: false,
  freezeTableName: true
});

module.exports = Blog_Image;