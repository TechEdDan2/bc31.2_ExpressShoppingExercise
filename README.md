# bc31.2_ExpressShoppingExercise

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Setup Instructions](#setup-instructions)
- [My Process](#my-process)
  - [File Structure](#file-structure)
- [Author](#author)
- [Acknowledgements](#acknowledgments)
- [License](#license)

## Overview
This is a simple Express.js application that allows users to add items to a shopping list via a RESTful API. The application is designed to demonstrate basic CRUD operations using Express.js and JSON data.

### Features
- Add items to the Shooping list using a POST request.
- Retrieve the list of items using a GET request.   
- Each item has a unique ID, name, and price.

### Setup Instructions
1. Clone the repository    
2. Navigate to the project directory in your terminal.
3. Install the dependencies by running `npm install`.
4. Start the server with `npm --watch server.js`.
5. Use a tool like Insomnia or cURL to interact with the API. 

## My Process
### File Structure
```
bc31.2_ExpressShoppingExercise/
├── package.json
├── package-lock.json
├── server.js
├── README.md
└── routes/
    └── itemRoutes.js
    └── items.test.js
└── fakeDB.js
└── app.js
└── middleware.js
``` 

## Author
- Github - [TechEdDan2](https://github.com/TechEdDan2)
- Frontend Mentor - [@TechEdDan2](https://www.frontendmentor.io/profile/TechEdDan2)

## Acknowledgments
The YouTubers and other educational resources I have been learning from include: Coder Coder (Jessica Chan), BringYourOwnLaptop (Daniel Walter Scott), Kevin Powell, vairous Udemy courses, Geeks for Geeks, and Stony Brook University's Software Engineering Bootcamp (Colt Steele) 

## License
This project is licensed under the ISC license