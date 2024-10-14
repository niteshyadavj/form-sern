const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const { writeToExcel } = require('./excelUtils');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     
  password:  process.env.DB_PASS, 
  database: 'form_sern'
}); 

// Connect to the database
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database'); 
}); 

// API 
// Save form data to the database
app.post('/api/forms', (req, res) => {
  const { formType, name, countryCode, phoneNumber } = req.body;
  const query = 'INSERT INTO forms (formType, name, countryCode, phoneNumber) VALUES (?, ?, ?, ?)';
  db.query(query, [formType, name, countryCode, phoneNumber], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Form data saved successfully', id: result.insertId });
  });
});

// Fetch all form data from the database
app.get('/api/forms', (req, res) => {
  const query = 'SELECT * FROM forms';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Refresh Excel file with data from the database
app.get('/api/refresh', (req, res) => {
  const query = 'SELECT * FROM forms';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    writeToExcel(results);
    res.json({ message: 'Excel file updated successfully' });
  });
});

// Start the server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); 
});
