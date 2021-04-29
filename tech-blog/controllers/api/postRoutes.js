const router = require('express').Router();
const { Posts, Users, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post("/comment", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/post", withAuth , async (req, res)=> {
    try {
        const newPost = await Posts.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    }catch (err){
        res.status(200).json(err);
    }
});

router.put("/updatePost/:id", withAuth, async (req, res)=>{
    try{
        const postData = await Posts.update(
            {
                post_title: req.body.post_title,
                post_body: req.body.post_body
            },
            {
                where: {
                    id: req.body.id,
                },
            }
        )
        if (!postData) {
            res.status(404).json({ message: 'Post not found.' });
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

router.delete('/deletePost/:id', withAuth, async (req, res) => {
    try {
        const postData = await Posts.destroy({
            where: {
                id: req.body.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found.' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

  module.exports = router;