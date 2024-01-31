function goToInstructions() {

    let swap = document.getElementById('container').style.display !== 'none';   
    if(swap == true){
        document.getElementById('container').style.display= 'none';
        document.getElementById('instructions').style.display = 'block';
    }else{
        document.getElementById('container').style.display= 'block';
        document.getElementById('instructions').style.display = 'none';
    }
   
        
}

function jumpToOptions() {
    let swap = document.getElementById('instructions').style.display !== 'none'; 
    alert(swap);
    if(swap == true){
        document.getElementById('instructions').style.display= 'none';
        document.getElementById('options').style.display = 'block';
    }
}

function htmlQuizQuestions() {
    alert('quiz started');
}