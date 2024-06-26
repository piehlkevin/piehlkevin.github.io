/// Adjust the date of the last update on all pages:
function PasteChangeDate() {
    document.getElementById('change_date').innerHTML = "26/06/2024";
}

/// Open a new window to write an e-mail:
function WriteMeAnEmail() {
    window.location.href = "mailto:piehl@wipol.uni-hannover.de"
}

/// Adjust the aesthetics of the boxes on (un-) hovering:
function MakeTextBlack(text) {
    text.style.color = '#000000';
}

function MakeTextBlue(text) {
    text.style.color = '#4996bf';
}

/// Create the animations for the boxes:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.getAttribute('class') === 'info_box_black_more' || entry.target.getAttribute('class') === 'info_box_black_less'){
                entry.target.classList.add('info_box_enter')
            }
            if (entry.target.getAttribute('class') === 'date'){
                entry.target.classList.add('dates_enter')
            }
        }
    })
});

const my_boxes = [
    // Welcome: (none)
    // Academic formation:
    'box_phd_program',
    'box_master_degree',
    'date_master_degree',
    'box_master_program',
    'date_master_program',
    'box_bachelor_degree',
    'date_bachelor_degree',
    'box_bachelor_program',
    'date_bachelor_program',
    'box_abitur_degree',
    'date_abitur_degree',
    'box_abitur_program',
    'date_abitur_program',
    'box_grundschule_program',
    'date_grundschule_program',
    // Career path:
    'box_student_asistant_MAK',
    'date_student_assistant_MAK',
    'box_student_asistant_HSP',
    'date_student_assistant_HSP',
    'box_FSJ',
    'date_FSJ',
    'box_stadt_events',
    'date_stadt_events',
    'box_IAV',
    'date_IAV',
    // Grants & Awards:
    'box_master',
    'date_master',
    'box_deanslist_1',
    'date_deanslist_1',
    'box_deanslist_2',
    'date_deanslist_2',
    'box_deanslist_3',
    'date_deanslist_3',
    'box_deanslist_4',
    'date_deanslist_4',
    'box_bachelor',
    'date_bachelor',
    // Research:
    'box_project_1',
    'box_project_2',
    // Teaching:
    'winter_2324',
    'exercise_winter_2324',
    'summer_2023',
    'exercise_summer_2023',
    'winter_2223',
    'exercise_winter_2223',
    'seminar_winter_2223',
    'summer_2022',
    'exercise_summer_2022',
    'seminar_summer_2022',
    'winter_2122',
    'exercise_winter_2122',
    'seminar1_winter_2122',
    'seminar2_winter_2122',
    // Engagement: (none)
    // Misc: (none)
]

for (let x in my_boxes) {
    if (typeof document.getElementById(x) != "undefined") {
        observer.observe(document.getElementById(x))
    }
}




// Welcome: (None)
// Academic formation:

