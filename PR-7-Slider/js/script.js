let slides = document.querySelectorAll('.slide-item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let currentIndex = 0;

function removeActiveclass(){
    slides.forEach(slide => slide.classList.remove('active'));
}

next.addEventListener('click',() => {
    currentIndex = (currentIndex + 1) % slides.length;
    // console.log(currentIndex);
    removeActiveclass();
    slides[currentIndex].classList.add('active');
});

prev.addEventListener('click',() => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    // console.log(currentIndex);
    removeActiveclass();
    slides[currentIndex].classList.add('active');
})