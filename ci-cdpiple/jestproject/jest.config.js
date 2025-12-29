import test from "node:test";
// this is jest.config.js is required to run jest with esm modules
export default {
    testEnvironment: "node",
    transform: {}
}
// jest does not support esm modules out of the box, this config helps to run tests with esm 

  
// this line is also added to package.json
//   "scripts": {
//     "test":"node --experimental-vm-modules node_modules/.bin/jest"
//   }


// npm test command will run the tests