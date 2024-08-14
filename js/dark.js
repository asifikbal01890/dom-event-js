 document.getElementById('mood').style.border = '2px solid black'

document.getElementById('mood').addEventListener('click', function () {
    if (document.getElementById('mood').innerText === 'dark') {
        document.getElementById('body').style.backgroundColor = 'black'
        document.getElementById('body').style.color = 'white'
        document.getElementById('mood').style.backgroundColor = 'black'
        document.getElementById('mood').style.color = 'white'
        document.getElementById('mood').style.border = '2px solid white'
        document.getElementById('mood').innerText = 'light'
    }
    else{
        document.getElementById('body').style.backgroundColor = 'white'
        document.getElementById('body').style.color = 'black'
        document.getElementById('mood').style.backgroundColor = 'white'
        document.getElementById('mood').style.color = 'black'
        document.getElementById('mood').style.border = '2px solid black'
        document.getElementById('mood').innerText = 'dark'
    }
   
    
})