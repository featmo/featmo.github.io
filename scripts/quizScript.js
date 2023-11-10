const flowerImages = "../images/quiz_images/"
imageArray = ["rose", "tulip", "daisy"];

let imagePath = "";
let currentImage = document.getElementById("quiz_image");
let quizAnswer = ""; 

//random int from 0 to max;
function randomInt(max){
    return Math.floor(Math.random()*(max) ); //exclusive random
}

//random image path
function randomImagePath(){
    randInt = randomInt(3);
    imagePath  = flowerImages + imageArray[randInt]+ ".jpg";
    return imagePath;
}

//generate image
function generateImage(_currentImage_){
    _currentImage_.src = randomImagePath();
}
// https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group
function oneSelect(answer){
    /**
     * iterate through checkbox answers
     * uncheck all but one
     */
    let answerList = document.getElementsByName("answer")
    answerList.forEach((item) => {
        if(item !== answer)
            item.checked = false;
            quizAnswer = answer.value;
            //console.log(answer.value)
    });

}

function checkAnswer(){
    if(imagePath.includes(quizAnswer)){
        console.log("Correct Submited: " +quizAnswer);
    }
    else{
        console.log("Incorrect Submited: " +quizAnswer);
    }    
    generateImage(currentImage);
    
}

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

