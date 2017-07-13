/*Isograms*/

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.

Test Case :
 isIsogram( "Dermatoglyphics" ) == true
 isIsogram( "aba" ) == false
 isIsogram( "moOse" ) == false // -- ignore letter case
*/

/*My Solutions*/

function isIsogram(str) {
    var charcters = [];
    for (var i = 0; i < str.length; i++) {
        if (typeof charcters[str.toUpperCase().charCodeAt(i)] == 'undefined')
            charcters[str.toUpperCase().charCodeAt(i)] = str[i]
        else
            return false;
    }
    return true;
}
