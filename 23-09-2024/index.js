// document.querySelector("button").addEventListener("click", () => handleKick("Hai"));

// function handleKick(greet) {
//     alert(`Hello FSW 2 ${greet}`);
// }

// //handleKick()

// btnArray = document.querySelectorAll("button");

// console.log(btnArray);


let totalBtn = document.querySelectorAll("button").length;

for (let i = 0; i < totalBtn; i++) {

    console.log(i)

    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let tom1 = new Audio('sounds/tom-1.mp3');
        let tom2 = new Audio('sounds/tom-2.mp3');
        let tom3 = new Audio('sounds/tom-3.mp3');
        let tom4 = new Audio('sounds/tom-4.mp3');
        let snare = new Audio('sounds/snare.mp3');
        let crash = new Audio('sounds/crash.mp3');
        let kick = new Audio('sounds/kick-bass.mp3');

        switch (i) {
            case 0:
                tom1.play();

            case 1:
                tom2.play();

            case 2:
                tom3.play();

            case 3:
                tom4.play();

            case 4:
                snare.play();

            case 5:
                crash.play();

            case 6:
                kick.play();

            default:
                break
        }

    });

    
}
