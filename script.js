document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert('Por favor, introduce solo letras minúsculas y espacios.');
        return;
    }
    const encryptedText = encrypt(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert('Por favor, introduce solo letras minúsculas y espacios.');
        return;
    }
    const decryptedText = decrypt(inputText);
    document.getElementById('outputText').value = decryptedText;
});

function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 97 && char <= 122) { // letras minúsculas
            char = ((char - 97 + 3) % 26) + 97;
        }
        result += String.fromCharCode(char);
    }
    return result;
}

function decrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 97 && char <= 122) { // letras minúsculas
            char = ((char - 97 - 3 + 26) % 26) + 97;
        }
        result += String.fromCharCode(char);
    }
    return result;
}
