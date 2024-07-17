/// Adjust the date of the last update on all pages:
function PasteChangeDate() {
    document.getElementById('change_date').innerHTML = "17/07/2024";
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

function MakeTextWhite(text) {
    text.style.color = '#ffffff';
}

/// Create the animations for the boxes:
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // The first page is a bit special. So do this one first:
            if (entry.target.getAttribute('id') === 'photo_1' ||
                entry.target.getAttribute('id') === 'photo_3') {
                entry.target.classList.add('dates_enter')
            }
            else if (entry.target.getAttribute('id') === 'photo_2' ||
                entry.target.getAttribute('id') === 'photo_4') {
                entry.target.classList.add('dates_enter_alt')
            }
            else if (entry.target.getAttribute('id') === 'box_1' ||
                entry.target.getAttribute('id') === 'box_2' ||
                entry.target.getAttribute('id') === 'box_3' ||
                entry.target.getAttribute('id') === 'box_4') {
                entry.target.classList.add('info_box_enter')
            }
            // Now, continue with the "normal" ones:
            else {
                if (entry.target.getAttribute('class') === 'info_box_black_more' || entry.target.getAttribute('class') === 'info_box_black_less') {
                    entry.target.classList.add('info_box_enter')
                }
                if (entry.target.getAttribute('class') === 'date' || entry.target.getAttribute('class') === 'logo') {
                    entry.target.classList.add('dates_enter')
                }
            }

            if (entry.target.getAttribute('class') === 'highlight first' ||
                entry.target.getAttribute('class') === 'highlight second' ||
                entry.target.getAttribute('class') === 'highlight third') {
                entry.target.classList.add('highlight_text')
            }
        }

    })
});

const my_boxes = [
    // Welcome:
    'box_1',
    'photo_1',
    'box_2',
    'photo_2',
    'box_3',
    'photo_3',
    'box_4',
    'photo_4',
    'text_1',
    'text_2',
    'text_3',
    'text_4',
    'text_5',
    'text_6',
    'text_7',
    'text_8',
    'text_9',
    'text_10',
    'text_11',
    'text_12',
    // Academic formation:
    'box_phd_program',
    'box_master_degree',
    'date_master_degree',
    'logo_master_degree',
    'box_master_program',
    'date_master_program',
    'logo_master_program',
    'box_bachelor_degree',
    'date_bachelor_degree',
    'logo_bachelor_degree',
    'box_bachelor_program',
    'date_bachelor_program',
    'logo_bachelor_program',
    'box_abitur_degree',
    'date_abitur_degree',
    'logo_abitur_degree',
    'box_abitur_program',
    'date_abitur_program',
    'logo_abitur_program',
    'box_grundschule_program',
    'date_grundschule_program',
    'logo_grundschule_program',
    // Career path:
    'box_student_asistant_MAK',
    'date_student_assistant_MAK',
    'logo_student_assistant_MAK',
    'box_student_asistant_HSP',
    'date_student_assistant_HSP',
    'logo_student_assistant_HSP',
    'box_FSJ',
    'date_FSJ',
    'logo_FSJ',
    'box_stadt_events',
    'date_stadt_events',
    'logo_stadt_events',
    'box_IAV',
    'date_IAV',
    'logo_IAV',
    // Grants & Awards:
    'box_master',
    'date_master',
    'logo_master',
    'box_deanslist_1',
    'date_deanslist_1',
    'logo_deanslist_1',
    'box_deanslist_2',
    'date_deanslist_2',
    'logo_deanslist_2',
    'box_deanslist_3',
    'date_deanslist_3',
    'logo_deanslist_3',
    'box_deanslist_4',
    'date_deanslist_4',
    'logo_deanslist_4',
    'box_bachelor',
    'date_bachelor',
    'logo_bachelor',
    // Research:
    'box_project_1',
    'box_project_2',
    'box_project_3',
    // Teaching:
    'winter_2324',
    'logo_winter_2324',
    'exercise_winter_2324',
    'summer_2023',
    'logo_summer_2023',
    'exercise_summer_2023',
    'winter_2223',
    'logo_winter_2223',
    'exercise_winter_2223',
    'seminar_winter_2223',
    'summer_2022',
    'logo_summer_2022',
    'exercise_summer_2022',
    'seminar_summer_2022',
    'winter_2122',
    'logo_winter_2122',
    'exercise_winter_2122',
    'seminar1_winter_2122',
    'seminar2_winter_2122',
    // Engagement:
    'date_FM',
    'logo_FM',
    'box_FM',
    'date_XXX',
    'logo_XXX',
    'box_XXX',
    'date_klettern',
    'logo_klettern',
    'box_klettern',
    'date_kifebe',
    'logo_kifebe',
    'box_kifebe',
    'date_DHM',
    'logo_DHM',
    'box_DHM',
    'date_X',
    'logo_X',
    'box_X',
    'date_KFV',
    'logo_KFV',
    'box_KFV',
    'date_Jugendwart',
    'logo_Jugendwart',
    'box_Jugendwart',
    'date_Trainer',
    'logo_Trainer',
    'box_Trainer',
    // Misc: (none)
]

for (let x of my_boxes) {
    if (document.getElementById(x)) {
        observer.observe(document.getElementById(x))
    }
}

