// ======================================
// PENSIUNEA PĂDUREA VERDE
// dashboard.js
// ======================================

const ROOMS = [
    "1A","2A","3A","4A","5A","6A",
    "1B","2B","3B","4B","5B","6B","7B","8B","9B"
];

function updateDashboard() {

    if (!db) return;

    const transaction = db.transaction("reservations", "readonly");
    const store = transaction.objectStore("reservations");

    const request = store.getAll();

    request.onsuccess = () => {

        const reservations = request.result;

        const today = new Date().toISOString().split("T")[0];

        let occupiedRooms = new Set();
        let checkInToday = 0;
        let checkOutToday = 0;

        reservations.forEach(r => {

            if (r.rooms) {

                r.rooms.forEach(room => {

                    occupiedRooms.add(room);

                });

            }

            if (r.checkIn === today)
                checkInToday++;

            if (r.checkOut === today)
                checkOutToday++;

        });

        document.getElementById("busyRooms").innerText =
            occupiedRooms.size;

        document.getElementById("freeRooms").innerText =
            ROOMS.length - occupiedRooms.size;

        document.getElementById("todayCheckIn").innerText =
            checkInToday;

        document.getElementById("todayCheckOut").innerText =
            checkOutToday;

    };

}
