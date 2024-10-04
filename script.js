const images = [
    'https://upload.wikimedia.org/wikipedia/commons/b/b8/Porsche_991_silver_IAA.jpg',
    'https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2022/11/manhart-991-gt2-rs-2874893.jpg',
    'https://cdn.motor1.com/images/mgl/Oo3xke/s3/mansory-p9lm-evo-900-porsche-911-turbo-s.jpg',
    'https://www.suncoastparts.com/mm5/graphics/00000002/11/M01_GT3RS_MR_34Front_wf06_JDM_huge%20copy.jpg'
];

const gridImages = document.querySelectorAll('.grid-image');
const message = document.getElementById('message');

// Cambia la imagen al hacer clic
gridImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        img.src = images[(index + 1) % images.length]; 
        showMessage();
    });
});

// Función para mostrar el mensaje
function showMessage() {
    message.style.opacity = 1;
    setTimeout(() => {
        message.style.opacity = 0;
    }, 1500);
}

// Cambio de estilos de las imágenes
document.getElementById('circular').addEventListener('click', () => {
    gridImages.forEach(img => {
        img.classList.toggle('circular');
        img.classList.remove('square', 'portrait'); 
    });
    setActiveButton('circular');
});

document.getElementById('square').addEventListener('click', () => {
    gridImages.forEach(img => {
        img.classList.toggle('square');
        img.classList.remove('circular', 'portrait'); 
    });
    setActiveButton('square');
});

document.getElementById('portrait').addEventListener('click', () => {
    gridImages.forEach(img => {
        img.classList.toggle('portrait');
        img.classList.remove('circular', 'square'); 
    });
    setActiveButton('portrait');
});

// Cambio de layout del grid
document.getElementById('two-columns').addEventListener('click', () => {
    document.querySelector('.image-grid').style.gridTemplateColumns = 'repeat(2, 1fr)';
    setActiveButton('two-columns');
});

document.getElementById('three-columns').addEventListener('click', () => {
    document.querySelector('.image-grid').style.gridTemplateColumns = 'repeat(3, 1fr)'; // Cambiar a 3 columnas
    setActiveButton('three-columns');
});

// Función para marcar el botón activo
function setActiveButton(activeId) {
    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.id === activeId) {
            button.classList.add('active');
        }
    });
}
