/**
 * Created by Karolina on 2015-12-07.
 */

var fooBar = function (x) {

    var line = "";

    for (i = 1; i < x; i = i + 1) {

        if ((i % 3 === 0) && (i % 5 === 0)) {
            line = line + "FOOBAR";
        }
        else if (i % 3 === 0) {
            line = line + "Foo";
        }
        else if (i % 5 === 0) {
            line = line + "Bar";
        }
        else {
            line = line + i;
        }

    }
    return line;
};

fooBar(15);

