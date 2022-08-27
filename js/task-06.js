 let inputVal = document.getElementById("validation-input");
 let totalLenght = inputVal.getAttribute("data-length");
 let intTotallenght = parseInt(totalLenght, 10);

 inputVal.oninput = () => {
      if (inputVal.value.length === intTotallenght) {
      inputVal.classList.remove("invalid");
      inputVal.classList.add("valid");
   }
     else if (inputVal.value.lenght === 0) {
         inputVal.classList.remove("invalid");
         inputVal.classList.remove("valid");
     }
    else if (inputVal.value.lenght !== intTotallenght && inputVal.value.lenght !== 0 ) {
         inputVal.classList.add("invalid");
     } 
 };

