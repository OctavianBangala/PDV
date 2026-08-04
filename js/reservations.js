// ==========================================
// PENSIUNEA PADUREA VERDE
// reservations.js
// ==========================================

const ROOMS = [
    "1A","2A","3A","4A","5A","6A",
    "1B","2B","3B","4B","5B","6B","7B","8B","9B"
];

let reservations = [];

function addReservation(reservation){

    reservations.push(reservation);

    saveReservations();

    renderReservations();

    updateDashboard();

}

function deleteReservation(id){

    reservations = reservations.filter(r=>r.id!==id);

    saveReservations();

    renderReservations();

    updateDashboard();

}

function saveReservations(){

    localStorage.setItem(
        "pdv_reservations",
        JSON.stringify(reservations)
    );

}

function loadReservations(){

    reservations = JSON.parse(
        localStorage.getItem("pdv_reservations")
        || "[]"
    );

    renderReservations();

}

function renderReservations(){

    const list =
        document.getElementById("reservationList");

    if(!list) return;

    list.innerHTML="";

    reservations.forEach(r=>{

        list.innerHTML +=`

<div class="reservation-card">

<h3>${r.client}</h3>

<p>Camere: ${r.rooms.join(", ")}</p>

<p>${r.checkIn} → ${r.checkOut}</p>

<button onclick="deleteReservation('${r.id}')">

Șterge

</button>

</div>

`;

    });

}

window.addEventListener("load",loadReservations);
