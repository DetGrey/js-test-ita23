/**
 * This function generates a personalized message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Personalized message for the user.
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // message will be "Hey Jack, at 25, you are in the prime of your life!"
 */

function generateMessage(name, age) {
    if (age > 70) {
        return `Hey ${name}, at ${age}, you have had a long life`;
    } else if (age > 50) {
        return `Hey ${name}, at ${age}, you soon won't have your children living at home anymore`;
    } else if (age > 20) {
        return `Hey ${name}, at ${age}, you are in the prime of your life!`;
    } else {
        return `Hey ${name}, at ${age}, you are still just a kid`;
    }
}


/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */

function titleCase(sentence) {
    let array = sentence.split(' ');
    let newString = '';

    for (let word of array) {
        let uppercase= word.charAt(0).toUpperCase() + word.slice(1);
        newString += uppercase + ' ';
    }
    return newString.trim();
}


/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */

function sumOfRange(start, end) {
    let numbers = 0;
    while (start <= end) {
        numbers += start;
        start++;
    }
    return numbers;
}



