$(document).ready(function(){
$("#btn").click(function(){

    var a = document.getElementById("nm").value;
    addDigits(a,(res)=>{
    document.getElementById("res").innerHTML = "Sum of digits = "+res; 
    });
});
       
function addDigits(a,callback){ 
        var sum=0;
        while (a) {
            sum += a % 10;
            a = Math.floor(a / 10);
        }
         callback(sum);
     }

});