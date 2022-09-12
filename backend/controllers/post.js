const Post = require("../models/post");
const FeaturedPost = require("../models/featuredPost");

const FEATURED_POST_COUNT = 4;

// Adding and saving a featured post
const addToFeaturedPost = async (postId) => {
  const featuredPost = new FeaturedPost({ post: postId });
  await featuredPost.save();
  
  // The code below sorts the featuredPost in a desc. order so as to bring the latest featured post at the top.
  const featuredPosts = await FeaturedPost.find({}).sort({ createdAt: -1 });
  
  // In the below code, when a 5th f.p. is added the last/oldest one gets deleted.
  featuredPosts.forEach(async (post, index) => {
    if (index >= FEATURED_POST_COUNT)
      await FeaturedPost.findByIdAndDelete(post._id);
  });
};

// Creating a new post and saving it.
exports.createPost = async (req, res) => {
  const { title, meta, content, slug, author, tags, featured } = req.body;
  const {file} = req;
  const newPost = new Post({ title, meta, content, slug, author, tags });
  return console.log(file)
  // if (file) {

  // }

  await newPost.save();

  if (featured) await addToFeaturedPost(newPost._id);

  res.json(newPost);
};
