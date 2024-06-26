/// Adjust the date of the last update on all pages:
function PasteChangeDate() {
    document.getElementById('change_date').innerHTML = "26/06/2024";
}

/// Open a new window to write an e-mail:
function WriteMeAnEmail() {
    window.location.href = "mailto:piehl@wipol.uni-hannover.de"
}



window.onload = function() {
    PasteChangeDate();
}

/// TODO: Transfer all other functions into this file as well and rename the file
