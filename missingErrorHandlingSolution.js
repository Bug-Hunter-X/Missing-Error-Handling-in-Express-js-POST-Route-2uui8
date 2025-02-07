const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body || !req.body.name || !req.body.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const user = req.body;
  db.createUser(user)
    .then(() => {
      res.status(201).send();
    })
    .catch(error => {
      console.error('Error creating user:', error);
      const errorMessage = error.message || 'Failed to create user';
      res.status(500).json({ error: errorMessage });
    });
});
// ...rest of the code