const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.put('/updateProducts/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { products } = req.body;
    console.log(email)
    console.log(products)
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add new items to the existing products array
    user.products.push(products);

    // Save the updated user
    const updatedUser = await user.save();

    return res.json({ message: 'Products updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
