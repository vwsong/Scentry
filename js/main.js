$(document).ready(function () {
    fade();
    $('.tooltipped').tooltip({
        delay: 50
    });
    console.log("LOG");
});

function fade() {
    $('.headerDiv').fadeIn(1500);
}