const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let letter = '';
    let letterBin = '';
    for (let i = 0; i < expr.length; i += 10) {
        letterBin = expr.slice(i, i + 10);
        letter = '';
        for (let j = 0; j < 10; j += 2) {
            if (letterBin[j] == '1' && letterBin[j+1] == '0') letter += '.';
            if (letterBin[j] == '1' && letterBin[j+1] == '1') letter += '-'; 
        }
        if (letterBin === '**********') result += ' ' 
            else result += MORSE_TABLE[letter];
    
    }    
    return result;
    }
    
module.exports = {
    decode
}