var factorial = function(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial (x - 1);
    }
};

$(document).ready(function() {
    $("form#factorial").submit(function(event) {
        var x = parseInt($("input#x").val());
        var result = factorial(x);

        $(".factorial").text(result);
        $(".x").text(x);

        $("#result").show();
        event.preventDefault();
    })
})
