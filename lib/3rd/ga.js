var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-21976825-4']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

$('#login-btn').click(function () {
    _gaq.push(['_trackEvent', "login-btn", 'clicked']);
});