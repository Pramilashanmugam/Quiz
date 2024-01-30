function goToInstructions() {

    var swap = document.getElementById('container').style.display !== 'none';   
    if(swap == true){
        document.getElementById('container').style.display= 'none';
        document.getElementById('instructions').style.display = 'block';
    }else{
        document.getElementById('container').style.display= 'block';
        document.getElementById('instructions').style.display = 'none';
    }
   
        
}

function jumpToOptions() {
    alert(`am i working?`);
      
}
