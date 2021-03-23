var button = $("button");

var d;
var n;

function giornoAttuale() {
    d = new Date();
    n = d.getDay();
    console.log(n);
};

var risposta = $("#si-o-no");

button.click(() => {

    giornoAttuale();
    if ( n == 5 || n == 6) {
        risposta.text("SI");
    } else {
        risposta.text("NO");
    }

});