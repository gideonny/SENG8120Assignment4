# SENG8120 Modern Automated Testing 

Version: Alpaca - Gideon Nyamuame 8883421 Assignment 4

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Customizing Number of Copies**
The main.ts file is where you can set the inputs for your paint calculation.
To adjust the number of copies, open main.ts and modify the numberOfCopies variable:

main.ts
const length = "10";           // set this to the length of the canvas
const width = "20";            // set this to the width of the canvas
const numberOfCopies = 5000;   // set this to however many copies you want
const coveragePerLiter = 11.4; // coverage of paint per liter//

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

