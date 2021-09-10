function Add() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secNum").value;
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}
function Subtract() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secNum").value;
    document.getElementById("result").innerHTML = num1 - num2;
}
function Multiply() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secNum").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function Divide() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secNum").value;
    document.getElementById("result").innerHTML = num1 / num2;
}