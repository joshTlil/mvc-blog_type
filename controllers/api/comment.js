const router = require('express').Router();
const { Comment } = require('../../../../../14-MVC/02-Homework/models');
const withAuth = require('../../../../../14-MVC/02-Homework/utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;