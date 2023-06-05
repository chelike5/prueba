const navBar = document.getElementById('navbar');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');



abrir.addEventListener('click', () => {
    navBar.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    navBar.classList.remove('visible');


})

function mostrarPan(){
    document.getElementById('pan').style.display = '';
    document.getElementById('charcuteria').style.display = 'none';
    document.getElementById('varios').style.display = 'none'
}

function mostrarCharcuteria(){
    document.getElementById('pan').style.display = 'none';
    document.getElementById('charcuteria').style.display = 'block';
    document.getElementById('varios').style.display = 'none'
}

function mostrarVarios(){
    document.getElementById('pan').style.display = 'none';
    document.getElementById('charcuteria').style.display = 'none';
    document.getElementById('varios').style.display = 'block'
}