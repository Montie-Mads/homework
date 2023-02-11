// Try making the traffic light work - Think through the problem BEFORE you code!

// when you click the stopButton button the *red light turns on* and turns off the green and yellow buttons



document.getElementById('stopButton').addEventListener("click", function () {
    document.getElementById('stopLight').classList.add('red');

    document.getElementById('slowLight').classList.remove("yellow");
    document.getElementById('goLight').classList.remove("green");

});


//when you click the slowButton the *yellow light* turns on and turns off the red and green buttons
document.getElementById("slowButton").addEventListener("click", function () {
    document.getElementById("slowLight").classList.add("yellow");
    document.getElementById('stopLight').classList.remove('red');
    document.getElementById('goLight').classList.remove('green');
});


//when you click the goButton the *green light turns on* and turns off the red and yellow buttons

document.getElementById("goButton").addEventListener("click", function () {
    document.getElementById("goLight").classList.add("green");
    document.getElementById('stopLight').classList.remove('red');
    document.getElementById('slowLight').classList.remove('yellow');
});

// You'll use addEventListener and getElementById if you're doing it right...


// function stopLight() {
//     document.getElementById('stopLight').classList.add('red');
// }


// document.getElementById('stopButton').addEventListener('click', stopLight);

// document.getElementById('stopButton').onclick = illuminateRed;
// document.getElementById('slowButton').onclick = illuminateYellow;
// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateRed() {
//     clearLights();
//     document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//     clearLights();
//     document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// function illuminateGreen() {
//     clearLights();
//     document.getElementById('goLight').style.backgroundColor = "green";
// }


// function clearLights() {
//     document.getElementById('stopLight').style.backgroundColor = "black";
//     document.getElementById('slowLight').style.backgroundColor = "black";
//     document.getElementById('goLight').style.backgroundColor = "black";
// }

// function addRed() {
//     document.getElementById('stopButton').addEventListener('click', function () {

//         document.getElementById(stopLight).style.backgroundColor = "red"

//     });
// }

// function changeColor(red) {
//     const elem = document.getElementById('stopLight');
//     elem.style.color = "red";
//   }