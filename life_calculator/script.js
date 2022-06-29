
var y = prompt("What is you year of birth?");
var m = prompt("What is you month of birth?");
var d = prompt("What is you day of birth?");
var year = parseInt(y) + 100;
var month = parseInt(m);
var day = parseInt(d);

var today = new Date();
var cYear = today.getFullYear();
var cMonth = today.getMonth() + 1;
var cDay = today.getDate();

var date1 = new Date(cDay/cMonth/cYear);
var date2 = new Date(day/month/year);
var diffTime = Math.abs(date2 - date1);
var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// var date2 = new Date('12/12/2010');
// var diffDays = date2.getDate() - date1.getDate(); 
// var currentYear = today.getFullYear();
// var currentMonth = today.getMonth() + 1;
// var currentDay = today.getDate();
console.log(diffDays + " days");




// document.write("You left to live: " + yearsLeft + " Years, " + monthsLeft + " Months and " + daysLeft + " Days");



