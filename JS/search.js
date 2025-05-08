function searchAnime() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const animeLinks = document.querySelectorAll('.list-group-item');
    let foundAny = false;
    
    animeLinks.forEach(link => {
        const animeName = link.textContent.toLowerCase();
        if (animeName.includes(searchInput)) {
            link.style.display = 'block';
            foundAny = true;
        } else {
            link.style.display = 'none';
        }
    });

    // Show message if no results found
    const messageContainer = document.getElementById('search-message-container');
    if (!foundAny) {
        messageContainer.innerHTML = '<div class="alert alert-info mt-3" style="color: black; font-weight: bold; font-size: 18px;">Sorry, we don\'t have information about this anime in our vault. Please try searching for another anime.</div>';
    } else {
        messageContainer.innerHTML = '';
    }
}

// Add event listener for Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchAnime();
    }
});