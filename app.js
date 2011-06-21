Namespace.include( 'com.ea2d.sandbox');
Namespace.include( 'com.ea2d.social.facebook');
// facebook async init
com.ea2d.mysocial = com.ea2d.social.facebook;
window.fbAsyncInit = com.ea2d.mysocial.init;


(function() {
    com.ea2d.mysocial.load(),
    $('#fb-uid').toggle();
    $('#fb-token').toggle();
}()
);
