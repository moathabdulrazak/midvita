const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();

// Initialize Firebase Admin SDK
const serviceAccount = require('/path/to/midvita-firebase-adminsdk-b4q3r-7079c51a0c.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-name.firebaseio.com'
});

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
