// ======================================
// PENSIUNEA PĂDUREA VERDE
// dashboard.js
// ======================================

function loadDashboard() {

    if (!db) return;

    const transaction = db.transaction("reservations", "readonly");
    const store = transaction.objectStore("reservations");

    const request = store.getAll();

    request.onsuccess = () => {

        const reservations = request.result;

        const today = new Date().toISOString().split("T")[0];

        let occupiedRooms = new Set();

        let todayCheckIn = 0;
        let todayCheckOut = 0;

        reservations.forEach(reservation => {

            if (reservation.rooms) {

                reservation.rooms.forEach(room => {

                    occupiedRooms.add(room);

                });

            }

            if (reservation.checkIn === today)
                todayCheckIn++;

            if (reservation.checkOut === today)
                todayCheckOut++;

        });

        document.getElementById("busyRooms").innerText =
            occupiedRooms.size;

        document.getElementById("freeRooms").innerText =
            ROOMS.length - occupiedRooms.size;

        document.getElementById("todayCheckIn").innerText =
            todayCheckIn;

        document.getElementById("todayCheckOut").innerText =
            todayCheckOut;

    };

}
