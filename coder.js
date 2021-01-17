const getCodeInput = () => {
    let output = document.querySelector('#coder-input').value;
    let code = []
    for (let i = 0; i < output.length; i++) {
        if (output[i] === 'a' || output[i] === 'A') {
            code.splice(i, 0, "@")
        }
        if (output[i] === 'b' || output[i] === 'B') {
            code.splice(i, 0, "%")
        }
        if (output[i] === 'c' || output[i] === 'C') {
            code.splice(i, 0, "1")
        }
        if (output[i] === 'd' || output[i] === 'D') {
            code.splice(i, 0, "9")
        }
        if (output[i] === 'e' || output[i] === 'E') {
            code.splice(i, 0, "f")
        }
        if (output[i] === 'f' || output[i] === 'F') {
            code.splice(i, 0, "Q")
        }
        if (output[i] === 'g' || output[i] === 'G') {
            code.splice(i, 0, "^")
        }
        if (output[i] === 'h' || output[i] === 'H') {
            code.splice(i, 0, "x")
        }
        if (output[i] === 'i' || output[i] === 'I') {
            code.splice(i, 0, "6")
        }
        if (output[i] === 'j' || output[i] === 'J') {
            code.splice(i, 0, "B")
        }
        if (output[i] === 'k' || output[i] === 'K') {
            code.splice(i, 0, "z")
        }
        if (output[i] === 'l' || output[i] === 'L') {
            code.splice(i, 0, "*")
        }
        if (output[i] === 'm' || output[i] === 'M') {
            code.splice(i, 0, "T")
        }
        if (output[i] === 'n' || output[i] === 'N') {
            code.splice(i, 0, "5")
        }
        if (output[i] === 'o' || output[i] === 'O') {
            code.splice(i, 0, "!")
        }
        if (output[i] === 'p' || output[i] === 'P') {
            code.splice(i, 0, "l")
        }
        if (output[i] === 'q' || output[i] === 'Q') {
            code.splice(i, 0, "S")
        }
        if (output[i] === 'r' || output[i] === 'R') {
            code.splice(i, 0, "&")
        }
        if (output[i] === 's' || output[i] === 'S') {
            code.splice(i, 0, "E")
        }
        if (output[i] === 't' || output[i] === 'T') {
            code.splice(i, 0, "y")
        }
        if (output[i] === 'u' || output[i] === 'U') {
            code.splice(i, 0, "}")
        }
        if (output[i] === 'v' || output[i] === 'V') {
            code.splice(i, 0, "a")
        }
        if (output[i] === 'w' || output[i] === 'W') {
            code.splice(i, 0, "G")
        }
        if (output[i] === 'X' || output[i] === 'X') {
            code.splice(i, 0, "0")
        }
        if (output[i] === 'y' || output[i] === 'Y') {
            code.splice(i, 0, "<")
        }
        if (output[i] === 'z' || output[i] === 'Z') {
            code.splice(i, 0, "?")
        }
        if (output[i] === ' ') {
            code.splice(i, 0, '$')
        }

    }

    return code.join('-')

}
const printOutput = () => {
    if (getCodeInput() != '')
        document.querySelector('#coder-result').innerText = getCodeInput();
    document.querySelector('#coder-input').value = ""
}
const codeButton = document.querySelector('#coder-button');
codeButton.addEventListener('click', printOutput)

document.body.addEventListener('keypress', function(key) {
    var keyvalue = key.keyCode;
    if (keyvalue == 13 && getCodeInput() != '') {

        document.querySelector('#coder-result').innerText = getCodeInput();
        document.querySelector('#coder-input').value = "";
        let uncoded = document.querySelector('#coder-result').innerHTML;

    }
})