let day = document.getElementById("day");
console.log(day);
let option = null;
for (let i = 1; i <= 31; i++) {
    option = document.createElement("option");
    option.text = i;
    day.add(option);
}

let month = document.getElementById("month");
console.log(month);
for (let i = 1; i <= 12; i++) {
    option = document.createElement("option");
    option.text = i;
    month.add(option);
}

let year = document.getElementById("year");
console.log(year);
for (let i = 2010; i <= 2022; i++) {
    option = document.createElement("option");
    option.text = i;
    year.add(option);
}