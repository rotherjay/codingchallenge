/**
 * Title                        : Javascript Coding Challenge 1
 * Subtitle                     : Array
 * Author                       : Rother Jay B. Copino
 * Date Written                 : February 26, 2020
 * Requirements:
 * Given an array “people”, write:
 *      1. A function “listByGender” that accepts “gender” and returns an 
 *         array of people that falls under the given gender; and
 *      2. A function “groupByDepartment” that returns people grouped by 
 *         their department.
 *      3. Write your solution without using any libraries and use ES6 or 
 *         above as much as possible.
 */

 'use strict';

 /** Given array of objects */
 const people = [
    {
        name: 'Arisa',
        department: 'BP',
        gender: 'F'
    },
    {
        name: 'Ham',
        department: 'IT',
        gender: 'F'
    },
    {
        name: 'Alice',
        department: 'IT',
        gender: 'F'
    },
    {
        name: 'Anna',
        department: 'DA',
        gender: 'F'
    },
    {
        name: 'Larry',
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Ria',
        department: 'Sales',
        gender: 'F'
    },
    {
        name: 'JD', 
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Thor', 
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Karl', 
        department: 'Sales',
        gender: 'M'
    },
    {
        name: 'Rachel', 
        department: 'Sales',
        gender: 'F'
    },
 ];

 /**
  * Returns an array of people that falls under the given gender.
  * @param {character} gender Either 'M' for Male and 'F' for female
  */
 function listByGender(gender) {
     
    let byGenderList = [];

    byGenderList = people.filter(item => item.gender == gender);
    
    return byGenderList;
 }

 /**
  * Returns people grouped by their department.
  */
 function groupByDepartment() {

    let result = [];

    result = people.reduce(function (arr, obj) {
        arr[obj.department] = arr[obj.department] || [];
        arr[obj.department].push(obj);
        return arr;
    }, Object.create(null));

    return result;
 }

 /** Helper Functions */

 /**
  * Displays the output message of people by gender.
  * @param {List} byGenderList  List of people object by gender
  * @param {character} gender   Either 'M' for Male and 'F' for female,
  *                             depending on the parameters specified.
  */
 function showNamesByGender(byGenderList, gender) {

    let nameByGenderList = [];
    let outputMessage = `| Given the gender ${gender}, list includes `;

    if (byGenderList != undefined && byGenderList.length != 0) {

        byGenderList.forEach(function(item, index, array) {
            nameByGenderList.push(item.name);
            outputMessage += index != array.length-1 ? `${item.name}, ` : `and ${item.name}`
        });

        console.log(outputMessage);
    }
 }
 
 /**
  * Displays the output message of people by department.
  * @param {List} departmentListObj List of people per department
  */
 function showNamesByDepartment(departmentListObj) {

    for (let department in departmentListObj) {
        let outputMessage = '';

        departmentListObj[department].forEach(function(item, index, array) {
            if (index == 0) {
                outputMessage += `| ${department} Department, list includes ${item.name} `;
            } else if (index == array.length - 1) {
                outputMessage += `and ${item.name}`;
            } else {
                outputMessage += `${item.name}, `
            }
        });

        console.log(outputMessage);
    }

 }

 /** Main Method */
 function main() {
    // Test Cases
    let genderList = [];
    let departmentList = [];
    let gender = '';

    // List By Male
    gender = 'M';
    genderList = listByGender(gender);

    // Display Male Gender List
    showNamesByGender(genderList, gender);


    // List By Female
    gender = 'F';
    genderList = listByGender(gender);

    // Display Female Gender List
    showNamesByGender(genderList, gender);

    // Groud by Department
    departmentList = groupByDepartment();

    // Display People by Department
    showNamesByDepartment(departmentList);
 }

  /** Execute the main method */
  main();