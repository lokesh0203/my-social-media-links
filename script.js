// Get elements
const whatsappTile = document.getElementById('whatsappTile');
const instagramTile = document.getElementById('instagramTile');
const youtubeTile = document.getElementById('youtubeTile');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const modalContent = document.getElementById('modalContent');

// Function to open modal with details and position it below the tile
function openModal(content, tile) {
    // Set modal content dynamically
    modalContent.innerHTML = content;

    // Get the position of the clicked tile
    const rect = tile.getBoundingClientRect();

    // Position the modal below the clicked tile
    modal.style.top = (rect.bottom + window.scrollY + 10) + 'px';  // 10px for a small gap
    modal.style.left = rect.left + 'px';  // Align with the left edge of the tile

    // Show the modal
    modal.style.display = "block";
}

// Event listeners for each tile
whatsappTile.addEventListener('click', function() {
    const whatsappDetails = `
        <h3>WhatsApp</h3>
        <p>Phone Number: <a href="tel:+918754641231">+918754641231</a></p>
        <p><a href="https://wa.me/918754641231" target="_blank">Click here to chat on WhatsApp</a></p>
    `;
    openModal(whatsappDetails, whatsappTile);
});

instagramTile.addEventListener('click', function() {
    const instagramDetails = `
        <h3>Instagram</h3>
        <p>Instagram Profile: <a href="https://www.instagram.com/_i_am__loki___/profilecard/?igsh=MTNvY255dmx6Mzg3ZQ==/" target="_blank">_i_am__loki__</a></p>
    `;
    openModal(instagramDetails, instagramTile);
});

youtubeTile.addEventListener('click', function() {
    const youtubeDetails = `
        <h3>YouTube</h3>
        <p>YouTube Channel: <a href="https://youtube.com/@packofwolfs7?si=Uavuca1Uh_8zGnp3" target="_blank">packofwolfs7</a></p>
    `;
    openModal(youtubeDetails, youtubeTile);
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
