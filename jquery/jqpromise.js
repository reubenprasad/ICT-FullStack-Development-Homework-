$(document).ready(function(){
$("#btn1").click(function(){

    var mypromise = new Promise((resolve , reject)=>{
        var a,num,b,temp = 0;
        var num = document.getElementById("num").value;
        b = num;
        while(num>0)
        {
         a = num % 10;
         num = parseInt(num/10);
         temp = temp*10+a;
        }
        if(temp == b)
        {
            resolve();
        }
        else
        {
            reject();
        }

    });

        mypromise.then(()=>{
        document.getElementById("result").innerHTML = "Number is Palindrome";
    }).catch(()=>{
        document.getElementById("result").innerHTML = "Not Palindrome";
    });
});
});
