// Zadanie1
// var numbers = new Array(2,5,9,15,0,4);
// for (var i = 0; i<numbers.length;++i){
//     if(numbers[i]>3 && numbers[i]<10){
//         document.write(numbers[i] + "<br>");
//     }
// }

// Zadanie2
// var number = new Array(2,-8,7,78,-94,-34,59);
// var text = 0;
// for (var i = 0; i <number.length; i++) {
// if (number[i]>=0){
//     text+=number[i];
// }
// }
// document.write(text);

// Zadanie 3
// var numbers = new Array(1,2,5,9,4,13,4,10);
// for (var i = 0; i<numbers.length;++i) {
//     if (numbers[i] == 4) {
//  document.write('Есть!');
//  break;
//     }
// }

// ZADANIE4
// var numbers = Array(10, 20, 30, 50, 235, 3000);
// for (var i = 0; i < numbers.length; ++i) {
//     if (numbers[i].toLocaleString()[0] == 1 || numbers[i].toLocaleString()[0] == 2 || numbers[i].toLocaleString()[0] == 5)
//     {
//         document.write(numbers[i]+"<br>");
//     }
// }

//ZADANIE5
// var numbers = Array(1,2,3,4,5,6,7,8,9);
// var text = "-";
// for (var i = 0; i < numbers.length; ++i) {
//     text+=numbers[i].toLocaleString()+'-';
// }
// document.write(text);

//Zadanie6
// var numbers = Array('пон', ' втр', ' среда', 'чтвг', 'пят', 'суб', 'воскр');
// for (var i = 0; i < numbers.length; ++i) {
//     if (numbers[i] == 'суб' || numbers[i] == 'воскр') {
//        document.write("<b>"+numbers[i]+ "<br></b>")
//     }
//     else {
//         document.write(numbers[i] + "<br>");
//     }
// }

//Zadanie7
// var numbers = Array('пон', 'втр', 'среда', 'чтвг', 'пят', 'суб','воскр');
// var d = new Date();
// var  day = d.getDay()
// for (var i = 0; i < numbers.length; ++i) {
//     if (numbers[i] == numbers[day-1]) {
//         document.write("<i>"+numbers[i]+ "<br></i>")
//     }
//     else{
//         document.write(numbers[i] + "<br>");
//     }
// }

//Zadanie8
// var n = 1000;
// var num = 0;
// while (n > 50) {
//     ++num;
//     n /= 2;
// }
// document.write(n + "<br>" + num);




























