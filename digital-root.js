/*
In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has two digits,
continue reducing in this way until a single-digit number is produced.
This is only applicable to the natural numbers.*/


/*My Solutions*/



function digital_root(n) {
    var root = String(n), sum = 0;
    if (root.length === 1) return n;
    else {
        for (var i = 0; i < root.length; i++) {
            sum += Number(root[i]);
        }
        return digital_root(sum);
    }
}
