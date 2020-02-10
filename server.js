const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const port = process.env.PORT || 8000;

// Profile routes
app.use('/api/v1/profile', require('./routes/profile'));

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});