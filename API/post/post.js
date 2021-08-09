const express = require('express');
const router = express.Router();
const Post = require('../../model/post/postSchema');


//reterive all post.
router.get('/all',async(req,res) => {
  try{
    const allPost = await Post.find();
    res.status(200).json(allPost);
  } catch(err) {
    console.log(err);
    res.status(400).json({message:"Internal server Error"});
  }
});


// add post 
router.post('/addpost', async(req,res) => {
  const post = new Post({
      username: req.body.username,
      title: req.body.title,
      tags: req.body.tags,
      content: req.body.content
  });
  try {
    await post.save()
        .then(data => {
            res.status(200).json(data);
        }) .catch(err => {
            res.status(400).json({message: err});
        });
  } catch(err) {
    res.status(400).json({message: err});
  }
});


//  get Data by tags
router.get('/getpostbytag', async(req, res) => {
  try {
    const resbytag = await Post.find({tags:(req.query.tags)});
    res.status(200).json(resbytag);
  }catch(err) {
    res.status(400).json({message:err});
  }
});

module.exports = router;
