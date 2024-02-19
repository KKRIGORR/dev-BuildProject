const installGenplan = () => {
    const address = document.querySelector('#address')
    const floor = document.querySelector('#floor')
    const flat = document.querySelector('#flat')
    const builds = document.querySelectorAll('.build-path')


    builds.forEach(build => {
        build.addEventListener('mouseover', () => {
            const buildAddress = build.getAttribute('data-address')
            const buildFloor = build.getAttribute('data-floor-quantity')
            const buildFlat = build.getAttribute('data-flat-quantity')

            address.innerHTML = buildAddress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })
}

document.querySelector('.genplan') ? installGenplan() : null

const headerNav = document.querySelector('.header-nav')
const hamburger = document.querySelector('.hamburger')

console.log(headerNav);

hamburger.addEventListener('click', () => {
    console.log(hamburger);
    headerNav.classList.toggle('show')
})

const arrayBurgers = document.querySelectorAll('.hamburger')
  
  if (arrayBurgers.length > 0) {
      arrayBurgers.forEach(item => {
        item.addEventListener('click', function(){
          item.classList.toggle('is-active');
      })
    })
  }