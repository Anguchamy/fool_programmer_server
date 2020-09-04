const express = require('express');
const router = express.Router();
const Post = require('../../model/post/postSchema');


router.get('/all',async(req,res) => {
  try{
    const allPost = await Post.find();
    res.status(200).json(allPost);
  } catch(err) {
    console.log(err);
    res.status(400).json({message:"Internal server Error"});
  }
});

router.post('/addpost', async(req,res) => {
  console.log(req.body);
  const post = new Post({
      username: req.body.username,
      title: req.body.title,
      content: req.body.content
  });

  await post.save()
      .then(data => {
          res.status(200).json(data);
      }) .catch(err => {
          res.status(400).json({message: err});
      });
});

module.exports = router;
