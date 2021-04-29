const Users = require('./Users');
const Posts = require('./Posts');
const Comment = require('./Comment');

Users.hasMany(Posts, {
    foreignKey: 'user_id',
});

Users.hasMany(Comment, {
    foreignKey: 'user_id',
});

Posts.belongsTo(Users, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Users, {
    foreignKey: 'user_id',
})

Posts.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Posts, {
    foreignKey: 'post_id',
});



module.exports = {Users, Posts, Comment};