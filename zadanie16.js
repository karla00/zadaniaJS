/**
 * Created by Karolina on 2015-12-07.
 */
var potega = function(a,n){
    var wynik = 1;

    for (i=0; i<=n-1; i++){
        wynik = wynik * a
    }
    return wynik;
}


console.log(potega(2,3));