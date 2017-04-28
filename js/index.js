$(document).ready(function () {

    $(".fade").animate({opacity: 1}, 1000);

    var albumDescription = $('#album-description');
    var bio = $('#bio');


    $('#damn').hover(function () {
        albumDescription.html('DAMN. - 9.2/10 by <a target="_blank" href="http://pitchfork.com/reviews/albums/23147-damn/">Pitchfork</a>');
    });

    $('#untitled-unmastered').hover(function () {
        albumDescription.html('Untitled Unmastered - 8.6/10 by <a target="_blank" href="http://pitchfork.com/reviews/albums/21705-untitled-unmastered/">Pitchfork</a>');
    });

    $('#tpab').hover(function () {
        albumDescription.html('To Pimp a Butterfly - 9.3/10 by <a target="_blank" href="http://pitchfork.com/reviews/albums/20390-to-pimp-a-butterfly/">Pitchfork</a>');
    });

    $('#gkmc').hover(function () {
        albumDescription.html('Good Kid, M.A.A.D. City - 9.5/10 by <a target="_blank" href="http://pitchfork.com/reviews/albums/17253-good-kid-maad-city/">Pitchfork</a>');
    });
});
