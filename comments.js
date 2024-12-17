// Create web server
//const express = require('express');
//const app = express();
//const path = require('path');
//const bodyParser = require('body-parser');
//const fs = require('fs');
//const commentsPath = path.join(__dirname, 'comments.json');
//const comments = require(commentsPath);
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
//app.get('/comments', (req, res) => {
//    res.json(comments);
//});
//app.post('/comments', (req, res) => {
//    comments.push(req.body);
//    fs.writeFile(commentsPath, JSON.stringify(comments, null, 2), (err) => {
//        if (err) {
//            return res.status(500).end();
//        }
//        res.status(200).end();
//    });
//});
//app.listen(3000, () => {
//    console.log('Server is running on http://localhost:3000');
//});
//console.log('Server running on http://localhost:3000');