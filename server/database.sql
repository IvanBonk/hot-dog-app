CREATE DATABASE hot_dog_app;

CREATE TABLE hot_dogs
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price INT,
  description TEXT,
  image_url VARCHAR(255)
);