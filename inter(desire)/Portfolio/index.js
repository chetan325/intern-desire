/* scroll section */
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    section .forEach(sec => {
        let top = window.scrollY;
        let  offset = sec.offsetTop - 150; 
        let hight = sec.offsetHeight ;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset * hight) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href"="+ id +]").classList.add("active");

            })
        
        }
    });
    /*___________________sticky nav bar=====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);



};