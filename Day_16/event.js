const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.addEventListener('click',() => {
    box.innerHTML = 'Button Clicked!';
    box.style.backgroundColor = 'blue';
});

btn.addEventListener('dblclick',() => { 
    alert('Button Double Clicked!');
});



