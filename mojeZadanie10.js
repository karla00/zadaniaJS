/**
 * Created by Karolina on 2015-12-09.
 */
var size = 5;
var line = "";

for(var i=0; i< size; i=i+1){

    for(var j=0; j< size; j=j+1){
        if(i >= j){
            line = line + "*";
        }
        else{
            line = line + j;
        }
    }
    console.log(line);
    line = "";
}
for(var i=size-1; i>= 0; i=i-1){
    line = "";
    for(var j=0; j< size; j=j+1){
        if(i >= j){
            line = line + "*";
        }
        else{
            line = line + j;
        }
    }
    console.log(line);

}