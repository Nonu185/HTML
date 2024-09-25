function Result(){
    var name = document.getElementById("Name").value;
    var pass = 100* Math.random();
    var Result = document.getElementById("Result");
    Result.innerHTML = name+ ",you have scored:"
    +pass.toFixed(2)+"%";
}
    
     if(marks>=0 && marks<=35){
        resultmessage = name + " has failed with " + marks + " marks.";
     }
     else if(marks>=35 && marks<=60){
        resultmessage = name + " has passed with " + marks + " marks."; 
     }
     else if(marks>=60 && marks<=80){
        resultmessage = name + " has passed with merit " + marks + " marks."; 
     }
     else if(marks>=80 && marks<=100){
        resultmessage = name + " has passed with distinction " + marks + " marks."; 
     }