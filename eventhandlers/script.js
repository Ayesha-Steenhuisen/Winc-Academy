document.querySelector('#mybutton').addEventListener('click', function(){
    alert("Button clicked")
})

document.querySelector('#bgbutton').addEventListener('click', function(){
    // classList.toggle zet een class erbij als die er nog niet is, en haalt 'm weg als 'ie er wel is
    document.body.classList.toggle('red-background')
})