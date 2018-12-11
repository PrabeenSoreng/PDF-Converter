const express = require('express');
const word = require('./routes/WordRoutes');

const app = express();

app.use('/api/converter', word);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});