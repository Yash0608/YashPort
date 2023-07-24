burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
left=document.querySelector('.left')
right=document.querySelector('.right')

burger.addEventListener('click',()=>{
    right.classList.toggle('v-class-resp');
    left.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})