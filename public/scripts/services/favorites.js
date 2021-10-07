document.querySelector('.card-list').addEventListener('click', (e) => {
    const baseURL = ('http://localhost:3000');
    let svgTarget = e.target;
    if(!svgTarget.getAttribute('class')){
        fetch(`${baseURL}/favorites/${svgTarget.getAttribute('itemid')}`, {
            method: 'POST'
        }).then(() => {
            svgTarget.setAttribute('class', 'selected');
        }).catch(err => console.log(err))
    } else {
        fetch(`${baseURL}/favorites/${svgTarget.getAttribute('itemid')}`, {
            method: 'DELETE'
        }).then(() => {
            svgTarget.classList.toggle('selected');
        }).catch(err => console.log(err))
    }
    
})
