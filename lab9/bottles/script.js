
function bottles(number){
    if(number > 1){
        return number+" bottles of beer";
    }
    else if (number == 1){
        return number+" bottle of beer";
    }
    else{
        return "No more bottles of beer"
    }
}   

for(let i = 99; i > -1; i--){
    let p = document.createElement("p");
    let verse = ""
    document.body.appendChild(p);
    if( i == 0){
        verse = "No more bottles of beer on the wall, no more bottles of beer"+
                ". Go to the store and buy some more, 99 bottles of beer on the wall";
    }else{
        // make it plural or singular
       verse = bottles(i)+" on the wall, "+bottles(i)
                    +". Take one down and pass it around, "+bottles(i-1)+" on the wall";

    }


    p.textContent = verse;


}
