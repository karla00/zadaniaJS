/**
 * Created by Karolina on 2015-12-07.
 */

var obliczpi = function (n) {
    var ulamki = 0;
    var dodaj = true;
    for (i = 1; i <= n; i = i + 2) {
        if (dodaj === true) {
            ulamki = ulamki + (1 / i);
            dodaj = false;
        }
        else {
            ulamki = ulamki - (1 / i);
            dodaj = true;
        }
    }
    var pi = 4 * ulamki;
    return pi;
};
//

//