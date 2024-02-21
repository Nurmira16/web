const navbar=document.querySelector('.header')
window.addEventListener('scroll',()=>{
    if(window.scrollY>=50){
        navbar.classList.add('active')
    }
    else{
        navbar.classList.remove('active')
    }
})


const contactForm=()=>{
    const overlay=document.getElementById('overlay')
    const form=document.querySelector('.contactForm')

    overlay.style.display=(overlay.style.display=='block')?'none':'block'
    form.style.display=(form.style.display=='flex')?'none':'flex'
    
}
