let a=Math.floor((Math.random()*100)+1);
console.log(a); 
let num=document.getElementById("num");
let p=document.getElementById("p");
let count=1;
function submit()
{
    if(num.value==a)
    {
        p.textContent="Congratulations..! \n You take "+count+" tries";
        p.style.color="green";
    }
    else if(num.value<a)
    {
        p.textContent="** Smaller **";
        count++;
        p.style.color="red";
    }
    else
    {
        p.textContent="** Greater **";
        count++;
        p.style.color="gold";
    }
}
function reset()
{
   p.textContent="";
   num.value="";   
}