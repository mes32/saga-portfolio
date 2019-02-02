const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

// Return all plants joined with boxes
router.get('/', (req, res) => {
    const queryText = `
    SELECT
        projects.id, projects.name AS name, description, thumbnail, 
        website, github, date_completed, tags.name AS tag
    FROM projects JOIN tags
    ON projects.tag_id = tags.id;
    `;
    pool.query(queryText).then((response) => {
        res.send(response.rows);
    }).catch((error) => {
        console.log(`Server error in route GET /project, ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;