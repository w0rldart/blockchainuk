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
                + '<h2 class="title">' + movie.title + '</h2>'
                + '<h3 class="year">' + movie.year + '</h3>'
            + '</div>';

        $('#movies').append(template);
    });
});
