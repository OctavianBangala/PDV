// ======================================
// PENSIUNEA PĂDUREA VERDE
// utils.js
// ======================================

function formatDate(date) {
    return new Date(date).toLocaleDateString("ro-RO");
}

function generateId() {
    return crypto.randomUUID();
}

function overlaps(start1, end1, start2, end2) {
    return (
        new Date(start1) <= new Date(end2) &&
        new Date(end1) >= new Date(start2)
    );
}

function showToast(message) {
    alert(message);
}
