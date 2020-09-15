const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/hot-dogs', async (req, res) => {

  try {
    const {
      name,
      price,
      description,
      image_url
    } = req.body;
    const newHotDog = await pool.query(
      'INSERT INTO hot_dogs (name, price, description, image_url) VALUES($1, $2, $3, $4) RETURNING *;',
      [name, price, description, image_url]
    );
    res.json(newHotDog.rows[0]);
  } catch (error) {
    console.warn(error.message);
  }
});

app.get('/hot-dogs', async (req, res) => {
  try {
    const allHotDogs = await pool.query('SELECT * FROM hot_dogs ORDER BY id;');
    res.json(allHotDogs.rows);
  } catch (error) {
    console.warn(error.message);
  }
});

app.get('/hot-dogs/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const hotDog = await pool.query(
      'SELECT * FROM hot_dogs WHERE id = $1;',
      [id]
    );
    res.json(hotDog.rows[0]);
  } catch (error) {
    console.warn(error.message);
  }
});

app.put('/hot-dogs/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      name,
      price,
      description,
      image_url
    } = req.body;
    const updatedHotDog = await pool.query(
      'UPDATE hot_dogs SET name = $1, price = $2, description = $3, image_url = $4 WHERE id = $5 RETURNING *;',
      [name, price, description, image_url, id]
    );
    res.json(updatedHotDog.rows[0]);
  } catch (error) {
    console.warn(error.message);
  }
});

app.delete('/hot-dogs/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const deletedHotDog = await pool.query(
      'DELETE FROM hot_dogs WHERE id = $1;',
      [id]
    );
    res.json(deletedHotDog)
  } catch (error) {
    console.warn(error.message);
  }
})

app.listen(5000, () => {
  console.log('server started');
})