const express = require('express');
const pool = require('../modules/pool.js');

const router = express.Router();

// Return all projects joined to include their tags
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

// Insert a new project
router.post('/', (req, res) => {
    const project = req.body;
    const insertArray = [
        project.name, 
        project.description, 
        project.thumbnail, 
        project.website, 
        project.github,
        project.date_completed,
        project.tag_id
    ];
    const queryText = `
    INSERT INTO projects
        (name, description, thumbnail, website, github, date_completed, tag_id)
        VALUES
        ($1, $2, $3, $4, $5, $6, $7);
    `;
    pool.query(queryText, insertArray).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(`Server error in route POST /project, ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;