/**
 * Created by Karolina on 2015-12-07.
 */



var fooBar = function (x) {

    for (i = 1; i < x; i = i + 1) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FOOBAR");
        }
        else if (i % 3 === 0) {
            console.log("Foo");
        }
        else if (i % 5 === 0) {
            console.log("Bar");
        }
        else{
            console.log(i);
        }

    }

};