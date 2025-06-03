function handleClickButton(el) {
    const input = document.getElementById("number-input");
    if (el.innerText === "=") {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = "Error";
        }
    } else if (el.innerText === "Clear") {
        input.value = "";
    } else {
        input.value += el.innerText;
    }
}

function reset() {
    document.getElementById("number-input").value = "";
}