
let grade_list;
let breaks;


function subject_fields(num){

        let input = document.createElement('input');
        let br = document.createElement('br');
        //let p = document.createElement('p');
    
        input.setAttribute("type", "number");
        input.setAttribute("class", "grade");
        
        br.setAttribute("class", "input_breaks");
        document.body.appendChild(input);
        document.body.appendChild(br);
        //document.body.appendChild(p);       
        //input.set
        grade_list = document.getElementsByClassName("grade");
    breaks = document.getElementsByClassName("input_breaks");
    console.log(num);
}

let subjects = document.getElementById("subjects");
subjects.setAttribute('type', 'number');
let n_subjects = subjects.value;

subjects.addEventListener('input', function () {     
    n_subjects = subjects.value;
    subject_fields(n_subjects)
    //console.log(subjects.value);
});

function generateSubjectFields(){
    subject_fields(n_subjects)
}

function clearSubjectFields(){
    location.reload();
}

function getLetterGrade(num){
    if(num > 39 && num <= 50)
        return "D"
    else if(num > 50 && num <= 70)
        return "C"
    else if(num > 70 && num <= 85)
        return "B"
    else if(num > 85 && num <= 100)
        return "A"
}

function getGrade(){
    let value = 0;
    if(grade_list.length > 0){
        for(let i = 0; i < grade_list.length; i++){
            value+=parseInt(grade_list[i].value) / grade_list.length;
        }
    }

    alert("Your Grade: "+getLetterGrade(value));
}

