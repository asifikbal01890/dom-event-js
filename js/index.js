// option-02:
function bgBlackColor() {
    document.getElementById('body').style.backgroundColor = 'black';
}

// option - 03:

const blueBTN = document.getElementById('bg-blue');
blueBTN.addEventListener('click', btnClick); /* don't call the function */

function btnClick() {
    document.getElementById('body').style.backgroundColor = 'blue';
}

// option - 03: another way
const orangeColor = document.getElementById('bg-orange');
//  orangeColor.addEventListener('click', function color () {})
orangeColor.addEventListener('click', function color() {
    document.getElementById('body').style.backgroundColor = 'orange'
})

//option - 04:final with anonymous function
//  document.getElementById('bg-purple').addEventListener('click', function(){})

document.getElementById('bg-purple').addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = 'purple'
})