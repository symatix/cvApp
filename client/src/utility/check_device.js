export const checkDevice = () => {
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
    };
    if ( isMobile.Android() ) {return "android"}
    if ( isMobile.BlackBerry() ) { return "blackberry"}
    if ( isMobile.iOS() ) { return "apple"}
    if ( isMobile.Opera() ) { return "opera" }
    if ( isMobile.Windows() ) { return "windows" }
    return false;
}
