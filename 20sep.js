let text = "i love her";
document.getElementById("demo").innerHTML = text.substring(2, 10);
// Uppercase
function myFunction() {
    let text = document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML = text.toUpperCase();
}
// Lowercase
function saad() {
    let text1 = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = text1.toLowerCase();
}
// Concate
let text2 = "Bunty";
let text3 = "Bubbly";
let text4 = text2.concat(" ", text3);
document.getElementById("demo3").innerHTML = text4;
/*Trim useto remove the white space and trim start or end used to
remove the white space from start or end */
let text5 = "    I    Love     Her!";
document.getElementById("demo4").innerHTML = text5.trim();
// Padding
let text6 = "Love";
let saad1 = text6.padStart(5, "I");
document.getElementById("demo5").innerHTML = saad1;
let text7 = "I Love";
document.getElementById("demo7").innerHTML = text7.padEnd(15, "you");
// Repeat used to repeat the values
let text8="I love you";
document.getElementById("demo8").innerHTML = text8.repeat(20);