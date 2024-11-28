// Get elements
const whatsappTile = document.getElementById('whatsappTile');
const instagramTile = document.getElementById('instagramTile');
const youtubeTile = document.getElementById('youtubeTile');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const modalContent = document.getElementById('modalContent');

// Function to open modal with details
function openModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = "block";
}

// Event listeners for each tile
whatsappTile.addEventListener('click', function() {
    const whatsappDetails = `
        <h3>WhatsApp</h3>
        <p>Phone Number: <a href="tel:+9187546412431">+8754641231</a></p>
        <p><a href="https://wa.me/8754641231" target="_blank">Click here to chat on WhatsApp</a></p>
    `;
    openModal(whatsappDetails);
});

instagramTile.addEventListener('click', function() {
    const instagramDetails = `
        <h3>Instagram</h3>
        <p>Instagram Profile: <a href="https://www.instagram.com/_i_am__loki___/profilecard/?igsh=MTNvY255dmx6Mzg3ZQ==/" target="_blank">yourusername</a></p>
    `;
    openModal(instagramDetails);
});

youtubeTile.addEventListener('click', function() {
    const youtubeDetails = `
        <h3>YouTube</h3>
        <p>YouTube Channel: <a href="https://youtube.com/@packofwolfs7?si=Uavuca1Uh_8zGnp3" target="_blank">Your Channel</a></p>
    `;
    openModal(youtubeDetails);
});

// Close modal when the user clicks on <span> (x)
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close modal when the user clicks anywhere outside the modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});