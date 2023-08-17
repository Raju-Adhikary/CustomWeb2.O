function getRandStr(length, difficulty) {
    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}';

    let characters = '';

    // Include lowercase characters if specified
    if (difficulty.includes('l')) {
        characters += lowercase;
    }

    // Include uppercase characters if specified
    if (difficulty.includes('u')) {
        characters += uppercase;
    }

    // Include symbols if specified
    if (difficulty.includes('s')) {
        characters += symbols;
    }

    let result = '';
    // Generate random characters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

/*
// getRandStr(120, "sl");
// getRandStr(length, "difficulty level");

   - `length`: The desired length of the random string.
   - `difficulty`: A string indicating the desired difficulty level.
            Use "lus" to include 
            l -  lowercase letters,
            u -  uppercase letters,
            s -  symbols.

*/
const password = getRandStr(40, "lsu");
console.log(password);