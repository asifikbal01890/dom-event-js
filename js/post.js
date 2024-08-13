

// document.getElementById('content').addEventListener('keyup', function (event) {
//     const text = event.target.value;
     
//    })
// document.getElementById('content').addEventListener('click', function (e) {
//     e.target.value = ''
//     console.log(e.target.value);
    
// })
      

document.getElementById('post').addEventListener('click', function () {
const sectionP = document.getElementById('article-section');
 const text =  document.getElementById('content').value;
 const article = document.createElement('article')
 article.innerText = text
sectionP.appendChild(article)



   })
 
    
