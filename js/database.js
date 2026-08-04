// ======================================
// PENSIUNEA PĂDUREA VERDE
// database.js
// ======================================

const DB_NAME = "PDV_DATABASE";
const DB_VERSION = 1;

let db = null;

function initDatabase() {

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {

        console.error("Eroare deschidere baza de date.");

    };

    request.onsuccess = (event) => {

        db = event.target.result;
        updateDashboard();
        console.log("Baza de date conectată.");

    };

    request.onupgradeneeded = (event) => {

        db = event.target.result;

        if (!db.objectStoreNames.contains("reservations")) {

            const reservations = db.createObjectStore("reservations", {
                keyPath: "id",
                autoIncrement: true
            });

            reservations.createIndex("client", "client");
            reservations.createIndex("phone", "phone");
            reservations.createIndex("checkIn", "checkIn");
            reservations.createIndex("checkOut", "checkOut");

        }

    };

}
