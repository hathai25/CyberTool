import { ALPHABET } from "../../constants";

export const RandomizeAlphabet = () => {
    let alphabet = ALPHABET;
    let result = ""
    for (let i = 0; i < 26; i++) {
        let rand = Math.floor(Math.random() * alphabet.length)
        result += alphabet.charAt(rand)
        alphabet = alphabet.replace(alphabet.charAt(rand), "")
    }
    return result;
}

export const Encode = (text: string, alphabet: string) => {
    //Here we'll encode the text with the alphabet that is passed in
    let result = ""
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i)
        if (c >= 65 && c <= 90) {
            result += alphabet.charAt((c - 65) % 26)
        } else if (c >= 97 && c <= 122) {
            result += alphabet.charAt((c - 97) % 26)
        } else {
            result += text.charAt(i)
        }
    }
    return result;
}

export const Decode = (text: string, alphabet: string) => {
    //Here we'll decode the text with the alphabet that is passed in
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            let index = alphabet.indexOf(text.charAt(i));
            result += String.fromCharCode(65 + index);
        } else if (c >= 97 && c <= 122) {
            let index = alphabet.indexOf(text.charAt(i));
            result += String.fromCharCode(97 + index);
        } else {
            result += text.charAt(i);
        }
    }
    return result;
}

type FrequencyMap = {
    [key: string]: number;
};

export function frequencyAnalysis(ciphertext: string): string {
    // A helper function to count the frequency of letters in a string
    function getFrequencyMap(str: string): FrequencyMap {
        const frequency: FrequencyMap = {};
        for (let i = 0; i < str.length; i++) {
            const c = str.charAt(i);
            frequency[c] = frequency[c] ? frequency[c] + 1 : 1;
        }
        return frequency;
    }

// A helper function to sort the letters in a frequency map by their frequency
    function sortFrequencyMap(frequency: FrequencyMap): string[] {
        const letters = Object.keys(frequency);
        return letters.sort((a, b) => frequency[b] - frequency[a]);
    }
    const frequency = getFrequencyMap(ciphertext);
    const sortedFrequency = sortFrequencyMap(frequency);

    // The expected frequency distribution for English
    const expectedFrequency = "ETAOINSHRDLCUMWFGYPBVKJXQZ";

    // Build a partial substitution key based on the most frequently occurring letters in the ciphertext
    const substitution: { [key: string]: string } = {};
    for (let i = 0; i < sortedFrequency.length; i++) {
        const c = sortedFrequency[i];
        const expected = expectedFrequency.charAt(i);
        substitution[c] = expected;
    }

    // Apply the substitution key to the ciphertext to obtain the plaintext
    let plaintext = "";
    for (let i = 0; i < ciphertext.length; i++) {
        const c = ciphertext.charAt(i);
        plaintext += substitution[c] || c;
        // Check if the current character is a space, and add it to the plaintext if it is
        if (c === " ") {
            plaintext += " ";
        }
    }

    return plaintext;
}


