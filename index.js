console.log(1);

const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", function() {
    output.innerHTML = "Ну всё же ты вонючка";
});