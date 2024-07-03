const mobMenuBtn = document.querySelector(".mobile-menu-open-button")
const mobMenuCloseBtn = document.querySelector(".mobile-menu-close-button")

const backdropMobMenu = document.querySelector(".backdrop-mobile") 

const contactFormBtn = document.querySelector(".order-button")
const contactFormCloseBtn = document.querySelector(".modal-close-button")

const backdropContactForm = document.querySelector(".backdrop") 

mobMenuBtn.addEventListener("click", function() {
    backdropMobMenu.classList.add("is-open")
})

mobMenuCloseBtn.addEventListener("click", function() {
    backdropMobMenu.classList.remove("is-open")
})

contactFormBtn.addEventListener("click", function() {
    backdropContactForm.classList.add("is-open")
})

contactFormCloseBtn.addEventListener("click", function() {
    backdropContactForm.classList.remove("is-open")
})