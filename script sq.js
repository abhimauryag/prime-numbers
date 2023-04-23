document.getElementById("square-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);

    var squares = [];
    for (var i = start; i <= end; i++) {
        squares.push(i * i);
    }

    var result = "The squares of numbers between " + start + " and " + end + " are: " + squares.join(", ") + ".";
    document.getElementById("square-result").innerHTML = result;
});
