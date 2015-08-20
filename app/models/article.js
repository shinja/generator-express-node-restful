// Example model

var restful = require( "node-restful" );
var mongoose = restful.mongoose;
Schema = mongoose.Schema;

var ArticleSchema = new Schema( {
    title: String,
    url: String,
    text: String
} );

ArticleSchema.virtual( "date" )
.get( function() {
    return this._id.getTimestamp();
} );

restful.model( "Article", ArticleSchema );
