const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Dashboard with user posts
router.get('/', withAuth, async (req, res) => {
    try {
        const userPosts = await Post.findAll({
            where: { userId: req.session.userId }
        });
        const posts = userPosts.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
    } catch (err) {
        res.status(500).json(err);
    }
});

// adding new post

router.post('/', withAuth, async (req, res) => {
    try {
        await Post.create({
            ...req.body,
            userId: req.session.userId
        });
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;