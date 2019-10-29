import * as core from '@actions/core';

try {
  const nameToGreet = core.getInput('name');
  console.log(`Your name is ${nameToGreet}!`);
} catch (error) {
  core.setFailed(error.message);
}