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
	post: function( data ){
	    var callback = function(r) { console.log(r); }
	    google.sendPost( data, callback);
	},
	publishFeed: function(feedData) {
	    var callback = function(r) { console.log(r); };
	    var message = feedData[0]; 
	    var title = feedData[1];
	    var imageUrl = feedData[2];
	    var caption = feedData[3];
	    var href = feedData[4];
	    var targetId = feedData[5];
	    var promptMsg = feedData[6];
	    var actionLinkLabel = feedData[7];
	    var gameCallType = feedData[8]; //maps to the st1 param
	    var gameCallType2 = feedData[9]; // maps to the st2 param
	    var gameCallType3 = feedData[10]; // maps to the st3 param
	    var randomToken = mkRandomString( 16 );
	    var optionsParam = "&st1="+gameCallType;
	    if(gameCallType2 != undefined && gameCallType2 != ""){
		optionsParam = optionsParam + "&st2=" + gameCallType2;
	    }
	    if(gameCallType3 != undefined && gameCallType3 != ""){
		optionsParam = optionsParam + "&st3=" + gameCallType3;
	    }
		
	    href = href +"?cd=p&token="+randomToken + optionsParam;

	    if ( com.ea2d.social.oz.data.userId == targetId ) {
		console.log( "post to own wall" );
		var data = {
		    title: feedData[2],
		    body: feedData[0],
		    images: [ imageUrl ],
		    anchorText: feedData[6]
		};
		com.ea2d.social.oz.post( data );
	    } else {
		console.log( "post to other wall" );
		var data =  {
		    recipients: [ targetId ],
		    type: 'message',
		    body: message,
		    sendmail: true,
		    images: [ imageUrl ],
		}
		com.ea2d.social.oz.message( data );
	    }
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
	    google.sendNotification( data, callback);
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
