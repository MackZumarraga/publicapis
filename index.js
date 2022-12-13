const express = require('express');
const getApis = require('./routes/getapi');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Home!')
});

app.use('/getApis', getApis)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});