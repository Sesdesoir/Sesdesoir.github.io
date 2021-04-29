const router = require('express').Router();
const { Posts, Users, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.put("/updateComment/:id", withAuth, async (req, res)=>{
    try{
        const postData = await Comment.update(
            {
                comment_body: req.body.comment_body
            },
            {
                where: {
                    id: req.body.id,
                },
            }
        )
        if (!postData) {
            res.status(404).json({ message: 'Comment not found.' });
            return;
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

router.delete('/deleteComment/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.body.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found.' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;