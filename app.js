// Buena suerte ! Espero que se te encianda la "bombilla"!

let bulb = document.querySelector("#bulb");
let on = false;

bulb.addEventListener("click", function () {
    if (!on) {
        bulb.classList.remove("bulb-off");
        bulb.classList.add("bulb-on");
        on = true;
    }
    else {
        bulb.classList.remove("bulb-on");
        bulb.classList.add("bulb-off");
        on = false;
    }
})