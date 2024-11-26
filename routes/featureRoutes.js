const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

// router.get(
//     '/admin-only',
//     authMiddleware,
//     roleMiddleware('admin_feature'),  // Assuming 'admin_feature' is a valid feature name in your DB
//     (req, res) => {
//       res.json({ message: 'Access granted to admin feature' });
//     }
//   );
  

// router.get(
//   '/user-feature',
//   authMiddleware,
//   roleMiddleware('user_feature'),
//   (req, res) => {
//     res.json({ message: 'Access granted to user feature' });
//   }
// );

module.exports = router;
