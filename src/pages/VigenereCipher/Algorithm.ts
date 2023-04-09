import { ALPHABET } from "../../constants";

export const NextAlphabet = (firstLetter: string) => {
    let result = "";
    let index = ALPHABET.indexOf(firstLetter);
    for (let i = 0; i < 26; i++) {
        result += ALPHABET.charAt((index + i) % 26);
    }
    console.log(result);
    return result;
}

export const Encode = (text: string, key: string) => {
    //Here we'll encode the text using the key that is passed in and do the vigenere cipher
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 + ALPHABET.indexOf(key.charAt(keyIndex))) % 26 + 65);
            keyIndex = (keyIndex + 1) % key.length;
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 + ALPHABET.indexOf(key.charAt(keyIndex))) % 26 + 97);
            keyIndex = (keyIndex + 1) % key.length;
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

export const Decode = (text: string, alphabet: string) => {
    let result = "";
    let keyIndex = 0;
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 + 26 - ALPHABET.indexOf(alphabet.charAt(keyIndex))) % 26 + 65);
            keyIndex = (keyIndex + 1) % alphabet.length;
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 + 26 - ALPHABET.indexOf(alphabet.charAt(keyIndex))) % 26 + 97);
            keyIndex = (keyIndex + 1) % alphabet.length;
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

type LetterFrequency = { [letter: string]: number };

const letterFrequency: LetterFrequency = {
    'a': 0.08167, 'b': 0.01492, 'c': 0.02782, 'd': 0.04253, 'e': 0.12702, 'f': 0.02228,
    'g': 0.02015, 'h': 0.06094, 'i': 0.06966, 'j': 0.00153, 'k': 0.00772, 'l': 0.04025,
    'm': 0.02406, 'n': 0.06749, 'o': 0.07507, 'p': 0.01929, 'q': 0.00095, 'r': 0.05987,
    's': 0.06327, 't': 0.09056, 'u': 0.02758, 'v': 0.00978, 'w': 0.02360, 'x': 0.00150,
    'y': 0.01974, 'z': 0.00074,
};

export function letterFrequencyAttack(cipherText: string): string[] {
    // English letter frequency in descending order
    const letterFrequency = "etaoinshrdlcumwfgypbvkjxqz";

    // Get the frequency of each letter in the cipher text
    const cipherTextLetterFrequency: { [letter: string]: number } = {};
    for (const letter of cipherText) {
        if (cipherTextLetterFrequency[letter]) {
            cipherTextLetterFrequency[letter]++;
        } else {
            cipherTextLetterFrequency[letter] = 1;
        }
    }

    // Sort the cipher text letters by frequency in descending order
    const sortedCipherTextLetters = Object.keys(cipherTextLetterFrequency).sort(
        (a, b) => cipherTextLetterFrequency[b] - cipherTextLetterFrequency[a]
    );

    // Get the most frequent cipher text letter and its corresponding English letter frequency
    const mostFrequentCipherLetter = sortedCipherTextLetters[0];
    const mostFrequentCipherLetterFrequency = cipherTextLetterFrequency[mostFrequentCipherLetter];
    const mostFrequentPlainTextLetter = letterFrequency[0];
    const mostFrequentPlainTextLetterFrequency = Math.round(
        mostFrequentCipherLetterFrequency * (letterFrequency.length / cipherText.length)
    );

    // Generate all possible plain text strings
    const possiblePlainTexts: string[] = [];
    let possiblePlainText = "";
    for (const cipherLetter of cipherText) {
        if (cipherLetter === mostFrequentCipherLetter) {
            possiblePlainText += mostFrequentPlainTextLetter;
        } else {
            possiblePlainText += cipherLetter;
        }
    }
    possiblePlainTexts.push(possiblePlainText);

    // Return all possible plain text strings
    return possiblePlainTexts;
}


