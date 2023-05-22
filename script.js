// script.js

window.onload = function() {
    var musicPacksLink = document.querySelector('a[href="#music-packs"]');
    musicPacksLink.addEventListener('click', function(event) {
        event.preventDefault();
        var musicPacksElement = document.getElementById('music-packs');
        musicPacksElement.scrollIntoView({ behavior: 'smooth' });
    });

    var projectsLink = document.querySelector('a[href="#projects"]');
    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        var projectsElement = document.getElementById('projects');
        projectsElement.scrollIntoView({ behavior: 'smooth' });
    });
};
