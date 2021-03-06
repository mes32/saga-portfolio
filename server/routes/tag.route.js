const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

// Route: GET /tag
// Return all project tags
router.get('/', (req, res) => {
    const queryText = `
    SELECT id, name
    FROM tags;
    `;
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(`Server error in route GET /tag, ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;