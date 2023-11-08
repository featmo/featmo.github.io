function dropdownMenu(){
    var dropdown= document.getElementById("dropdown_click");
        if(dropdown.className=== "topnav"){
        dropdown.className+= " mobile";
        }
        else{
        dropdown.className= "topnav";
        }
}

document.getElementById("dropdown_icon").addEventListener("click", dropdownMenu(){
event.preventDefault;
});