observer.observe(document.getElementById('box_phd_program'));
observer.observe(document.getElementById('box_master_degree'));
observer.observe(document.getElementById('date_master_degree'));
observer.observe(document.getElementById('box_master_program'));
observer.observe(document.getElementById('date_master_program'));
observer.observe(document.getElementById('box_bachelor_degree'));
observer.observe(document.getElementById('date_bachelor_degree'));
observer.observe(document.getElementById('box_bachelor_program'));
observer.observe(document.getElementById('date_bachelor_program'));
observer.observe(document.getElementById('box_abitur_degree'));
observer.observe(document.getElementById('date_abitur_degree'));
observer.observe(document.getElementById('box_abitur_program'));
observer.observe(document.getElementById('date_abitur_program'));
observer.observe(document.getElementById('box_grundschule_program'));
observer.observe(document.getElementById('date_grundschule_program'));
// Career path:
observer.observe(document.getElementById('box_student_asistant_MAK'));
observer.observe(document.getElementById('date_student_assistant_MAK'));
observer.observe(document.getElementById('box_student_asistant_HSP'));
observer.observe(document.getElementById('date_student_assistant_HSP'));
observer.observe(document.getElementById('box_FSJ'));
observer.observe(document.getElementById('date_FSJ'));
observer.observe(document.getElementById('box_stadt_events'));
observer.observe(document.getElementById('date_stadt_events'));
observer.observe(document.getElementById('box_IAV'));
observer.observe(document.getElementById('date_IAV'));
// Grants & Awards:
observer.observe(document.getElementById('box_master'));
observer.observe(document.getElementById('date_master'));
observer.observe(document.getElementById('box_deanslist_1'));
observer.observe(document.getElementById('date_deanslist_1'));
observer.observe(document.getElementById('box_deanslist_2'));
observer.observe(document.getElementById('date_deanslist_2'));
observer.observe(document.getElementById('box_deanslist_3'));
observer.observe(document.getElementById('date_deanslist_3'));
observer.observe(document.getElementById('box_deanslist_4'));
observer.observe(document.getElementById('date_deanslist_4'));
observer.observe(document.getElementById('box_bachelor'));
observer.observe(document.getElementById('date_bachelor'));
// Research:
observer.observe(document.getElementById('box_project_1'));
observer.observe(document.getElementById('box_project_2'));
// Teaching:
observer.observe(document.getElementById('winter_2324'));
observer.observe(document.getElementById('exercise_winter_2324'));
observer.observe(document.getElementById('summer_2023'));
observer.observe(document.getElementById('exercise_summer_2023'));
observer.observe(document.getElementById('winter_2223'));
observer.observe(document.getElementById('exercise_winter_2223'));
observer.observe(document.getElementById('seminar_winter_2223'));
observer.observe(document.getElementById('summer_2022'));
observer.observe(document.getElementById('exercise_summer_2022'));
observer.observe(document.getElementById('seminar_summer_2022'));
observer.observe(document.getElementById('winter_2122'));
observer.observe(document.getElementById('exercise_winter_2122'));
observer.observe(document.getElementById('seminar1_winter_2122'));
observer.observe(document.getElementById('seminar2_winter_2122'));
// Engagement: (none)
// Misc: (none)


// Insert the "click for more information" in the beginning:
function ClickForInformation() {
    document.getElementById('info_phd_program').innerHTML = "<i>click for more information</i>";
    document.getElementById('info_master_degree').innerHTML = "<i>click for more information</i>";
    document.getElementById('info_master_program').innerHTML = "<i>click for more information</i>";
    document.getElementById('info_bachelor_degree').innerHTML = "<i>click for more information</i>";
    document.getElementById('info_bachelor_program').innerHTML = "<i>click for more information</i>";
    document.getElementById('info_abitur_program').innerHTML = "<i>click for more information</i>";
}

// Add the text when clicking on the boxes:
let show_phd_program = 0;
let show_master_degree = 0;
let show_master_program = 0;
let show_bachelor_degree = 0;
let show_bachelor_program = 0;
let show_abitur_program = 0;

document.getElementById('box_phd_program').onclick = function() {
    if (show_phd_program === 0) {
        show_phd_program = 1;
        document.getElementById('info_phd_program').innerHTML = "<hr>Research areas: <ul>" +
            "<li>Experimental Innovation Economics</li>" +
            "<li>Behavioral Economics </li>" +
            "<li>Incentives and Innovation</li>" +
            "<li>R&D Project Selection</li></ul> <hr> Elective modules: <ul> " +
            "<li>Machine Learning</li>" +
            "<li>Applied Game Theory and Information Economics</li>" +
            "<li>Strategic Experimentation and Learning</li></ul> <hr> Summer Schools: <ul>" +
            "<li>2024 REGIS Summer School (Universidad Carlos III • Madrid)</li>" +
            "<li>2022 BESLAB Computational and Experimental Economics Summer School (Universitat Pompeu Fabra • Barcelona)</li>" +
            " </ul> <hr> Further voluntary courses: <ul>" +
            "<li>2022-2023 University Didactic Certificate Program 'Pro Lehre'</li>" +
            "<li>2022 Economics of Ideas, Science and Innovation (online PhD lecture)</li>" +
            "<li>2021-2022 Behavioral & Experimental Economics (PhD course • University Hamburg)</li> </ul> <br> " +
            "<i>click to close</i>";
    }
    else {
        show_phd_program = 0;
        document.getElementById('info_phd_program').innerHTML = "<i>click for more information</i>";
    }
}

document.getElementById('box_master_degree').onclick = function() {
    if (show_master_degree === 0) {
        show_master_degree = 1;
        document.getElementById('info_master_degree').innerHTML = "<hr>Thesis topic: <br> 'Does the Economy Learn to " +
            "Cope with Pandemics?' <br> Grade: 1.0 (very good) <br><br> <i>click to close</i>";
    }
    else {
        show_master_degree = 0;
        document.getElementById('info_master_degree').innerHTML = "<i>click for more information</i>";
    }

}

