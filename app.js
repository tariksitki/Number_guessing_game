
function myRandom() {
    randomNumber = (Math.round(Math.random() * 99) + 1);
    return randomNumber;
}

let number;

window.addEventListener("load", () => {
    number = myRandom();
    console.log(number);
})

let user_number = document.getElementById("user_number");
let submit = document.getElementById("submit");
let output_span = document.getElementById("output_span");
let attempts = document.getElementById("attempts_span");
let reset = document.getElementById("reset");
let info = document.getElementById("info")

// let counter = 0;

// submit.addEventListener("click", () => {

//     if (user_number.value == number) {
//         counter += 1;
//         output_span.style.display = "block";
//         output_span.innerText = "Congrats!!! You found the number!";
//         attempts.innerHTML = "Number of Attempts: " + counter;

//     } else if (user_number.value > number) {
//         output_span.style.display = "block";
//         output_span.innerHTML = "Enter a smaller number!";
//         counter += 1;
//         attempts.innerHTML = "Number of Attempts: " + counter;

//     } else if (user_number.value < number) {
//         output_span.style.display = "block";
//         output_span.innerText = "Enter a bigger number!";
//         counter += 1;
//         attempts.innerHTML = "Number of Attempts: " + counter;
//     }  

// });


// reset.addEventListener("click", () => {
//     counter = 0;
//     attempts.innerHTML = "Number of Attempts: " + counter;
//     output_span.style.display = "none";
//     user_number.value = 0;
// })


//     //  web page load, auto focus

// user_number.focus();  

let counter = 7;
let big_number = 100;
let little_number = 0;
let attempted_array = [];


submit.addEventListener("click", () => {

    if (user_number.value > 100 || user_number.value < 0) {
        alert(`Please enter a number between ${little_number} - ${big_number}`);

    } else if (user_number.value == "") {
        alert(`Please enter a number between ${little_number} - ${big_number}`);

    } else if (user_number.value == number && counter > 0) {
        counter -= 1;
        
        info.innerText = "Congratulations! You Found The Number!";
        info.style.fontSize = "2.2rem";
        attempts.innerHTML = `You Found The Number in ${7-counter} Tries`;
        attempted_array.push(user_number.value);
        output_span.style.display = "block";
        user_number.value = "";
        user_number.focus();
        output_span.innerHTML = `( You Have Tried This Number:  ${attempted_array.join(", ")} )`;
        submit.disabled = true;
        return;

    } else if (user_number.value > number) {
        counter -= 1;

        if (user_number.value <= big_number) {
            big_number = user_number.value;
            info.innerHTML = `Enter a Number Between ${little_number} - ${big_number}`;
            attempts.innerHTML = `You Have The Right to try ${counter} Times`;
            attempted_array.push(user_number.value);

        } else if (user_number.value > big_number) {
            big_number = big_number;
            info.innerHTML = `Enter a Number Between ${little_number} - ${big_number}`;
            attempts.innerHTML = `You Have The Right to try ${counter} Times`;
            attempted_array.push(user_number.value);
        }   
        

    } else if (user_number.value < number) {
        counter -= 1;
        // output_span.style.display = "block";

        if (user_number.value <= little_number) {
            little_number = little_number;
            info.innerHTML = `Enter a Number Between ${little_number} - ${big_number}`;
            attempts.innerHTML = `You Have The Right to try ${counter} Times`;
            attempted_array.push(user_number.value);

        }   else {
            little_number = user_number.value;
            info.innerHTML = `Enter a Number Between ${little_number} - ${big_number}`;
            attempts.innerHTML = `You Have The Right to try ${counter} Times`;
            attempted_array.push(user_number.value);
        }
    }  
    
    /////////////////////////

    if (counter == 0 && user_number.value != number) {
                reset = document.getElementById("reset");
                info.innerHTML = "Game Over!";
                info.style.fontSize = "3.4rem";
                submit.disabled = true;
                attempts.innerHTML = "";
                reset.value = "Play Again";

    } 
    // else if (counter == 0 && user_number.value == number) {
    //             info.innerText = "Congrationals! You found the number!";
    //             attempts.innerHTML = `You found the Number in ${7-counter} Tries`;
    //             attempted_array.push(user_number.value);
    //             // output_span.innerHTML = attempted_array.value;
    //             submit.disabled = true;
                
    //         }
        
        user_number.value = "";
        user_number.focus();
        output_span.innerHTML = `( You have tried These Numbers:  ${attempted_array.join(", ")} )`;
        output_span.style.display = "block";
        user_number.value = "";
        user_number.focus();
});


reset.addEventListener("click", () => {
    counter = 7;
    big_number = 100;
    little_number = 0;
    attempts.innerHTML = `You Have The Right to try ${counter} Times`;
    output_span.style.display = "none";
    user_number.value = "";
    number = myRandom();
    console.log(number);
    user_number.focus();
    submit.disabled = false;
    info.innerHTML = `Enter a Number Between ${little_number} - ${big_number}`;
    reset.value = "Reset";
    attempted_array = [];
    info.style.fontSize = "1.8rem";
})


    //  web page load, auto focus

user_number.focus(); 
user_number.addEventListener("keydown", (e) => {
    if (e.key == "Enter" || e.key == "NumpadEnter") {submit.click()};
})