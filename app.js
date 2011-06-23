com.ea2d.mysocial = com.ea2d.social.oz;


var feedOnMyWall = [
    "",
    "Zhiheng Thanks You!",
    "http://com-ea2d-oz.s3.amazonaws.com/dal-ozdev/icon200x240.png",
    "Zhiheng thanks Antor for sending them 100 gold in Dragon Age legends",
    "http://apps.facebook.com/dragonagelegends/",
    "0",
    "Whats on your mind",
    "Play Dragon Age legends",
    "ThanksGold",
    null,
    null
];

var feedToOther = [
    "",
    "Zhiheng Thanks You",
    "http://com-ea2d-oz.s3.amazonaws.com/dal-ozdev/icon200x240.png",
    "Zhiheng thanks Antor for sending them 100 gold in Dragon Age legends",
    "http://apps.facebook.com/dragonagelegends/",
    "TOBECHANGE",
    "Whats on your mind",
    "Play Dragon Age legends",
    "ThanksGold",
    null,
    null

];

function testPublishToOther( ) {
    feedToOther[5] = com.ea2d.mysocial.data.userId;
    console.log( feedToOther[5]);
    publishFeed( feedToOther );
};

function mkRandomString( length ) {
    var alphaNumericChars = new Array ('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
    var outputString = "";
    var random;
    i = 0;
    do {
	random = rnd(alphaNumericChars.length-1);
      	outputString += alphaNumericChars[random];
      	i++;
    }
    while (i<length);
      	return outputString;
} 

function rnd( max ) {
    var rndnum = max * Math.random();
    rndnum = Math.ceil (rndnum);
    return rndnum;
} 
      
