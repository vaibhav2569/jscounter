let count=0;

// increment function

function increment(){
    count++;
    document.getElementById("counter").innerHTML=count;
}
// decrement function
function decrement(){
    if(count==0)
    alert("it cannot be empty");
    if(count>0)
    {
        count--;
        document.getElementById("counter").innerHTML=count;
    }
    
    
}