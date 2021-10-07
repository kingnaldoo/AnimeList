const input = document.querySelector('.dropdown-toggle')
const menuSearchResults = document.querySelector('.dropdown-menu')

input.addEventListener('focus', () => {
    if(input.value !== 0)
        document.querySelector('.dropdown-menu').classList.toggle('show')
})

input.addEventListener('keyup', () => {
    const baseURL = ('http://localhost:3000');
    menuSearchResults.innerHTML = null;

    fetch(`${baseURL}/search-results?title=${input.value}`)
        .then(e => e.json())
        .then(searchResults => {
            if(searchResults == [])
                menuSearchResults.innerText = 'Nenhum resultado encontrado'
            else {
                searchResults.forEach(anime => {
                    const searchItem = document.createElement('a');
                    const infoItem = document.createElement('div');
                    const title = document.createElement('h3');
                    const description = document.createElement('p');
                    const coverItem = document.createElement('div');
                    const img = document.createElement('img');
    
                    title.innerText = anime.titles.en;
                    description.innerText = anime.descriptions.en.substring(0, 250);
                    img.setAttribute('src', anime.cover_image);
                    img.setAttribute('alt', anime.titles.en);
                    searchItem.setAttribute('href', `/anime?id=${anime.id}`)
                    infoItem.className = 'info-item';
                    coverItem.className = 'cover-item';
                    searchItem.className = 'dropdown-item';
                    
                    infoItem.appendChild(title);
                    infoItem.appendChild(description);
                    coverItem.appendChild(img);
                    searchItem.appendChild(infoItem);
                    searchItem.appendChild(coverItem);
                    
                    
                    menuSearchResults.appendChild(searchItem);
                })
            }
            
            
        })
})