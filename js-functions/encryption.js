/// ASCII key aproach
ascii = (() => {
function encode(text, key) {
    let encodedText = '';
    for (let i = 0; i < text.length; i++) {
        encodedText += String.fromCharCode(text.charCodeAt(i) + key.charCodeAt(i % key.length));
    }
    return encodedText;
}

function decode(encodedText, key) {
    let decodedText = '';
    for (let i = 0; i < encodedText.length; i++) {
        decodedText += String.fromCharCode(encodedText.charCodeAt(i) - key.charCodeAt(i % key.length));
    }
    return decodedText;
}

// Example usage:
const originalText = "Hello, World!";
var encryptionKey = "ψΠǈư̐Ͱψǀ̸̨̐ΰǀƸƘΐΰ͘ǀΐΐ̸̀Ψưΐ̰̘̀ΨƠƘ̰͈̐ǈΐ̨";

// Encoding
const encodedResult = encode(originalText, encryptionKey);
console.log("Encoded:", encodedResult);

// Decoding
const decodedResult = decode(encodedResult, encryptionKey);
console.log("Decoded:", decodedResult);
})()
