// Default slide start index
let slideIndex = 1;


// call the function created below
showSlide(slideIndex);

// increase the index by 1
function nextSlide(n) {
    showSlide(slideIndex +=n);
}

// set the current slide/circle
function positionSlide(n) {
    showSlide(slideIndex=n);
}



// slide function

function showSlide(n) {
    let i;
//     // get the elements with the class name "slide"
    let slides = document.getElementsByClassName('slide');
//     // get the elements with the class name "circle"
    let circles = document.getElementsByClassName('circle');          
    
// // Check the number of slides
    if(n > slides.length) {
        slideIndex = 1;
    } 
    
    if ( n < 1) {
        slideIndex = slides.length(); 
    }

    // Loop through each slide in for a loop
    for (let slide of slides) {
        slide.style.display = 'none';
       
    }

    // Loop through each circle in for a loop 
    for (let circle of circles) {
        circle.className = circle.className.replace(' active', ''); 
    }

    // for(i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }

    // for(i = 0; i < circles.length; i++) {
    //     circles[i].className = circles[i].className.replace(" active", "");
    // }

//     // making img block
    slides[slideIndex-1].style.display = 'block';
//     // making circle class active
    circles[slideIndex-1].className += ' active';

   
}
