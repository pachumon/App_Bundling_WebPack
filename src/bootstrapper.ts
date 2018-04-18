import { greeting } from "./greeter";

var message:string = greeting('pachu');

window.onload = function () {
    var html = document.getElementById('nativecontent');
    html.innerText = 'native content: ' + message;
};

$(function () {
   $('#jquerycontent').text('jquery content '+message);
});