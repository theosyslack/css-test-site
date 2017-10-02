import './css/main.css';

window.addEventListener('load', function(){
    document.body.classList.remove('preload');
    let header = document.querySelector('.Header');
    let body = document.querySelector('.Body');

    window.addEventListener('scroll', function(e){
        let headerBoundaries = header.getBoundingClientRect();
        console.log('scroll')
        if (headerBoundaries.top === -1){
            header.classList.add('Header--is-sticky');
            body.classList.add('Body--dark-mode');
            
        } else {
            header.classList.remove('Header--is-sticky');
            body.classList.remove('Body--dark-mode');
        }
    })
});
