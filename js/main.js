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

window.addEventListener('scroll', function() {
    var scrollingDiv = document.getElementById('about');
    var scrollPosition = window.scrollY;

    // Adjust the value (200 in this example) to your desired scroll threshold
    if (scrollPosition > 675) {
        scrollingDiv.classList.add('visible');
    } else {
        scrollingDiv.classList.remove('visible');
    }
});
window.addEventListener('scroll', function() {
    var scrollingDiv = document.getElementById('projects');
    var scrollPosition = window.scrollY;

    // Adjust the value (200 in this example) to your desired scroll threshold
    if (scrollPosition > 1970) {
        scrollingDiv.classList.add('visible');
    } else {
        scrollingDiv.classList.remove('visible');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading page after 3 seconds
    setTimeout(function() {
        var loadingPage = document.getElementById('loadingPage');
        var content = document.getElementById('content');

        loadingPage.style.opacity = '0';
        content.style.opacity = '1';
        loadingPage.style.minHeight='0'

        // Show scrollbars after loading
        document.body.style.overflow = 'visible';
    },2000);
});
console.log(window.scrollY)