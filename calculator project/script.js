let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

buttonsArray.forEach(btn => {

    btn.addEventListener('click',(e) => {
        console.log(e.target)
    });
});