var express = require( 'express' );
var OAuth   = require( 'oauth' );
var util    = require( 'util' );
var path    = require( 'path' );
var query   = require( 'querystring' );
var app     = express();
var parser  = {
	cookie  : require( 'cookie-parser' ),
	body    : require( 'body-parser' ),
	session : require( 'express-session' ),
};

// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'jade' );
app.use( parser.body.json() );
app.use( parser.body.urlencoded({ extended: false }) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// set session setup
app.use( parser.session({
	secret            : '6ygasdddasbdhkTRwh765',
  	resave            : false,
  	saveUninitialized : true
}));

app.get( '/', function(req, res) {
	res.render( 'index', {
		'name': 'Accácio',
		'avatar_urls' : {
			'96' : 'http://1.gravatar.com/avatar/71f4ba6392f2db69382c8f08743e979f?s=96&d=mm&r=g'
		}
	});
});

app.listen( 3000, function() {
	console.log( 'listening on port 3000' );
});
