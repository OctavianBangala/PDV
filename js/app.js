
// =====================================
// PENSIUNEA PĂDUREA VERDE
// app.js
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Aplicația a pornit.");
    initDatabase();
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
// =====================================
// UI - Rezervări
// =====================================

let selectedRooms = [];

document.addEventListener("DOMContentLoaded", () => {

    createRooms();

    const btn = document.getElementById("newReservation");

    if(btn){

        btn.addEventListener("click", () => {

            document
                .getElementById("reservationForm")
                .classList.toggle("hidden");

        });

    }

});

function createRooms(){

    const container =
        document.getElementById("roomsContainer");

    if(!container) return;

    container.innerHTML = "";

    ROOMS.forEach(room=>{

        const div = document.createElement("div");

        div.className = "roomBox";

        div.innerHTML = `
            <strong>${room.id}</strong><br>
            <small>${room.name}</small>
        `;

        div.onclick = ()=>{

            div.classList.toggle("selected");

            if(selectedRooms.includes(room.id)){

                selectedRooms =
                    selectedRooms.filter(x=>x!==room.id);

            }else{

                selectedRooms.push(room.id);

            }

            console.log(selectedRooms);

        };

        container.appendChild(div);

    });

}
