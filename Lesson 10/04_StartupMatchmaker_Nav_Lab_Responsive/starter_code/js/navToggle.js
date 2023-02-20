document.addEventListener('DOMContentLoaded', function (event) {

    //target the nav-toggle and add an event listener function to it. don't forget to add the # for the id nav-toggle because i always forget
    document.querySelector("#nav-toggle").addEventListener('click', function (e) {

        // make it so that when it is clicked, it does not refresh the page with (e).preventDefault(); 
        e.preventDefault();
        //toggle the nav to show/hide when the hamburger id clicked
        document.querySelector(".main-nav").classList.toggle("main-nav-mobilehide")
    });


});