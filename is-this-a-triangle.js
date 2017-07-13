/*Is this a triangle?*/

/*
*
*
* Implement a method that accepts 3 integer values a, b, c.
* The method should return true if a triangle can be built with the sides of given
* length and false in any other case.(In this case, all triangles must have surface greater
* than 0 to be accepted).
*
*
* */

/*My solution*/

/*First Time*/

function isTriangle(a,b,c)
{
    var max = 0;
    if (a > b) {
        if (a > c) max = a;
        else max = c;
    }
    else {
        if (b > c) max = b;
        else max = c;
    }
    if(max == a) return c + b > a;
    if(max == b) return c + a > b;
    if(max == c) return b + a > c;

}


/*Improve one*/


function isTriangle(a,b,c)
{
    return (a + b > c && b + c > a && c + a > b);
}





