



function scrollToElementAbout(about) {
    window.scrollTo({
        top: about.offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById('scrollAbout').addEventListener('click', function (event){
    event.preventDefault(); // Prevent Default Link Behavior
    let about = document.getElementById('about');
    scrollToElementAbout(about);
});



function scrollToElementProducts(products) {
    window.scrollTo({
        top: products.offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById('scrollProducts').addEventListener('click', function (event){
    event.preventDefault(); // Prevent Default Link Behavior
    let products = document.getElementById('products');
    scrollToElementProducts(products);
});


function scrollToElementContact(contact) {
    window.scrollTo({
        top: contact.offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById('scrollContact').addEventListener('click', function (event){
    event.preventDefault(); // Prevent Default Link Behavior
    let contact = document.getElementById('contact');
    scrollToElementContact(contact);
});

function scrollToElementTop(theTop) {
    window.scrollTo({
        top: theTop.offsetTop,
        behavior: 'smooth'
    });
}

document.getElementById('top').addEventListener('click', function (event){
    event.preventDefault(); // Prevent Default Link Behavior
    let theTop = document.getElementById('theTop');
    scrollToElementContact(theTop);
});