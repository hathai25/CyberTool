export const Encode = (text: string, shift: number) => {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i)
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 + shift) % 26 + 65)
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 + shift) % 26 + 97)
        } else {
            result += text.charAt(i)
        }
    }
    return result;
}

export const Decode = (text: string, shift: number) => {
    let result = ""
    for (let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i)
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 - shift + 26) % 26 + 65)
        } else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 - shift + 26) % 26 + 97)
        } else {
            result += text.charAt(i)
        }
    }
    return result;
}