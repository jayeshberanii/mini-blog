const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

// Connect to the database
require('./config/db');
// Server listing port
const port = process.env.PORT || 5000;

app.use(express.json());

// Routes for posts
app.use('/api/posts', require('./routes/postRoutes'));

// Start the server
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});