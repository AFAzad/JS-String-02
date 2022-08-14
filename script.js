/* Implement the function correctMistake, which should take a string which will be the string we want to change the mistake in, and another string which is the wrong word or character, and third string which is the correct version and return its result as a string with mistakes (Use JS In built functions) */


function correctMistake(str, charToBeReplaced, correct) {
    // write code here
    // return the output , do not use console.log here
    let regEx = new RegExp(charToBeReplaced,'g');
    let replaced = str.replace(regEx,correct);
    return replaced;
}