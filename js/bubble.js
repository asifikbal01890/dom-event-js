
// 

document.getElementById('ol-list').style.border = '2px solid blue'

document.getElementById('ol-list').addEventListener('click', function (e) {
    console.log('click, blue');
    e.stopPropagation()
})

document.getElementById('list').style.border = '2px solid red'
document.getElementById('list').addEventListener('click', function (e) {
   
    console.log('click, red');
    
})

document.getElementById('section').style.border = '2px solid black'
document.getElementById('section').addEventListener('click', function (e) {
    console.log('click, black');
})