// Insert the "click for more information" in the beginning:
function ClickForInformation() {
    // Academic formation:
    if (document.getElementsByTagName('h1')[0].innerText === "Academic Formation") {
        document.getElementById('info_phd_program').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_master_degree').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_master_program').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_bachelor_degree').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_bachelor_program').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_abitur_program').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
    }

    // Miscellaneous:
    if (document.getElementsByTagName('h1')[0].innerText === "Miscellaneous") {
        document.getElementById('info_english').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_french').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
        document.getElementById('info_spanish').innerHTML = "<i>click for more information</i><br>" +
        "<div class='more'><span>&#10094</span></div>";
    }
}

// Execute these two function on load:
window.onload = function() {
    PasteChangeDate();
    ClickForInformation();
};

// Add the text when clicking on the boxes:
let show_phd_program = 0;
let show_master_degree = 0;
let show_master_program = 0;
let show_bachelor_degree = 0;
let show_bachelor_program = 0;
let show_abitur_program = 0;
let show_english = 0;
let show_french = 0;
let show_spanish = 0;

// Academic Formation:
if (document.getElementsByTagName('h1')[0].innerText === "Academic Formation") {
    document.getElementById('box_phd_program').onclick = function () {
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
                "<li>2022–2023 University Didactic Certificate Program 'Pro Lehre'</li>" +
                "<li>2022 Economics of Ideas, Science and Innovation (online PhD lecture)</li>" +
                "<li>2021–2022 Behavioral & Experimental Economics (PhD course • University Hamburg)</li> </ul> <br> " +
                "<i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_phd_program = 0;
            document.getElementById('info_phd_program').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }
    }

    document.getElementById('box_master_degree').onclick = function () {
        if (show_master_degree === 0) {
            show_master_degree = 1;
            document.getElementById('info_master_degree').innerHTML = "<hr>Thesis topic: <br> 'Does the Economy Learn to " +
                "Cope with Pandemics?' <br> Grade: 1.0 (very good) <br><br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_master_degree = 0;
            document.getElementById('info_master_degree').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }

    }

    document.getElementById('box_master_program').onclick = function () {
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
                "</ul> <br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_master_program = 0;
            document.getElementById('info_master_program').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }
    }

    document.getElementById('box_bachelor_degree').onclick = function () {
        if (show_bachelor_degree === 0) {
            show_bachelor_degree = 1;
            document.getElementById('info_bachelor_degree').innerHTML = "<hr>Thesis topic: <br> 'An Economic Analysis of " +
                "the Naturalization Policy of the Federal Republic of Germany' <br> Grade: 1.7 (good) <br><br> " +
                "<i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_bachelor_degree = 0;
            document.getElementById('info_bachelor_degree').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }

    }

    document.getElementById('box_bachelor_program').onclick = function () {
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
                "</ul> <br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_bachelor_program = 0;
            document.getElementById('info_bachelor_program').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }

    }

    document.getElementById('box_abitur_program').onclick = function () {
        if (show_abitur_program === 0) {
            show_abitur_program = 1;
            document.getElementById('info_abitur_program').innerHTML = "<hr>Examination subjects: <ul> " +
                "<li>English (Advanced written course)</li>" +
                "<li>French (Advanced written course)</li>" +
                "<li>Geography (Advanced written course)</li>" +
                "<li>Mathematics (Basic written course)</li>" +
                "<li>German (Basic oral course)</li></ul>" +
                "<hr>Extracurricular certificates: <ul>" +
                "<li>Certificate European Studies</li></ul> <br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_abitur_program = 0;
            document.getElementById('info_abitur_program').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }

    }
}

// Miscellaneous:
if (document.getElementsByTagName('h1')[0].innerText === "Miscellaneous") {
    document.getElementById('box_english').onclick = function () {
        if (show_english === 0) {
            show_english = 1;
            document.getElementById('info_english').innerHTML = "<hr><ul> " +
                "<li>2017 & 2019 Academic language courses</li>" +
                "<li>2013–2015 Advanced course during second-level education</li>" +
                "<li>2010 & 2014 Scholar visits in Great Britain</li>" +
                "<li>2009–2012 Bilingual teaching</li></ul> <br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_english = 0;
            document.getElementById('info_english').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }
    }

    document.getElementById('box_french').onclick = function () {
        if (show_french === 0) {
            show_french = 1;
            document.getElementById('info_french').innerHTML = "<hr><ul> " +
                "<li>2013–2015 Advanced course during second-level education</li>" +
                "<li>2013–2015 Extra-curricular school group to prepare for the French language diploma</li>" +
                "<li>2010 & 2011 Franco-German school exchange</li></ul> <br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_french = 0;
            document.getElementById('info_french').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }
    }

    document.getElementById('box_spanish').onclick = function () {
        if (show_spanish === 0) {
            show_spanish = 1;
            document.getElementById('info_spanish').innerHTML = "<hr><ul> " +
                "<li>2018 Intensive academic language course</li></ul> <br> <i>click to close</i><br>" +
                "<div class='less'><span>&#10094</span></div>"
        } else {
            show_spanish = 0;
            document.getElementById('info_spanish').innerHTML = "<i>click for more information</i><br>" +
            "<div class='more'><span>&#10094</span></div>";
        }
    }
}
