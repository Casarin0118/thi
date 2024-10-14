// Script para o funcionamento do carrossel
const carousels = document.querySelectorAll('.carousel');
carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    // Função para mostrar a imagem atual
    function showImage(index) {
        images.forEach((img, idx) => {
            img.classList.remove('active');
            if (idx === index) {
                img.classList.add('active');
            }
        });
    }

    // Adiciona evento de clique nos botões
    carousel.parentNode.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    carousel.parentNode.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
});