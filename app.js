const express = require('express');
const { sequelize } = require('./models');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const featureRoutes = require('./routes/featureRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/features', featureRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ force: false }); // Set `force: true` for testing to recreate tables
    console.log('Database connected and tables synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Error starting server:', err.message);
  }
})();
