
var express = require('express'),
router = express.Router(),
restful = require('node-restful');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    var Article = restful.model('Article');
    Article.find(function (err, articles) {
        if (err) return next(err);
        res.render('index', {
            title: 'Generator-Express MVC',
            articles: articles
        });
    });
});
