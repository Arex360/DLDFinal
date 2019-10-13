
var forward;
var backward;
var left;
var right;
var input;
window.addEventListener('keydown', function(e){
    input = e.key;
    if(input == 'w'){
        this.document.getElementById("Controls").innerHTML = "W";
        this.document.getElementById("statement").innerHTML = "Moving forward"
        forward = 1;
        backward = 0;
        left = 0;
        right = 0;
    }
    else if(input == 's'){
        this.document.getElementById("Controls").innerHTML = "S";
        this.document.getElementById("statement").innerHTML = "Moving Backword"
        forward = 0;
        backward = 1;
        left = 0;
        right = 0;
    }
    else if(input == 'a'){
        this.document.getElementById("Controls").innerHTML = "A";
        this.document.getElementById("statement").innerHTML = "Moving left"
        forward = 0;
        backward = 0;
        left = 1;
        right = 0;
    }
    else if(input == 'd'){
        this.document.getElementById("Controls").innerHTML = "D";
        this.document.getElementById("statement").innerHTML = "Moving Right"
        forward = 0 ;
        backward = 0;
        left = 0;
        right = 1;
        
    }
    else if(input == 'e'){
        this.alert("E - send Email");
        
        this.document.getElementById("Controls").innerHTML = "W";
        this.document.getElementById("statement").innerHTML = "Moving forward"
        this.window.location.replace("email.html");
      
    }
})