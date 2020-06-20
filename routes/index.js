const path = require("path");
const router = require("express").Router();
const cors = require("cors");
const axios = require("axios");

const API_KEY = "ADD KEY HERE";

router.get("/api/allBlogPosts", cors(), async function (req, res) {
    const response = await axios.get(
        `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=${API_KEY}`
    );

    res.json(response.data);
});

router.get("/api/blog/:blog_id", cors(), async function (req, res) {
    const response = await axios.get(
        `https://api.hubapi.com/content/api/v2/blog-posts/${req.params.blog_id}?hapikey=${API_KEY}`
    );
});

// If no API routes are hit, send the React app or send a default message
router.use(function (req, res) {
    res.json({ message: "This route does not exist" });
    // res.sendFile(path.join(__dirname, "../client/index.html"));
});

module.exports = router;
