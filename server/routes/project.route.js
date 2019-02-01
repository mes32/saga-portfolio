const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

// Return all plants joined with boxes
router.get('/', (req, res) => {
    const queryText = `
    SELECT
        id, name, description, thumbnail, 
        website, github, date_completed, tag_id 
    FROM "projects";
    `;
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(`Server error in route GET /project, ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;