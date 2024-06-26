function openModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        console.log("Modal abierto: " + modalId);
    }
}

// Función para cerrar otros modals que no sean el de edición
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
        console.log("Modal cerrado: " + modalId);
    }
}

function openEditModal(id, modalType) {
    if (modalType === 'progress') {
        document.getElementById('editProgress').style.display = 'block';
        document.getElementById('edit_id_reading_progress').value = id;
    } else if (modalType === 'wishlist') {
        document.getElementById('editPreference').style.display = 'block';
        document.getElementById('edit_id_reading_wishlist').value = id;
    }
}