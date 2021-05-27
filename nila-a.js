function add() {
    var number1 = parseInt(document.getElementById("inum1").value);
    // var number2 = parseInt(document.getElementById("inum2").value);
    if (number1 = NaN) {
        alert("Enter a number")
    } else {
        
    }
    
    var option1 =  document.getElementById("option1").value;
    var option2 =  document.getElementById("option2").value;
    var neednumber = option1 + option2
    debugger
    //console.log(option1 + " " + option2)
    

    // var addition = number1 + number2
    // console.log(number1 + number2)  
    

    
    // if(option1 === option2){
    //     document.getElementById("answer").innerHTML = number1 ;
    // }
    // else if( (option1 && option2) == ("M" && "I") ){
    //     document.getElementById("answer").innerHTML = number1 * 39.37
    // }
    // else if ((option1 && option2) == ("M" && "C")){
    //     document.getElementById("answer").innerHTML = number1 * 100
    // }
    // else if ((option1 && option2 ) == ("I" && "M")){
    //     document.getElementById("answer").innerHTML = number1 / 39.37
    // }
    // else if ((option1 && option2) == ("I" && "C")){
    //     document.getElementById("answer").innerHTML = number1 * 2.54
    // }
    // else if ((option1 && option2) == ("C" && "M")){
    //     document.getElementById("answer").innerHTML = number1 / 100
    // }
    // else if ((option1 && option2) == ("C" && "I")){
    //     debugger
    //     document.getElementById("answer").innerHTML = number1 / 2.54
    // }

    switch (neednumber) {
        
        case "IM":
            debugger
            document.getElementById("answer").innerHTML = number1 / 39.37
            break;
        case "MI" :
            document.getElementById("answer").innerHTML = number1 * 39.37
        break;
        case "MC" :
            document.getElementById("answer").innerHTML = number1 * 100
        break;
        case "IC" :
            document.getElementById("answer").innerHTML = number1 * 2.54
        break;
        case "CM" :
            document.getElementById("answer").innerHTML = number1 / 100
        break;
        case "CI" :
            document.getElementById("answer").innerHTML = number1 / 2.54
        break;
        default:
            document.getElementById("answer").innerHTML = "Choose Different options"
            break;
    }


    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
}


