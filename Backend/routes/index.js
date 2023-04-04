const express = require('express');
const router = express.Router();

const FormData = require('../models/formData');

router.post('/form-data', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(200).send(formData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/all-form-data', async (req, res) => {
  try {
    const allformData = await FormData.find();
    res.json(allformData);
    
  } catch (err) {
    
    res.json({ err})
  }
});



module.exports = router