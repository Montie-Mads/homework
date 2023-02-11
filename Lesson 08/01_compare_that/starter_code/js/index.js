
document.querySelector('#submit').onclick = function (e) {
  e.preventDefault();
  let comparison;
  let a = Number(document.querySelector('#a').value);
  let b = Number(document.querySelector('#b').value);

  //u r telling javacript to turn a and b into a number

  // Add comparison logic

  // if a is greater than b
  if (a > b) {
    comparison = ">"
  }

  //if b is greater than a
  if ( b > a ) {
    comparison = " < ";
  }


  //if they are equal 2 == or 3== also work!
  if ( b == a ) {
    comparison = "=";
  }

  //if neither isn't a number
  
  if ( typeof a != "number" || typeof b  != "number") {
    comparison = "N/A";
  }

  if (isNaN(a) || isNaN(b)) {
    comparison ="N/A";
  }


  document.querySelector('#comparison').innerText = comparison;
};
