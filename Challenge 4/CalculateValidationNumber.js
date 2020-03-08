/**
 * Title                        : Javascript Coding Challenge 4
 * Subtitle                     : Calculate Validation Number
 * Author                       : Rother Jay B. Copino
 * Date Written                 : February 26, 2020
 * Requirements:
 *      1.  Write a function that accepts an integer and returns a “validation” number.
 *          This validation number is calculated by adding all the digits in the input.
 *      2.  If the result of this sum has more than a single digit, another iteration is
 *          required, repeat the process until a single digit number is calculated.
 * Input was placed inside an array
 */

'use strict';

 /**
  * Returns the validation number by continuously iterating
  * the input number if sum is more that one (1).
  * @param {String/Number} inputNumber 
  */
function calculateValidationNumber(inputNumber) {

    if (verifyInputNumber(inputNumber)) {
        let sum = 0;
        let sumReset = 0;

        sum = accumulateSumOfDigits(inputNumber, sum);

        while(String(sum).length > 1) {
            sumReset = 0;
            sumReset = accumulateSumOfDigits(sum, sumReset);
            sum = sumReset;
        }

        return sum;
    }

    return 0;
}

 /**
  * Returns the sum of the digits.
  * @param {String/Number} inputNumber 
  * @param {Number} sum 
  */
function accumulateSumOfDigits(inputNumber, sum) {

    let inputNumberCharArr = [];
	
    inputNumberCharArr = typeof inputNumber == 'number' ? getCharacterArray(String(inputNumber)) : getCharacterArray(inputNumber);
    sum = inputNumberCharArr.reduce((sum, current) => Number(sum) + Number(current), 0);

    return sum;
}

/**
 * Helper Functions
 */
function verifyInputNumber(inputNumber) {

    let result = inputNumber != null && inputNumber != "";

    return result;
}

function getCharacterArray(inputStr) {

    let charArray = [];

    if (inputStr != null && inputStr != '') {
        charArray = Array.from(inputStr);
    }

    return charArray;
}

function showAlert(inputNumber, validationNumber) {

    alert(`| Given ${inputNumber}, validation number is equal to the output: ${validationNumber}`);

}

/** 
 * Main Method Function
 */
function main() {

    let validationNumber = 0;
    let inputNumberArr = ["444444", "1234", "23478998", "1234567891234567891233", "12345678912345678912333", "12345678912345678912333", "123456789123456789123456789123456789123454", "999"];
    
    inputNumberArr.forEach(function(item, index, array) {
        validationNumber = String(calculateValidationNumber(item));
        showAlert(item, validationNumber);
    });

}

/**
 * Main Method Call
 */
main();