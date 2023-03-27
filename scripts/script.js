// const buttonRef = document.querySelector("button");

// function hello() {
//     alert("You clicked!")
// }

// function pinkbg() {
//     document.body.classList.toggle("pinkbg")

// }

// function changeText() {
//     if (buttonRef.textContent == "Click Me!") {
//         buttonRef.textContent = "Clicked!";
//     } else {
//         buttonRef.textContent = "Click Me!";
//     }
// }

// function updateImage(e){
//     const img = document.querySelector("#shoppingCart");
//     img.setAttribute("src","./images/shopping.png");
//     img.setAttribute("alt","Clipart of shopping cart");
//     img.setAttribute("height",50)
//     img.setAttribute("width",50)
// }
// buttonRef.addEventListener("click", hello);
// buttonRef.addEventListener("click", pinkbg);
// buttonRef.addEventListener("click", changeText);
// buttonRef.addEventListener("click", updateImage);

const butContainer = document.querySelector(".button-container");
console.log(butContainer)

function greenBG() {
    document.body.classList.toggle("pinkbg")

}
function bgChange(event){
    if(event.target.tagName == "BUTTON"){
        event.target.classList.toggle("greenbg")
    }
}
butContainer.addEventListener("mouseover",bgChange)