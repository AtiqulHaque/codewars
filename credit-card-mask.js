/*
*
* Usually when you buy something, you're asked whether your credit card number,
* phone number or answer to your most secret question is still correct. However,
* since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

 Your task is to write a function maskify, which changes all but the last four characters into '#'.

 Examples

 maskify("4556364607935616") == "############5616"
 maskify(     "64607935616") ==      "#######5616"
 maskify(               "1") ==                "1"
 maskify(                "") ==                 ""

 // "What was the name of your first pet?"
 maskify("Skippy")                                   == "##ippy"
 maskify("Nananananananananananananananana Batman!") == "####################################man!"
*
*
* */

// return masked string
function maskify(str) {

    function createHash(n){
        var s = "";
        for (var i = 0; i < n; i++){
            s+="#";
        }
        return s;

    }
    if (str.length <= 4) return str;
    return str.replace(str.substring(0, str.length-4),createHash(str.length-4));
}