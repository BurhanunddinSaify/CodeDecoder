const output2 = document.querySelector('#decoder-input');
const outputResult = document.querySelector('#decoder-result');
const decodeButton = document.querySelector('#decoder-button');


const getDecodeInput = () => {
    let output = output2.value;
    let decode = []
    for (let i = 0; i < output.length; i++) {
        if (output[i] === '@') {
            decode.splice(i, 0, "a")
        }
        if (output[i] === '%') {
            decode.splice(i, 0, "b")
        }
        if (output[i] === '1') {
            decode.splice(i, 0, "c")
        }
        if (output[i] === '9') {
            decode.splice(i, 0, "d")
        }
        if (output[i] === 'f') {
            decode.splice(i, 0, "e")
        }
        if (output[i] === 'Q') {
            decode.splice(i, 0, "f")
        }
        if (output[i] === '^') {
            decode.splice(i, 0, "g")
        }
        if (output[i] === 'x') {
            decode.splice(i, 0, "h")
        }
        if (output[i] === '6') {
            decode.splice(i, 0, "i")
        }
        if (output[i] === 'B') {
            decode.splice(i, 0, "j")
        }
        if (output[i] === 'z') {
            decode.splice(i, 0, "k")
        }
        if (output[i] === '*') {
            decode.splice(i, 0, "l")
        }
        if (output[i] === 'T') {
            decode.splice(i, 0, "m")
        }
        if (output[i] === '5') {
            decode.splice(i, 0, "n")
        }
        if (output[i] === '!') {
            decode.splice(i, 0, "o")
        }
        if (output[i] === 'l') {
            decode.splice(i, 0, "p")
        }
        if (output[i] === 'S') {
            decode.splice(i, 0, "q")
        }
        if (output[i] === '&') {
            decode.splice(i, 0, "r")
        }
        if (output[i] === 'E') {
            decode.splice(i, 0, "s")
        }
        if (output[i] === 'y') {
            decode.splice(i, 0, "t")
        }
        if (output[i] === '}') {
            decode.splice(i, 0, "u")
        }
        if (output[i] === 'a') {
            decode.splice(i, 0, "v")
        }
        if (output[i] === 'G') {
            decode.splice(i, 0, "w")
        }
        if (output[i] === '0') {
            decode.splice(i, 0, "x")
        }
        if (output[i] === '<') {
            decode.splice(i, 0, "y")
        }
        if (output[i] === '?') {
            decode.splice(i, 0, "z")
        }
        if (output[i] === '$') {
            decode.splice(i, 0, '_')
        }

    }
    return decode.join(" ")
}
const printDecodeOutput = () => {
    outputResult.innerHTML = getDecodeInput();
    output2.value = '';
}
decodeButton.addEventListener('click', printDecodeOutput)
document.body.addEventListener('keypress', function(key) {
    let keyvalue = key.keyCode;
    if (keyvalue == 13) {
        outputResult.innerHTML = getDecodeInput();
        output2.value = '';
    }
})