Namespace ('com.ea2d', {
    sandbox : { 
	showLogin: function (){
	    $('#login').show();
	    $('#content').toggle();
	},
	showContent: function ( response ) {
	    $('#login').toggle();
	    $('#content').show();
	}
    }
});
