CREATE DATABASE form_app;
USE form_app;

CREATE TABLE forms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  formType VARCHAR(255),
  name VARCHAR(255),
  countryCode VARCHAR(5),
  phoneNumber VARCHAR(15)
);
