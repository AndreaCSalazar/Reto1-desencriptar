function decrypt(message) {

    const mapping = {
        '()': '',
        '^': 'p',
        '`': 'c',
        '!': 's',
        '^': 'm',
        '*': 'l',
        '/': 'j',
        '¡': 'q',
        '%': 'b',
        ']': 'n',
        '-': 'h',
        '=': 't',
        '#': 'v',
        '$': 'r',
        '__': 'z',
        '¬': 'ó',
        '?': 'a',
        '[': 'e',
        '\\\\': 'i',
        '~': 'o',
        '+': 'u',
    };


    let decryptMessage = '';

    for (let char of message) {
        
        decryptMessage += mapping[char] || char;
    }

    return decryptMessage;
}

const encryptedMessage = "^[()~^*/?[()^+-~()#[$()/~()%\\\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()¬^~()[{=()?+^[]=?()^\\\\{()*¡[$[{()¡[()?=[]\\\\¬]()¿()[{;+[$__~()~]=\\\\]+~";
const decryptMessage = decrypt(encryptedMessage);
console.log(decryptMessage);