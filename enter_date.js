
///window.onload = function() {
///    document.getElementById('change_date').innerHTML = "20/06/2024"
///}

window.onload = function() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDay();
    const current_date = day.toString() + "/" + month.toString() + "/" + year.toString();
    document.getElementById('change_date').innerHTML = current_date;
}
