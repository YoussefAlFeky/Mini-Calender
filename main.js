const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

let today = new Date();

const weeksDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday","Thursday" , "Friday" , "Saturday"];
const allMonth = ["January" , "Febrauary" , "March" , "April" , "May" ,"June" , "July" , "August" , "September",
"Novamber" , "December"];
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weeksDays[today.getDay()]
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();