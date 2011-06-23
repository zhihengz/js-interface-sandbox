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
	init: function( appData ) {
	    FB.init( appData );
	    FB.Canvas.setAutoResize(10000);
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
	publishFeed: function( feedData ) {
	    console.log( feedData );	
	    var message = feedData[0]; 
	    var title = feedData[1];
	    var imageUrl = feedData[2];
	    var caption = feedData[3];
	    var href = feedData[4];
	    var targetId = feedData[5];
	    var promptMsg= feedData[6];
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
	    var publish = {
		method: 'stream.publish',
		display: 'iframe',
                message: message,
		attachment: {
		    name: title,
		    caption: caption,
		    href: href,
		    media: [
			{
			    type: 'image',
			    href: href,
			    src: imageUrl
			}
		    ]
		},
		action_links: [
		    {text: actionLinkLabel, href: href}
		],
		user_message_prompt: promptMsg,
		to:targetId,
	    };

	    FB.ui( publish,
		   function( response ){
		       if( response!=null )
			   $.get( "/telemetry.jsp?type=post&userId=<%= fbid %>&tok="+randomToken + optionsParam); 
		       enableClient("wallpost");
		   } );
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
	gifting: function( recipients, params ) {
	    console.log( "nothing done yet" );
	},
	hello: function() {
	    alert( "hello world" );
	},
    }
});

