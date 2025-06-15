const bulb = document.querySelector('.bulb-img');
const button = document.querySelectorAll('.btn');

button.forEach(function(btn){
    btn.addEventListener('click', function(btnClick){
        if(btnClick.target.id === 'on'){
            bulb.src = 'bulb_on.jpg';
        }
        if(btnClick.target.id === 'off'){
            bulb.src = 'bulb_off.jpg';
        }
        
    })
})