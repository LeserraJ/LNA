



function scrollToElement(about) {
    window.scrollTo({
        top: about.offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById('scrollAbout').addEventListener('click', function (event){
    event.preventDefault(); // Prevent Default Link Behavior
    let about = document.getElementById('about');
    scrollToElement(about);
});