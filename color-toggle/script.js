document.querySelector('#menu-btn').addEventListener('click', function(){
    document.querySelector('#color-menu').classList.toggle('visible')
})

// Neem alle li elementen in #color-menu
const lis = document.querySelectorAll('#color-menu li');
// l is hier het element, dus l verandert elke keer
lis.forEach(function (l) {
    // Voeg aan elke een eventlistener toe
    l.addEventListener('click', function() {
        // De nieuwe kleur staat in het data-color attribuut
        document.body.style.backgroundColor = l.dataset.color
        // Sluit het menu
        document.querySelector('#color-menu').classList.remove('visible')
    })
})