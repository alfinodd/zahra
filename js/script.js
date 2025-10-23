// toggle class aktif
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
// ===== CART POPUP FUNCTION =====
const cartBtn = document.querySelector('#shopping-cart');
const cartPopup = document.querySelector('#cart-popup');
const closeCart = document.querySelector('#close-cart');

cartBtn.onclick = (e) => {
  e.preventDefault(); // biar gak reload halaman
  cartPopup.style.display = 'block';
};

closeCart.onclick = () => {
  cartPopup.style.display = 'none';
};
