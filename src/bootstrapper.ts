import { greeting } from "./greeter";
import * as _ from "lodash";

var message: string = greeting('pachu');

window.onload = function () {
    var html = document.getElementById('nativecontent');
    html.innerText = 'native content: ' + message;
};

$(function () {
    $('#jquerycontent').text('jquery content ' + message);

    _.map([4, 8], (n: number) => console.log(n * n));
});