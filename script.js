/**
 * Created by anita on 19/05/15.
 */
function playsSomeSound(genre) {
    SC.get('/tracks', {
        genres: genre,
        bpm: {
            from: 100
        }
    }, function(tracks) {
        var random = Math.floor(Math.random() * 49);
        SC.oEmbed(tracks[random].uri, {auto_play: true}, document.getElementById('target'));
    });
}

window.onload = function() {
    SC.initialize({
        client_id: 'ebdcbebc049bfb92ff2066f9cd609109'
    });

    var menuLinks = document.getElementsByClassName('genre');
    for (var i = 0; i < menuLinks.length; i++) {
        var menuLink = menuLinks[i];
        menuLink.onclick = function(e) {
            e.preventDefault();
            playsSomeSound(menuLink.innerHTML);
        }
    }
};