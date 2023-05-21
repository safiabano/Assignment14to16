//=========ch 14-16==========
//====================Q 1===================
// let studentName ;
// console.log(studentName);
//==========Q 2=================
// let students ={
// names:[]
// }
// document.write(students);
//=========Q 3=========
// let weekDays =["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// console.log(weekDays);
//==========Q 4==========
// let num = [1,2,3,4]
// console.log(num);
//========Q 5=========
// let bool =[true,false]
// console.log(bool);
//======Q 6================
// let mixarr=["apple",1,"2","orange"]
// console.log(mixarr);
//============Q 7============
// let quali=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil" , "PhD"]
// document.write("QUALIFICATION")
// document.write("<ol>")
// for(i =0;i<quali.length;i++){
// document.write("<li>"+quali[i]+"</li>")
// }
// document.write("</ol>")
//=========Q 8===============


// var studentNames = ['Mark', 'John', 'Tony'];
// var studentScores = [320, 230, 480];
// var totalMarks = 500;
// var percentages = [];
// for (var i = 0; i < studentScores.length; i++) {
//   var percentage = (studentScores[i] / totalMarks) * 100;
//   percentages.push(percentage);
// }
// for (var i = 0; i < studentNames.length; i++) {
//   document.write("Name: " + studentNames[i] + "<br>");
//   document.write("Score: " + studentScores[i] + "<br>");
//   document.write("Percentage: " + percentages[i] + "%<br><br>");
// }
// //=======Q9===============

// var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

// document.write("<ul>");
// for (var i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ul>");
// //===========Q10==========
// //====a part
// var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

// var userColor = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(userColor);
// document.write("<ul>");
// for (var i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ul>");
// //===========b=part=========
// var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];

// var userColor = prompt("Enter a color to add to the end of the array:");

// colors.push(userColor);

// document.write("<ul>");
// for (var i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ul>");
// //===============c===part====

// var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange'];
// colors.unshift('Purple', 'Pink');
// document.write("<ul>");
// for (var i = 0; i < colors.length; i++) {
//   document.write("<li>" + colors[i] + "</li>");
// }
// document.write("</ul>");
//=================d =========
// let colors=["red","blue","green","orange"]
// colors.pop();
// console.log(colors);
//============e=========
// lors=["red","blue","green","orange"]
// colors.pop();
// console.log(colors);
//==============f====
// var colors = ["red", "green", "blue", "yellow"];
// var index = prompt("Enter the index at which you want to add a color:");
// var color = prompt("Enter the color name:");

// colors.splice(index, 0, color); 

// document.write(colors); 
//==========g=======

// var colors = ["red", "green", "blue", "yellow"];
// var index = prompt("Enter the index at which you want to start deleting colors:");
// var numToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(index, numToDelete); 
// document.write(colors);
//=========Q10================

// var scores = [320, 230, 480, 120];

// scores.sort(function(a, b) {
//   return a - b;
// });

// document.write("Ordered scores of students: " + scores);
//===============Q11===============
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = [];

// selectedCities = cities.slice(2, 5);

// document.write("Selected cities: " + selectedCities);
//==============Q12====

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// document.write("Single string: " + singleString);
//========Q13===========

// var fifoArray = [];

// fifoArray.push("Value 1");
// fifoArray.push("Value 2");
// fifoArray.push("Value 3");

// var value1 = fifoArray.shift();
// var value2 = fifoArray.shift();
// var value3 = fifoArray.shift();

// console.log(value1); 
// console.log(value2); 
// console.log(value3); 
//===========Q14==============

// var lifoArray = [];

// lifoArray.push("Value 1");
// lifoArray.push("Value 2");
// lifoArray.push("Value 3");

// var value3 = lifoArray.pop();
// var value2 = lifoArray.pop();
// var value1 = lifoArray.pop();

// console.log(value3); 
// console.log(value2); 
// console.log(value1);


//========Q15========

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write('<select>');
// for (var i = 0; i < phoneManufacturers.length; i++) {
//   document.write('<option value="' + phoneManufacturers[i] + '"> ' + phoneManufacturers[i] + ' </option>');
// }
// document.write('</select>');





