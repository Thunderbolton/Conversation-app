searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    Object.values(allCards).filter((card) => {
        if(card.id.toLowerCase().includes(searchString)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    })
});