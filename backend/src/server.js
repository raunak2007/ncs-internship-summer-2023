const express = require('express');
const app = express();
const port = 8080; // Change the port to 8080

// Add your backend routes and logic here

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
