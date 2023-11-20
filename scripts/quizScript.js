//Gobals
const flowerImages = "../images/quiz_images/"
let imageArray = ["rose", "tulip", "daisy"];
let imagePath = "";
let image = "";
let quizImage = document.getElementById("quiz_image");

let answerList = document.getElementsByName("answer")
let quizAnswer = "";

let correct = [1,2,3]; //novel approach to holding correct guesses, values can be arbitrary

//random int from 0 to max;
function randomInt(max){
    return Math.floor(Math.random()*(max) ); //exclusive random
}

// novel key generation
function generateKey(){
    let seq = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let key = ["TFC_"];
    for(let i = 0; i < 10; i++){
        key.push(seq[randomInt(seq.length)]);
    }   
    return key.join('');
}

function generateMessage(){
    let quiz = document.getElementById("quiz_body");
    let win = document.getElementById("win");   
    let loss = document.getElementById("loss");
    let key = document.getElementById("key");

    if(correct.length >= 2){
        win.style.display = "initial";
        key.textContent = generateKey();
    }
    else{
        loss.style.display = "initial"; 
    }   
    quiz.remove();
}
//generate image
function generateImage(_currentImage_){
    randInt = randomInt(imageArray.length);
    image = imageArray[randInt];
    imagePath  = flowerImages + image+ ".jpg";
     _currentImage_.src = imagePath; 
    let index = imageArray.indexOf( image );  
    console.log("Image name: "+imageArray[index]);
    //console.log("Length: "+imageArray.length);
    
}

// https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group
function oneSelect(answer){
    /**
     * iterate through checkbox answers
     * uncheck all but one
     */
    
    answerList.forEach((item) => {
        if(item !== answer)
            item.checked = false;
            quizAnswer = answer.value;
            console.log("Selected answer: "+ answer.value)
    });

}

function checkAnswer(){
    // logic for getting the right answer
    // let index = imageArray.indexOf(image);
    try{ 
    // I just can't seem to get this right so I'm using some error handling
    // to deal with the unndefined bugs
        if(imageArray.length > 1){
            imageArray.splice(imageArray.indexOf(image), 1);
            if(image.includes(quizAnswer)){
                console.log("Correct the answer was " + image);
            }
            else{
                console.log("Incorrect the answer was " + image);
                correct.pop();
            }
        }else{
            generateMessage();
        }

        generateImage(quizImage);       
        answerList.forEach((item) => {
             item.checked = false;
        });
        
    }catch(e){
        generateMessage();
    }

    console.log("Correct: "+correct.length)
    console.log("Image Array: "+imageArray.length)
}
function copyToClip(key){
    navigator.clipboard.writeText(key.textContent);
    alert("Copied "+key.textContent);
}
function reloadPage(){
    location.reload();
}

generateImage(quizImage);
// console.log("Correct: "+correct.length);
// console.log("Image Array: ");
// for(let i = 0; i < imageArray.length; i++){
//     console.log(imageArray[i]);
// }


// console.log(image)
// console.log(quizAnswer)
//document.body.appendChild(randomImage());

/**
 * Major todo is to refactor the way he functions qccess the data
 * currenntly it's very haphazard
 * somefunctions directly reference variables
 * orthers return and manipulate
 * all in all needs to have a standardised  design
 * this will work for the time being however
 * 
 */
/*
* todo
* 
* get images
* randomly display images every reload
* 
* list of answers:
* if image path string contains answer substring:
*     print correct
*     do something else
* else
*     incorrect
* 
*/

