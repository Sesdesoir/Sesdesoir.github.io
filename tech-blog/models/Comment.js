const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
      },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
            references: {
                model: 'Posts',
                key: 'id'
            }
    },
    comment_body: {
        type: DataTypes.TEXT
    },
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',
        }
    )

    module.exports = Comment;