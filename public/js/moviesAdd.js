window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    titulo.addEventListener('mouseover', function () {
        this.style.color = 'red'
    })

    let inputTitle = document.getElementById('titulo');
    let state = 0;

    const checkKey = (key) => {
        switch (true) {
            case key === 's' && state === 0:
                ++state
                break;
            case key === 'e' && state === 1:
                ++state
                break;
            case key === 'c' && state === 2:
                ++state
                break;
            case key === 'r' && state === 3:
                ++state
                break;
            case key === 'e' && state === 4:
                ++state
                break;
            case key === 't' && state === 5:
                ++state
                break;
            case key === 'o' && state === 6:
                state = 0;
                alert('SECRETO MAGICO')
                break;
            default:
                state= 0;
                break;
        }
    }

    inputTitle.addEventListener('keyup', (e) => {
        checkKey(e.key)
    })

    inputTitle.addEventListener('keyup', (e) => {
        console.log('keyup: ' ,e.key)
    })

    inputTitle.addEventListener('keypress', (e) => {
        console.log('keypress: ' ,e.key)
    })
}