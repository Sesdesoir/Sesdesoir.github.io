const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Comment, Posts, Users } = require('../models');
router.get('/', (req, res) => {

    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  
  });

  router.get('/login', (req, res) => {
    res.render('login', {
      logged_in: req.session.logged_in
    });
  });

  router.get('/sign-up', (req , res) =>{
    res.render('signUp', {
      logged_in: req.session.logged_in
    });
  });

  router.get('/posts', withAuth, async (req, res) => {
    try {
      const postData = await Posts.findAll({
        include: [
            { model: Users,
              attributes: { exclude: ['password']},
            
            },
            {model: Comment,
              include: [{model: Users,
                attributes: { exclude: ['password']}
                  }
                ]}
            ] 
      });
  
      const post = postData.map(data => data.get({ plain: true }));
      res.render('forum', {
        post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      console.log(`hit an error!`);
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/user', withAuth ,async (req , res)=>{
    try {
      const postData = await Users.findByPk(req.session.user_id, {
        attributes: { exclude: ['password', "email"]},
        include: [
            { model: Posts,
            include: [{model: Comment,
              include: [{model: Users,
                attributes: {exclude: ['password']}
              }]
            }]
          },
          {model: Comment,
          include: [{model: Posts,
            include: [{model: Comment}]}]}
            ] 
      });




      const user = postData.get({ plain: true });
      /*
      console.log(user);
      console.log("-----Comments-----");
      console.log(user.Comments);
      */
      res.render('userPage', {
        user,
        userName: req.session.userName,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      console.log(`hit an error!`);
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;