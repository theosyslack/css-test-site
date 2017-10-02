import './css/main.css';
window.addEventListener('load', function(){
    document.body.classList.remove('preload');
});
window.addEventListener('scroll', function(e){
    let header = document.querySelector('.Header');
    let body = document.querySelector('.Body');
    let headerBoundaries = header.getBoundingClientRect();
    
    if (headerBoundaries.top === -1){
        header.classList.add('Header--is-sticky');
        body.classList.add('Body--dark-mode');
        
    } else {
        header.classList.remove('Header--is-sticky');
        body.classList.remove('Body--dark-mode');
    }
})