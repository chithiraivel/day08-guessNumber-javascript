


let num=Math.floor(Math.random()*10)+1;
console.log(num);
let guess=parseInt(prompt("Enter a Number : "));

while(guess !=num){

 if(num<guess){
    console.log("number is greater ");
}
else{
    console.log("number is smaller");
}

 guess=parseInt(prompt("Enter a Number : "));

}

if(num==guess){
    console.log("Congratulations");
}