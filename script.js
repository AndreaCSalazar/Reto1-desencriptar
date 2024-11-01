function decrypt(message) {

    const mapping = {
        '*': 'p',
        '}': 'q',
        '!': 'j',
        ';': 'f',
        '^': 'm',
        '{': 's',
        '/': 'l',
        '¡': 'd',
        '%': 'b',
        ']': 'n',
        '-': 'h',
        '=': 't',
        '#': 'v',
        '$': 'r',
        '¿': 'y',
        '¬': 'ó',
        '?': 'a',
        '[': 'e',
        '~': 'o',
        '+': 'u',
    };


    let decryptMessage = '';

    for (let char of message) {
        
        decryptMessage += mapping[char] || char;
    }

    return decryptMessage;
}

const encryptedMessage = "^[()'~^*/?'[()^+'-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()'¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]'\\¬]()¿()[{;+[$__~()'~]=\\]+~";
const replaceMessage = encryptedMessage    
    .replace(/\(\)/g, ' ')
    .replace(/__/g, 'z')      
    .replace(/\\/g, 'i')
    .replace(/'/g, 'c')
const decryptMessage = decrypt(replaceMessage);
console.log(decryptMessage);