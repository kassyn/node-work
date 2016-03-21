jQuery(function() {
	//set route in application
	MONKEY.dispatcher(
		  MONKEY.Application
		, MONKEY.vars.body.data( 'route' )
	);
});
