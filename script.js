let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    let slides = document.getElementsByClassName("myslide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideindex = slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[1].className.replace("active","")
    }

    slides[slideIndex-1].style.display = 'block';

    dots[slideIndex-1].className += " active";
}

    


showSlides(slideIndex);