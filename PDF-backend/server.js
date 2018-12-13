const express = require('express');
const cors = require('cors');
const word = require('./routes/WordRoutes');

const app = express();
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/converter', word);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});