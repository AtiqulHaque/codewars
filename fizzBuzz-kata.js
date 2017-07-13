/*
FizzBuzz is probably the second most popular way to introduce beginners to the art of
coding (the first probably being the ancient Fibonacci sequence, the grandfather of all the algorithm theory).

In this very basic kata you will have to create a function that returns the same numbers
that is given as a parameter, with the following exceptions:

    If number divides evenly with 3 - returns string "fizz"
If number divides evenly with 5 - returns string "buzz"
If number divides evenly with 3 and 5 - returns string "fizz buzz"
*/

/*My Solutions*/


function fizzbuzz(n) {
    var r = n / 3;
    if (isInt(r)) return isInt(r / 5) ? 'fizz buzz' : 'fizz';
    return (isInt(n / 5)) ? 'buzz' :  n;
}

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}