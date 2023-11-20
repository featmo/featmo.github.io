//Gobals
const flowerImages = "../images/quiz_images/"
imageArray = ["rose", "tulip", "daisy"];
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

    if(correct < 2){
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
    console.log("Index: "+imageArray[index]);
    console.log("Length: "+imageArray.length);
    
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
            console.log(answer.value)
    });

}

function checkAnswer(){
    // logic for getting the right answer     
    let index = imageArray.indexOf(image);
    if(quizAnswer.length > 0){     
        if(imageArray.length > 1){ // 1 is needed otherwise it breaks
            if(image.includes(quizAnswer)){
                correct.pop();
                console.log("Correct"); 
            }
            else{
                console.log("Incorrect");
            }
            imageArray.splice(index, 1);
            generateImage(quizImage);
        }
        else{
            generateMessage();
    
        }
    }else{
        alert("Please select an answer")
    }   
    answerList.forEach((item) => {
         item.checked = false;
    });
}

generateImage(quizImage);
console.log(imagePath)
console.log(image)
console.log(quizAnswer)
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

