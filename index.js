require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send("Welcome to my first AWS deployment!")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${port}`);
});