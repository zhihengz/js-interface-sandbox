Namespace ('com.ea2d', {
    sandbox : { 
	showLogin: function (){
	    $('#login').show();
	    $('#content').toggle();
	},
	showContent: function ( response ) {
	    $('#login').toggle();
	    $('#content').show();
	    $('#fb-uid').hide();
	    $('#fb-token').hide();
	    $('#fb-uid').append( response.session.uid );
	    $('#fb-token').append( response.session.access_token );
	}
    }
});
