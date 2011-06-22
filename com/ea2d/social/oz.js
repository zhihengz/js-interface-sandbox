Namespace( 'com.ea2d.social', {
    oz: {
	network: 'oz',
	data : { 
	    initScope: [ 'https://www.googleapis.com/auth/emeraldsea.circles.read',
			 'https://www.googleapis.com/auth/userinfo.profile',
			 'https://www.googleapis.com/auth/userinfo.email']
	},
	load: function(){},
	init: function(loggedIn){
	    if (loggedIn) {
		com.ea2d.sandbox.showContent();
		google.plusone.api('/people/me', function(user) { com.ea2d.social.oz.data.userId = user.id } );
		
	    } else {
		com.ea2d.sandbox.showLogin();
	    }
	},	
	post: function(){
	    var callback = function(r) { console.log(r); }
	    google.sendPost(
		{ title: 'Reference Documentation',
		  body: 'Google Dialogs are easy',
		  anchorText: 'Play a Game Now',
		  images:['http://com-ea2d-oz.s3.amazonaws.com/dal-ozdev/icon200x240.png']}, 
		callback);
	},
	invite: function( recipients ) {
	    var callback = function(r) { console.log(r); }
	    google.sendNotification(
		{ recipients: recipients,
		  type: 'invite',
		  params: {'gameinfo': 123},
		  body: 'Come and play',
		  sendmail: true,		    
		  images:['http://com-ea2d-oz.s3.amazonaws.com/dal-ozdev/icon200x240.png']}, 
		callback);

	},
	allowAccess: function(){
	    google.doAuth(false);
	},
	message: function(who){	   
	    var callback = function(r) { console.log(r); }
	    google.sendNotification( 
		{ recipients: who,
		  type: 'message',
		  params: {'gameinfo': 123},
		  body: 'this is fun',
		  sendmail: true,		    
		  images:['http://com-ea2d-oz.s3.amazonaws.com/dal-ozdev/icon200x240.png']
		}, 
		callback);
	},
	gifting: function(who) {
	    var callback = function(r) { console.log(r); }
	    google.sendNotification( 
		{ recipients: who,
		  type: 'gift',
		  params: {'gameinfo': 123},
		  body: 'here is gift to you',
		  sendmail: true,		    
		  images:['http://com-ea2d-oz.s3.amazonaws.com/dal-ozdev/icon200x240.png']
		}, 
		callback);	    
	},
	hello: function(){
	    alert("hello world");
	},
    }
});