document.getElementById('box_master_program').onclick = function() {
    if (show_master_program === 0) {
        show_master_program = 1;
        document.getElementById('info_master_program').innerHTML = "<hr>Major area: <br> Economic Policy and Theory <ul>" +
            "<li>Microeconomics</li>" +
            "<li>Foundations of Economics Policy</li>" +
            "<li>Master Research Seminar Applied Economic Policy</li>" +
            "<li>Seminar Applied Economics</li>" +
            "<li>Topics in Game Theory</li>" +
            "<li>Brown Bag Seminar</li>" +
            "<li>Seminar Population Economics</li>" +
            "<li>Financial Crises</li>" +
            "<li>Sovereign Debt</li>" +
            "<li>Monetary Unions</li></ul>" +
            "<hr>Minor area: <br> Empirical Economics and Econometrics <ul>" +
            "<li>Economics of Terrorism</li>" +
            "<li>Econometric Methods</li>" +
            "<li>Advanced Macroeconomics I</li>" +
            "<li>Advanced Macroeconomics II</li></ul>" +
            "<hr>Further modules: <ul>" +
            "<li>German Fiscal History of the 20th Century</li>" +
            "<li>Financial Systems and Regulations</li>" +
            "<li>Seminar Asian Economies</li>" +
            "<li>Micro- and Macroeconomics Simulation Modelling</li>" +
            "</ul> <br> <i>click to close</i>";
    }
    else {
        show_master_program = 0;
        document.getElementById('info_master_program').innerHTML = "<i>click for more information</i>";
    }
}

document.getElementById('box_bachelor_degree').onclick = function() {
    if (show_bachelor_degree === 0) {
        show_bachelor_degree = 1;
        document.getElementById('info_bachelor_degree').innerHTML = "<hr>Thesis topic: <br> 'An Economic Analysis of " +
            "the Naturalization Policy of the Federal Republic of Germany' <br> Grade: 1.7 (good) <br><br> " +
            "<i>click to close</i>";
    }
    else {
        show_bachelor_degree = 0;
        document.getElementById('info_bachelor_degree').innerHTML = "<i>click for more information</i>";
    }

}

document.getElementById('box_bachelor_program').onclick = function() {
    if (show_bachelor_program === 0) {
        show_bachelor_program = 1;
        document.getElementById('info_bachelor_program').innerHTML = "<hr>Economic specialization modules: <ul> " +
            "<li>Econometrics</li>" +
            "<li>Seminar Public Finance</li>" +
            "<li>Game Theory</li>" +
            "<li>Economic Policy</li>" +
            "<li>Economics of Taxation</li>" +
            "<li>Economic Growth and Development</li></ul>" +
            "<hr>Further elective modules: <ul>" +
            "<li>Health Economics and Healthcare Systems Research</li>" +
            "<li>Intermediate Accounting</li>" +
            "<li>Seminar: The History, Present, and Future of Work</li>" +
            "<li>Professional English for Business and Economics: Business Presentations (B2)</li>" +
            "<li>English for Economics and Management IV: Free Trade (C1)</li>" +
            "</ul> <br> <i>click to close</i>";
    }
    else {
        show_bachelor_program = 0;
        document.getElementById('info_bachelor_program').innerHTML = "<i>click for more information</i>";
    }

}

document.getElementById('box_abitur_program').onclick = function() {
    if (show_abitur_program === 0) {
        show_abitur_program = 1;
        document.getElementById('info_abitur_program').innerHTML = "<hr>Examination subjects: <ul> " +
            "<li>English (Advanced written course)</li>" +
            "<li>French (Advanced written course)</li>" +
            "<li>Geography (Advanced written course)</li>" +
            "<li>Mathematics (Basic written course)</li>" +
            "<li>German (Basic oral course)</li></ul>" +
            "<hr>Extracurricular certificates: <ul>" +
            "<li>Certificate European Studies</li></ul> <br> <i>click to close</i>";
    }
    else {
        show_abitur_program = 0;
        document.getElementById('info_abitur_program').innerHTML = "<i>click for more information</i>";
    }

}


window.onload = function() {
    PasteChangeDate();
    ClickForInformation();
};
