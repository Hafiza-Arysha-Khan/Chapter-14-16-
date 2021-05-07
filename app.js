// -----------------------Chapter # (14-16)-----------------------------



//================QUESTION # 01=========================
// Declare an empty array using JS literal notation to store student names in future.
// Answer :  01

// var student;
// student = [];



//================QUESTION # 02=========================
// Declare an empty array using JS object notation to store student names in future.
// Answer : 02

// var students;
// students = new Array();


//================QUESTION # 03=========================
// Declare and initialize a strings array.

//Answer 3:
// var arr = [];
// arr = [ 'Arysha' , 'Maham', 'Arbish' , 'Fariyal'];
// console.log(arr);


//================QUESTION # 04=========================
// Declare and initialize a numbers array.

//Answer 4:
// var arr = [];
// arr = [34, 67, 88, 22, 44, 109]
// console.log(arr);


//================QUESTION # 05=========================
// Declare and initialize a boolean array.

//Answer 5:
// var arr = [];
// arr = [ true, false];
// console.log(arr);



//================QUESTION # 06=========================
// Declare and initialize a mixed array.

//Answer 6:
// var arr = [];
// arr = [ 4, "Ansha", 'Cycle' , 'true', 7, 19];
// console.log(arr);



//================QUESTION # 07=========================
//Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

//Answer 7:
// var arr = [];
// arr = ['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
// document.write("Qualifications: <br>" + '<br>1) '+ arr[0] +'<br>2) '+ arr[1] + '<br>3) '+ arr[2] +'<br>4) '+ arr[3] + '<br>5) '+ arr[4] +'<br>6) '+ arr[5] + '<br>7) '+ arr[6] +'<br>8) '+ arr[7] );




//================QUESTION # 08=========================
// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

//Answer 8:
// var nam =   ['Micheal', 'John', 'Tony'];
// var score = [320, 230, 480];
// var total  = 500;
// var percent1 = (score[0]/500) * 100 ;
// var percent2 = (score[1]/500) * 100 ;
// var percent3 = (score[2]/500) * 100;
// document.write("Score of " + nam[0]+  " is " + score[0] + ". Percentage: " +percent1 + "%<br>");
// document.write("Score of " + nam[1]+  " is " + score[1] + ". Percentage: " +percent2 + "%<br>");
// document.write("Score of " + nam[2]+  " is " + score[2] + ". Percentage: " +percent3 + "%<br>");



//================QUESTION # 09=========================
//Initialize an array with color names. Display the array elements in your browser.
//Answer 9:
// var color = [' Black ', ' Blue ' , ' Green ' , ' Red '];
// document.write("<b>Colors In an Array:</b> <br>" + color+ "<br><br>"); 


//(A) Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// var userColor =  prompt("Enter your favourite color: ");
// color.unshift(userColor);
// document.write("<b>(A) Ask the user to add color at the beginning</b><br> " + color+ "<br><br>");


//(B) Ask the user what color he/she wants to add to the end& add that color to the end of the array. Display theupdated array in your browser.
// var userColor1 =  prompt("Enter your favourite color: ");
// color.push(userColor1);
// document.write("<b>(B) Ask the user to add color at the end:</b><br>  " + color+ "<br><br>");


//(C) Add two more color to the beginning of the array. Display the updated array in your browser.
// color.unshift(' Orange ', ' RoyalBlue ');
// document.write("<b>(C) Add two more color at the beginning:</b> <br> " + color+ "<br><br>");


//(D) Delete the first color in the array. Display the updated array in your browser.
// color.shift();
// document.write("<b>(D) Delete the first color:</b><br>" + color+ "<br><br>");


//(E) Delete the last color in the array. Display the updated array in your browser.
// color.pop();
// document.write("<b>(E) Delete the last color:</b><br>" + color+ "<br><br>");


//(F) Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// var userColor2 =  prompt("Enter your favourite color: ");
// color.splice(3, 0,  userColor2);
// document.write("<b>(F) Ask the user at which index he wants to add a color</b><br>" + color+ "<br><br>");


//(G) Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.
// var userColor3 =  prompt("Enter the index number: ");
// var userdelete =  prompt("Enter the number of deleted color: ");
// color.splice(userColor, userdelete);
// document.write("<b>(G)Ask the user at which index he wants to delete:</b><br>" + color+ "<br><br>");




//================QUESTION # 10=========================
//Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
//Answer : 10

// var score = [320, 230, 480, 120];
// document.write("Scores of the students: "+ score + "<br>");
// score.sort();
// document.write("Ordered Scores of students: "+score+ "<br>");


//================QUESTION # 11=========================
//Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//Answer: 11

// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// document.write("Cities List: <br>"+ cities + "<br>");
// a =cities.slice(2, 4);
// document.write("<br>Selected cities list: <br>"+ a);


//================QUESTION # 12=========================
// Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
//Answer : 12

// var arr = ["This ", " is ", " my ", " cat "];
// var b = arr.join();
// document.write("Array: <br> "+ b + "<br><br>");
// var b= arr.join('');
// document.write("String: <br> "+ b + "<br>");




//================QUESTION # 13=========================
// var arr = ['keyboard' , 'mouse', 'printer', 'monitor'];
// for( var i = 0; i<=arr.length-1; i++){
//     document.write(arr[i] + "<br>");
// }


//================QUESTION # 14=========================
// var arr = ['keyboard' , 'mouse', 'printer', 'monitor'];
// for( var i = arr.length-1; i>=0; i--){
//     document.write(arr[i] + "<br>");
// }



//================QUESTION # 15=========================
//Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
// Answer: 15

// var phone = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// document.write("<select><option>"+phone[0]+ "</option><option> "+phone[1]+"</option><option>"+phone[2]+"</option><option> " + phone[3]+"</option><option>"+phone[4]+"</option><option>" +  phone[5]+"</option></select>");