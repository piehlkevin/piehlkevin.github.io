
///window.onload = function() {
///    document.getElementById('change_date').innerHTML = "20/06/2024"
///}

window.onload = function() {
    const d = new Date();
    console.log(d);
    const year = d.getFullYear();
    console.log("year: ", year);
    const month = d.getMonth();
    console.log("month: ", month);
    const day = d.getDay();
    console.log("day: ", day);
    const current_date = day.toString() + "/" + month.toString() + "/" + year.toString();
    console.log("current date: ", current_date);
    document.getElementById('change_date').innerHTML = current_date;
}
