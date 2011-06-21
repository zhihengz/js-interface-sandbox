Namespace( 'com.ea2d.social', {
    facebook: {
	network: 'facebook',
	load: function() {
	    var e = document.createElement('script'); 
	    e.async = true;
	    e.src = document.location.protocol +
		'//connect.facebook.net/en_US/all.js';
	    document.getElementById('fb-root').appendChild(e);
	},
	init: function() {
	    FB.init({ appId: '219688324719973', 
		      status: true, 
		      cookie: true,
		      xfbml: true
		    });
	    FB.getLoginStatus( function(response){
		if (response.session) {
		    // user is logged in
		    com.ea2d.sandbox.showContent( response );
		} else {
		    // user is not logged in yet;
		    com.ea2d.sandbox.showLogin();
		}
	    }); 
	},
	post: function ( ) {
	    FB.ui({
		method: 'feed',
		name: 'Facebook Dialogs',
		link: 'http://developers.facebook.com/docs/reference/dialogs/',
		picture: 'http://fbrell.com/f8.jpg',
		caption: 'Reference Documentation',
		description: 'Dialogs provide a simple, consistent interface for applications to interface with users.',
		message: 'Facebook Dialogs are easy!'
	    },
		  function(response) {
		      if (response && response.post_id) {
			  alert('Post was published.');
		      } else {
			  alert('Post was not published.');
		      }
		  }
		 );
	},
	invite: function () {
	    FB.ui({
		method: 'apprequests', 
		message: 'You should learn more about this awesome game.', 
		data: 'tracking information for the user'
	    });
	},
	allowAccess: function (){
	    FB.login(function(response){
		if ( response.session ) {
		    showContent( response );
		} else {
		    alert( "you cancelled it!" );
		}
	    });
	},
	hello: function() {
	    alert( "hello world" );
	},
    }
});

