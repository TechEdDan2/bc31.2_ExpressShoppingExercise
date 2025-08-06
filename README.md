# bc31.2_ExpressShoppingExercise

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Setup Instructions](#setup-instructions)
- [My Process](#my-process)
  - [Future Improvements](#future-improvements)
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

6. NOTE: There is two ways to keep the data persistent:
   - **Option 1:** Use a `data.json` file to store items. Make sure to include it in your `.gitignore` file to avoid committing it to version control, which is what I did.
   - **Option 2:** Modify the code to use a database like SQLite or MongoDB for persistent storage.
   - Otherwise, you can use the in-memory array `items` in `fakeDB.js`, but note that data will be lost when the server restarts.

## My Process
I started by setting up a basic Express.js server and defining the routes for handling item-related requests. I used a simple in-memory array to store items initially, but later modified the code to read from and write to a JSON file for persistence. I also implemented error handling for cases where items are not found or required fields are missing.

### Future Improvements
- Implement a database for persistent storage.
- Add a UI for easier interaction with the API.

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