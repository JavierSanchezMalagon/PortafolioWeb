const hamburguer = document.querySelector('.header__nav--image')
const menu = document.querySelector('.nav__list')


hamburguer.addEventListener('click', ()=> {
    menu.classList.toggle("spread")  /*Agregar la clase spread en HTML*/
})

window.addEventListener('click', e =>{
    /* e.target cuando se da click fuera del nav, cuando se da click al icono */
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer)
    {
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})