window.$ = window.jQuery = require('jquery');

const {remote} = require('electron');
const movies = remote.getGlobal('movies');


$(document).ready(() => {
    movies.forEach((movie) => {
        // console.log(movie.cover);
        const template =
            '<div class="col s3 movie">'
                + '<div class="card">'
                    + '<div class="card-image">'
                        + '<a href="movie.html"><img src="' + movie.cover + '"></a>'
                    + '</div>'
                + '</div>'
                + '<span class="title">' + movie.title + '</span>'
            + '</div>';

        $('#movies').append(template);
    });
});
