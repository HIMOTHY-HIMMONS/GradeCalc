function cal() {
    var a=parseInt(document.getElementById("math").value);
    var b=parseInt(document.getElementById("science").value);
    var c=parseInt(document.getElementById("socialstudies").value);
    var d=parseInt(document.getElementById("english").value);
    var result= ((a+b+c+d) / 4 );
    alert("Result : " + result);
    if(result >=90){
        alert("You got an A")
    }
    else if(result >=80  &&  result <= 89){
        alert("You got a B")
    }
    else if(result >=79  &&  result <=79){
        alert("You got a C")
    }
    else if(result >=60  &&  result <=69){
        alert("You got a D")
    }
    else if(result<=59){
        alert("You got an F")
    }
}