import * as core from '@actions/core';
const person = core.getInput('person');

console.log(`Hello ${person}!`);
