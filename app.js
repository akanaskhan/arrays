// //----------------------Chapter no.14 - 15----------------------

// //---------------------------Q1---------------------------
// var studentName = [];
// studentName.push("Muhammad Anas");
// console.log(studentName);

// //---------------------------Q2---------------------------

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

// //---------------------------Q9(a)---------------------------
var colorList = ["Red","Blue","Green","Yellow","Orange"];
document.write(`${colorList}<br>`);
// //---------------------------Q9(a)---------------------------
var colorList = ["Red","Blue","Green","Yellow","Orange"];
var newColor = prompt("Write a color name to add in an array","Golden");
colorList.unshift(newColor);
document.write(colorList);
// //---------------------------Q9(b)---------------------------
// //---------------------------Q9(c)---------------------------
// //---------------------------Q9(d)---------------------------
// //---------------------------Q9(e)---------------------------
// //---------------------------Q9(f)---------------------------


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
var devices = ["Keyboard","Mouse","Printer","Monitor"];
document.write(`
  <ul>
  <li>${devices[0]}</li>
  <li>${devices[1]}</li>
  <li>${devices[2]}</li>
  <li>${devices[3]}</li>
  </ul>
`)

// //---------------------------Q14---------------------------
var devices = ["Keyboard","Mouse","Printer","Monitor"];
devices.reverse();
document.write(`
  <ul>
  <li>${devices[0]}</li>
  <li>${devices[1]}</li>
  <li>${devices[2]}</li>
  <li>${devices[3]}</li>
  </ul>
`);

// //---------------------------Q15---------------------------
var phoneManufacture = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(`
  <label>Phone Manufactures</label>
  <select>
  <option>${phoneManufacture[0]}</option>
  <option>${phoneManufacture[1]}</option>
  <option>${phoneManufacture[2]}</option>
  <option>${phoneManufacture[3]}</option>
  <option>${phoneManufacture[4]}</option>
  <option>${phoneManufacture[5]}</option>
  </select>
`);
