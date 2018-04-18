import { greeting } from "./greeter";

var message = greeting('pachu');

window.onload = function () {
    var html = document.getElementById('nativecontent');
    html.innerText = 'native content: ' + message;
};