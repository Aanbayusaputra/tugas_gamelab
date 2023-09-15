var n= 5;
var text =  "";
for( var i=0; i<1;i++){
    text += "*"; 
}
text+= "\n"
for (var y=2; y<=5; y++){
    for(var x=n; x>=y; x--){
        text +=" ";
    }
    for(var k=1; k<=y; k++){
text +="*";
    }
    text+= "\n"
}
console.log(text);
