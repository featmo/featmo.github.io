let rps_array = ["rock", "paper", "scissors"];


//random hand
function random_hand(){
    let r = Math.floor(Math.random()*(3) )
    return rps_array[r];
}

function rps_go(player_hand){
    let rand_hand  = random_hand();
    if(player_hand.value == rand_hand){
        alert("CPU chose "+rand_hand+" Draw");
    }
    else if(player_hand.value == "rock"){
        if(rand_hand == "paper"){
            alert("CPU chose "+rand_hand+" You lose");
        }
        else{
            alert("CPU chose "+rand_hand+" You win");
        }           
    }
    else if(player_hand.value == "paper"){
        if(rand_hand == "scissors"){
            alert("CPU chose "+rand_hand+" You lose");
        }
        else{
            alert("CPU chose "+rand_hand+" You win");
        }
    }
    else if(player_hand.value == "scissors"){
        if(rand_hand == "rock"){
            alert("CPU chose "+rand_hand+" You lose");
        }
        else{
            alert("CPU chose "+rand_hand+" You win");
        }
    }

    //alert(random_hand());
}