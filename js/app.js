
// =====================================
// PENSIUNEA PĂDUREA VERDE
// app.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Aplicația a pornit.");

    initNavigation();

});

function initNavigation() {

    const sections = [
        "dashboard",
        "calendar",
        "reservations"
    ];

    sections.forEach(section => {

        const element = document.getElementById(section);

        if (element) {
            element.style.display = "none";
        }

    });

    showSection("dashboard");

    document
        .getElementById("btnDashboard")
        .addEventListener("click", () => showSection("dashboard"));

    document
        .getElementById("btnCalendar")
        .addEventListener("click", () => showSection("calendar"));

    document
        .getElementById("btnReservations")
        .addEventListener("click", () => showSection("reservations"));

}

function showSection(sectionName) {

    const sections = [
        "dashboard",
        "calendar",
        "reservations"
    ];

    sections.forEach(section => {

        const element = document.getElementById(section);

        if (element) {

            element.style.display =
                section === sectionName
                    ? "block"
                    : "none";

        }

    });

}
