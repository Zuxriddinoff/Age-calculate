const input = document.querySelector("#input")
const calculateButton = document.querySelector("#button")
const result = document.querySelector("#result")
const darkMode = document.querySelector("#darkMode")

calculateButton.addEventListener("click", function(){
    let inputElement = new Date(input.value)
    // alert(inputElement);
    let date = new Date()
    let diff = date - inputElement
    // alert(diff);
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
    let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)); 
    let days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    // alert(`sizni yoshingiz: ${years}/${months}/${days}`)
    result.innerText = (`You are ${years} years ${months} months ${days} days old`)

})

darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkMode.textContent = "☀️ Light Mode";
    } else {
        darkMode.textContent = "🌒 Dark Mode";
    }
});