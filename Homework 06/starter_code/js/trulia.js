

let truliaCards = document.getElementsByClassName("trulia-grid-item");





document.addEventListener('DOMContentLoaded', function (event) {
  //select the trulia-nav-toggle and add an event listner to it
  document.querySelector(".trulia-nav-toggle").addEventListener('click', function (e) {
    //prevent the click from refreshing the page
    e.preventDefault();
    // Toggle the navigation
    let toggleNav = document.querySelector('.trulia-nav > nav ul');
    
    for (let i = 0; i < toggleNav.length; i++) {
      toggleNav[i].classList.toggle('trulia-nav-mobilehide');
    }


  });





  for (let j = 0; j < truliaCards.length; j++) {

    // Add a click listener on each card
    truliaCards[j].addEventListener('click', function () {

      // Remove the featured class
      for (let j = 0; j < truliaCards.length; j++) {
        truliaCards[j].classList.remove('trulia-featured-grid-item');
      }

      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
    });
  }





});



