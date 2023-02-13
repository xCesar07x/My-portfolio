// const menu = document.querySelector(".nav-menu")
// const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         const id = entry.target.getAttribute("id");
//         const menuLink = document.querySelector(`.nav-menu a[href="#${id}"]`)

//         if(entry.isIntersecting){
//             menuLink.classList.add("selected");
//         }else{
//             menuLink.classList.remove("selected")
//         }
//     })
// }, {rootMargin: "-50%px 0px -50%px 0px"})

// menuLinks.forEach(menuLink => {
//     menuLink.addEventListener("click", function() {
//         menu.classList.remove()
//     })

//     const hash = menuLink.getAttribute("href");
//     const target = document.querySelector(hash);
//     if(target) {
//         observer.observe(target);
//     }
// })