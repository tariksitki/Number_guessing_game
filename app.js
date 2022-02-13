

let number = 32;

let user_number = document.getElementById("user_number");

let submit = document.getElementById("submit");

let output_span = document.getElementById("output_span");

let attempts = document.getElementById("attempts_span");

let counter = 0;

let reset = document.getElementById("reset");

submit.addEventListener("click", () => {

    

    if (user_number.value == number) {
        counter += 1;
        output_span.style.display = "block";
        output_span.innerText = "Congrats!!! You found the number!";
        attempts.innerHTML = "Number of Attempts: " + counter;

    } else if (user_number.value > number) {
        output_span.style.display = "block";
        output_span.innerHTML = "Enter a smaller number!";
        counter += 1;
        attempts.innerHTML = "Number of Attempts: " + counter;

    } else if (user_number.value < number) {
        output_span.style.display = "block";
        output_span.innerText = "Enter a bigger number!";
        counter += 1;
        attempts.innerHTML = "Number of Attempts: " + counter;
    }  
});


reset.addEventListener("click", () => {
    counter = 0;
    attempts.innerHTML = "Number of Attempts: " + counter;
    output_span.style.display = "none";
    user_number.value = 0;
})


    //  web page load, auto focus

user_number.focus();  