"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
console.log("This is official Grading of A-Level");
var Biology = parseInt(prompt("Entre your biology marks!"));
var Maths = parseInt(prompt("Entre your Maths marks!"));
var Physics = parseInt(prompt("Entre your Physics marks!"));
var totalMarks = Biology + Maths + Physics;
if (totalMarks >= 85 && totalMarks >= 71) {
    console.log("Your grade is A+");
}
else if (totalMarks <= 70 && totalMarks >= 51) {
    console.log("Your grade is B+");
}
else if (totalMarks <= 50 && totalMarks >= 35) {
    console.log("Your grade is C+");
}
else
    console.log("Fail");
