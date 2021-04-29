const sequelize = require('../config/connection');

const UsersData = require('./UsersData.json');
const PostsData = require('./PostsData.json');
const CommentData = require('./CommentData.json');
const {Users, Posts , Comment} = require('../models');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });

        await Users.bulkCreate(UsersData, {
            individualHooks: true,
            returning: true,
        });

        await Posts.bulkCreate(PostsData);
        await Comment.bulkCreate(CommentData);

    } catch (error) {

    }
    process.exit(0);
}

seedAll();