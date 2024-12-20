let index = 0;

function moverSlide(direcao) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Atualiza o índice de acordo com a direção
    index += direcao;

    // Se for o último slide, volta para o primeiro
    if (index >= totalSlides) {
        index = 0;
    }

    // Se for o primeiro slide, vai para o último
    if (index < 0) {
        index = totalSlides - 1;
    }

    // Move os slides para a posição correta
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}