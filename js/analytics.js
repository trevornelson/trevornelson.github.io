(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-33121043-2', 'auto');
ga('send', 'pageview');

// Clicked Projects in Nav
$('#nav-projects').on('click', function(e) {
  ga('send', {
    'hitType': 'event',
    'eventCategory': 'link',
    'eventAction': 'click',
    'eventLabel': 'projects'
  });
});

// Clicked Blog in Nav
$('#nav-blog').on('click', function(e) {
  ga('send', {
    'hitType': 'event',
    'eventCategory': 'link',
    'eventAction': 'click',
    'eventLabel': 'blog'
  });
});

// Clicked Resume in Nav
$('#nav-resume').on('click', function(e) {
  ga('send', {
    'hitType': 'event',
    'eventCategory': 'link',
    'eventAction': 'click',
    'eventLabel': 'resume'
  });
});

// Clicked Contact
$('#nav-contact').on('click', function(e) {
  ga('send', {
    'hitType': 'event',
    'eventCategory': 'link',
    'eventAction': 'click',
    'eventLabel': 'contact'
  });
});

// Clicked Project Details
$('.project-link').on('click', function(e) {
  ga('send', {
    'hitType': 'event',
    'eventCategory': 'link',
    'eventAction': 'click',
    'eventLabel': 'project details'
  });
});

// Clicked Resume Details
$('.resume-links').on('click', function(e) {
  ga('send', {
    'hitType': 'event',
    'eventCategory': 'link',
    'eventAction': 'click',
    'eventLabel': 'resume details'
  });
});



