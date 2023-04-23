document.getElementById("prime-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var choice = document.getElementById("choice").value;

    var primes = [];
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    var result = "";
    if (choice === "count") {
        result = "There are " + primes.length + " prime numbers between " + start + " and " + end + ".";
    } else {
        result = "<ol>";
        primes.forEach(function(prime) {
            result += "<li>" + prime + "</li>";
        });
        result += "</ol>";
    }

    document.getElementById("prime-result").innerHTML = result;
});

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
