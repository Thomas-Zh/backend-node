const Post = require('../models/post.model');

exports.post_create = function (req, res, next) {
    let post = new Post(
        {
            title: req.body.title,
            content: req.body.content
        }
    );

    post.save(function (err) {
        if (err) return next(err);
        res.send('Post Created successfully')
    })
};
exports.post_details = function (req, res, next) {
    Post.find({}, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};
exports.post_update = function(req, res, next){
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, post) {
        if (err) return next(err);
        res.send('Post udpated.');
    });
};
exports.post_delete = function(req, res, next){
    Post.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};