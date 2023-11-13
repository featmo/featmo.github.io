
function startHover() {
    teddy.classList.add('.hover');
    console.log("Is Hovering");
}

function stopHover() {
    teddy.classList.remove('.hover');
    console.log("Is not Hovering");
}


var teddy = document.getElementById('teddy');
teddy.addEventListener('mouseover', (event) => startHover());
teddy.addEventListener('mouseleave', (event) => stopHover());