
var express = require('express'),
router = express.Router(),
restful = require('node-restful');

module.exports = function (app) {
    
    var Article = restful.model('Article');
    Article.methods(['get', 'put', 'post', 'delete']);
    Article.register(router, '/article');
    app.use('/', router);
};
