// //----------------------Chapter no.14 - 15----------------------

// //---------------------------Q1---------------------------
// var studentName = [];
// studentName.push("Muhammad Anas");
// console.log(studentName);

// //---------------------------Q2---------------------------
// var studentName = [];
// studentName.push("Muhammad Anas");
// console.log(studentName);

// //---------------------------Q3---------------------------
// var studentName = ["Anas","areeb","shayan","waleed","tayab","yousuf"];
// console.log(studentName);

// //---------------------------Q4---------------------------
// var num = [1,2,3,4,5];
// console.log(num);

// //---------------------------Q5---------------------------
// var booleanArray = [true, false];
// console.log(booleanArray);

// //---------------------------Q6---------------------------
// var mixedArray = [1, "Anas khan", true];
// console.log(mixedArray);

// //---------------------------Q7---------------------------
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write(
//     `<h1>Qualification</h1>
//      <ol>
//     <li>${qualification[0]}</li>
//     <li>${qualification[1]}</li>
//     <li>${qualification[2]}</li>
//     <li>${qualification[3]}</li>
//     <li>${qualification[4]}</li>
//     <li>${qualification[5]}</li>
//     <li>${qualification[6]}</li>
//     <li>${qualification[7]}</li>
//     <li>${qualification[8]}</li>
//     </ol>`
// );

// //---------------------------Q8---------------------------
// var studentName = ["Anas", "Areeb", "Shayan"];
// var studentMarks = [320 , 230, 480];
// var totalMarks = 500;
// var studentPercent1 = studentMarks[0]/totalMarks*100;
// var studentPercent2 = studentMarks[1]/totalMarks*100;
// var studentPercent3 = studentMarks[2]/totalMarks*100;

// document.write(`
//     Score of ${studentName[0]} is ${studentMarks[0]}. Percentage: ${studentPercent1}%<br>
//     Score of ${studentName[1]} is ${studentMarks[1]}. Percentage: ${studentPercent2}%<br>
//     Score of ${studentName[2]} is ${studentMarks[2]}. Percentage: ${studentPercent3}%
// `);

// //---------------------------Q9---------------------------
// document.write(`<h4>List of Colors in an Array</h4>`);
// var colorList = ["Red","Blue","Green","Yellow","Orange"];
// document.write(`${colorList}<br>`);
// // //---------------------------Q9(a)---------------------------
// var newColorStart = prompt("Write a color name to add in the start of an array","Golden");
// colorList.unshift(newColorStart);
// document.write(`<h4>New Color Added in Start of Array</h4>${colorList}<br><br>`);
// // //---------------------------Q9(b)---------------------------
// var newColorEnd = prompt("Write a color name to add in the end of an array","Purple");
// colorList.push(newColorEnd);
// document.write(`<h4>New Color Added in the End of Array</h4>${colorList}<br><br>`);
// // //---------------------------Q9(c)---------------------------
// var newColorStart1 = prompt("Write a color name to add in the 1st number of an array","Brown");
// var newColorStart2 = prompt("Write a color name to add in the 2nd number of an array","Black");
// colorList.unshift(newColorStart1,newColorStart2);
// document.write(`<h4>New 2 Colors Added in the Start</h4>${colorList}<br><br>`);
// // //---------------------------Q9(d)---------------------------
// colorList.shift(newColorStart1);
// document.write(`<h4>No 1 Color Deleted</h4>${colorList}<br><br>`);
// // //---------------------------Q9(e)---------------------------
// colorList.pop(newColorEnd);
// document.write(`<h4>Last Color Deleted</h4>${colorList}<br><br>`);
// // //---------------------------Q9(f)---------------------------
// var newColor = prompt("Write a color name to add" ,"Indigo");
// var position = prompt("Enter a position where the color is add");
// colorList.splice(position,0,newColor); 
// document.write(`<h4>New Color Added on the given position</h4>${colorList}<br><br>`);
// // //---------------------------Q9(g)---------------------------
// var indexNo = prompt("Enter a index no you whant to delete color");
// var colorRange = prompt("How many color do you want to delete");
// colorList.splice(indexNo,colorRange); 
// document.write(`<h4>Colors deleted on the given range</h4>${colorList}<br><br>`);


// //---------------------------Q10---------------------------
// var score1 = [320,280,480,120];
// // var score2 = [120,480,280.320];
// score1.sort()
// document.write(`
//     Ordered Score of Students: ${score1}
// `);

// //---------------------------Q11---------------------------
// var cities = [`Karachi`,"Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCities = [];
// selectedCities.push(...cities.slice(2,4));
// console.log(selectedCities);

// //---------------------------Q12---------------------------
// var arr = ["This ", " is ", " my ", " cat"];
// var arrJoin = arr.join("")
// document.write(`
//     Array:<br>
//     ${arr}<br>
//     <br>
//     String:<br>
//     ${arrJoin}
// `)

// //---------------------------Q13---------------------------
// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// document.write(`
//   <ul>
//   <li>${devices[0]}</li>
//   <li>${devices[1]}</li>
//   <li>${devices[2]}</li>
//   <li>${devices[3]}</li>
//   </ul>
// `)

// //---------------------------Q14---------------------------
// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// devices.reverse();
// document.write(`
//   <ul>
//   <li>${devices[0]}</li>
//   <li>${devices[1]}</li>
//   <li>${devices[2]}</li>
//   <li>${devices[3]}</li>
//   </ul>
// `);

// //---------------------------Q15---------------------------
// var phoneManufacture = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write(`
//   <label>Phone Manufactures</label>
//   <select>
//   <option>${phoneManufacture[0]}</option>
//   <option>${phoneManufacture[1]}</option>
//   <option>${phoneManufacture[2]}</option>
//   <option>${phoneManufacture[3]}</option>
//   <option>${phoneManufacture[4]}</option>
//   <option>${phoneManufacture[5]}</option>
//   </select>
// `);
