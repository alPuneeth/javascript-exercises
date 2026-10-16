const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    const cleaned = string
        .toLowerCase()
        .split("")
        .filter(ch => alphanumerical.includes(ch))
        .join("")
    
    const reversed = cleaned.split("").reverse().join("")

    return cleaned === reversed
}


// Do not edit below this line
module.exports = palindromes;
