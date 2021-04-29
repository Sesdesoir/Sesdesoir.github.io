const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init({
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
    post_title:{
      type: DataTypes.STRING
    },  
    post_body: {
        type: DataTypes.TEXT
    },
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Posts',
        }
    )

    module.exports = Posts;