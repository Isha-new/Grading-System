import *as promptSync from "prompt-sync"

const prompt = promptSync()

console.log("This is official Grading of A-Level");

let Biology = parseInt(prompt("Entre your biology marks!"));
let Maths = parseInt(prompt("Entre your Maths marks!"));
let Physics = parseInt(prompt("Entre your Physics marks!"));

let totalMarks = Biology + Maths + Physics
if(totalMarks >= 85 && totalMarks >=71 ){
    console.log("Your grade is A+")
} else if (totalMarks <= 70 && totalMarks >= 51){
    console.log("Your grade is B+")
} else if(totalMarks <= 50 && totalMarks >= 35){
    console.log("Your grade is C+")
} else 
console.log("Fail")

