/**
 * Created by Karolina on 2015-12-07.
 */

var n = 10;
var mojaTabelka = function () {

    var tabelka = document.getElementById('tabelka'); //pobieramy tablekę

    for (var i = 0; i < n; i = i + 1) {
        var wiersz = document.createElement('tr');
        tabelka.appendChild(wiersz);
        // mamy jeden wiersz
        // dodaje do niego kolumny
        for (var j = 0; j < n; j = j + 1) {
            var td = document.createElement("td");
            wiersz.appendChild(td);
            var a = i + 1;
            var b = j + 1;
            var c = a * b;
            var tekst = document.createTextNode(a + " x " + b + " = " + c);
            td.appendChild(tekst);
        }

    }

};