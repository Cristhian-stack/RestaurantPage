/* VARIBALES */
const OpenMnu = document.getElementById('OpenMenu');
const CloseMenu = document.getElementById('CloseMenu');
const CajaMenu = document.querySelector('div.MenuMovil');
const Body = document.querySelector('body');
/* EVENTOS */
OpenMnu.addEventListener('click', AbrirMenu);
CloseMenu.addEventListener('click', CerrarMenu);



/* FUNCIONES */
function AbrirMenu() {
    CajaMenu.style.display = 'flex';
    Body.style.overflow = 'hidden';
    OpenMnu.style.display = 'none';
    CloseMenu.style.display = 'block';
}

function CerrarMenu() {
    CajaMenu.style.display = 'none';
    Body.style.overflow = 'auto';
    OpenMnu.style.display = 'block';
    CloseMenu.style.display = 'none';
}