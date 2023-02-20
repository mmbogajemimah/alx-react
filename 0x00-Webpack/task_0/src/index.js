import $ from "jquery";

$(document).ready(function() {
    const $p1 = $('<p>').text('Holberton Dashboard');
    const $p2 = $('<p>').text('Dashboard data for the students');
    const $p3 = $('<p>').text('Copyright - Holberton School');

    $('body').append($p1, $p2, $p3);
})