document.getElementById('content').addEventListener('keyup', function (e) {  
    if (e.target.value.length >= 6) {
         document.getElementById('btn').removeAttribute('disabled')
        }
        else{
            document.getElementById('btn').setAttribute('disabled', "")
        }   
 })

document.getElementById('btn').addEventListener('click', function () {
    const olList = document.getElementById('ol-list');
    const contentInput = document.getElementById('content').value;
    const li = document.createElement('li');
    li.innerText = contentInput;
    olList.appendChild(li);
    document.getElementById('content').value = '';
    document.getElementById('btn').setAttribute('disabled', "")
  
})

document.getElementById('ol-list').addEventListener('click', function (e) {
    console.log('click');
    e.target.parentNode.removeChild(e.target)    
})
