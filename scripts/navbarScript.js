function dropdownMenu() {
    const dropdown = document.getElementById("dropdown_click");
    if (dropdown.className === "topnav") {
        dropdown.className += " mobile";
    }
    else {
        dropdown.className = "topnav";
    }
}

const dropdownIcon = document.querySelector(".dropdown_icon");

dropdownIcon.addEventListener("click", function (e) {
    dropdownMenu();
    event.preventDefault();
});