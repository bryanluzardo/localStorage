const input = document.querySelector("#inputText")
const button = document.querySelector("#buttonText")

button.addEventListener("click", () => {
    localStorage.setItem("dato", input.value)
    input.value = ""
})