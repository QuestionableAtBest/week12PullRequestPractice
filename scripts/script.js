const buttonRef = document.querySelector("button");

function hello() {
    alert("You clicked!")
}

function pinkbg() {
    document.body.classList.toggle("pinkbg")
}

function changeText() {
    if (buttonRef.textContent == "Click Me!") {
        buttonRef.textContent = "Clicked!";
    } else {
        buttonRef.textContent = "Click Me!";
    }
}
buttonRef.addEventListener("click", hello)
buttonRef.addEventListener("click", pinkbg)
buttonRef.addEventListener("click", changeText)
