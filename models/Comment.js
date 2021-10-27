const {  Model, DataTypes } = require('sequelize');
const sequelize = require('../../mvc-blog_type/config/connection');

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
