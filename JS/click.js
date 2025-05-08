let clickCount = sessionStorage.getItem('clickCount') ? parseInt(sessionStorage.getItem('clickCount')) : 0;

document.getElementById("click-count").innerText = "Number of Anime's you've explored in Anime Lore Vault: " + clickCount;

function updateClickCount() {
    clickCount++;
    sessionStorage.setItem('clickCount', clickCount);
    document.getElementById("click-count").innerText = "Number of Anime's you've explored in Anime Lore Vault: " + clickCount;
}

document.querySelectorAll('.click-counter').forEach(item => {
    item.addEventListener('click', updateClickCount);
});