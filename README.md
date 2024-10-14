## Title

Dynamic Forms Web Application (SQL, Express, React, Node.js)
## objective

This project demonstrates proficiency in building a dynamic form-based web application using the SQL, Express, React, and Node.js stack. The application features database operations, form validation, local storage, and external data synchronization with an online Excel sheet.

## Features

- Dynamic forms based on user interaction (Form A and Form B).

- Form validation for name (alphabetical), country code (dropdown), and phone number.

- Data is stored in an SQL database and includes form type, name, country code, and phone number.

- "Refresh" button to synchronize SQL data with an external Excel sheet.

- Use of local storage to save user form data to avoid re-entering details on page reload.



## Steps to Complete

1. Initialize the Backend (Node.js + Express + SQL):

```bash
mkdir backend
cd backend
npm init -y
npm install express mysql2 cors body-parser
```
    
2. MySQL Database Setup: Create a database named form_sern and a table to store form data:
```bash
CREATE DATABASE formApp;
USE formApp;
CREATE TABLE forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    formType VARCHAR(50),
    name VARCHAR(100),
    countryCode VARCHAR(10),
    phoneNumber VARCHAR(15)
);
```

3. Backend (Express) Setup:
- Configure the MySQL connection.
- Set up API routes for handling form submissions.
- Start the Express server and configure CORS.

4. Frontend (React) Setup:
- Initialize the React app
- Create two forms (Form A and Form B) with dynamic headings and inputs (name, country code, phone number).

- Use Bootstrap for styling the forms.

5. Local Storage
- Add validation for name (alphabet only), country code, and phone number in the React form component.
- Store form data in local storage to avoid re-entry on page reload.

6.  Excel Sheet
- Use a library like xlsx or Google Sheets API to connect the SQL database to an external Excel sheet.
- Include a "Refresh" button to update the Excel sheet with new entries from the database.

## Installation 
1. nistallation
```bash
git clone https://github.com/niteshyadavj/form-sern.git
cd backend
npm install
```
2.  MySQL Database Setup: Create a database named form_sern and a table to store form data:
```bash
CREATE DATABASE formApp;
USE formApp;
CREATE TABLE forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    formType VARCHAR(50),
    name VARCHAR(100),
    countryCode VARCHAR(10),
    phoneNumber VARCHAR(15)
);
```

3. Configure environment variables
```bash
DB_pass = password
PORT = '3001'
```
4. backend start
```bash
node server.js
```
5. front end setup
```bash
cd frontend
npm install
npm run dev
```



