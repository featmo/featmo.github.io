//Gobals
const flowerImages = "../images/quiz_images/"
imageArray = ["rose", "tulip", "daisy"];
let imagePath = "";
let currentImage = document.getElementById("quiz_image");

let answerList = document.getElementsByName("answer")
let quizAnswer = ""; 

//random int from 0 to max;
function randomInt(max){
    return Math.floor(Math.random()*(max) ); //exclusive random
}

function generateMessage(){
    let quiz = document.getElementById("quiz_body");
    let message = document.getElementById("message");
    message.style.display = "initial"; 
    message
    quiz.remove();
}
//generate image
function generateImage(_currentImage_){
    randInt = randomInt(imageArray.length);
    imagePath  = flowerImages + imageArray[randInt]+ ".jpg";

    _currentImage_.src = imagePath;
    //Splice out specific image
    // 
    let index = imageArray.indexOf( imageArray[randInt] );  
    if(imageArray.length > 0){
         imageArray.splice(index, 1);
    }else{
        generateMessage();
    }
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
            //console.log(answer.value)
    });

}

function checkAnswer(){

    if(quizAnswer.length > 0){
        if(imagePath.includes(quizAnswer)){
            console.log("Correct Submitted: " +quizAnswer);
            alert("Correct Submitted: " +quizAnswer);
        }
        else{
            console.log("Incorrect Submitted: " +quizAnswer);
            alert("Incorrect Submitted: " +quizAnswer);
        }    
        generateImage(currentImage); 
        answerList.forEach((item) => {
            item.checked = false;
        });
    }

    
}
//generateMessage();
generateImage(currentImage)
console.log(imagePath)
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

