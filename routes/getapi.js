const express = require('express');
const router = express.Router();

const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));


const url = 'https://api.publicapis.org/entries';

const options = {
    method: 'GET',
}

const getApis = async () => {
    try {
        const res = await fetch(url, options);
        const json = await res.json();
        return json
    } catch (error) {
        return error
    }
}

router.get('/', async function(req, res) {
    const apis = await getApis();
    res.status(200).send(apis);
});

module.exports = router;