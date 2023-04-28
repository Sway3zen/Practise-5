var bobiktext1 = "Вітчизна — ось і альфа, і омега!";
var bobiktext2 = "Нації вмирають не від інфаркту. Спочатку їм відбирає мову";
var bobiktext3 = "Нема на світі України, немає другого Дніпра";
var bobiktext4 = "Ще не вмерла України і слава, і воля.";
var bobiktext5 = "Я дуже люблю народну українсь-ку мову, звучну,барвисту й таку м'я-ку.";

var btn1 = document.getElementsByClassName("bobik1")[0];
var btn2 = document.getElementsByClassName("bobik2")[0];
var btn3 = document.getElementsByClassName("bobik3")[0];
var btn4 = document.getElementsByClassName("bobik4")[0];
var btn5 = document.getElementsByClassName("bobik5")[0];

btn1.onclick = function() {
    alert(bobiktext1);
}
btn2.onclick = function() {
    alert(bobiktext2);
}
btn3.onclick = function() {
    alert(bobiktext3);
}
btn4.onclick = function() {
    alert(bobiktext4);
}
btn5.onclick = function() {
    alert(bobiktext5);
}