function burgerMenu(){
    const menu=document.querySelector('#menu')
    const burger = document.querySelector('.burger')

    burger.addEventListener('click',()=>{
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    })
}

burgerMenu()

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })