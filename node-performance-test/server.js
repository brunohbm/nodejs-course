const express = require('express');

const app = express();

function delay(duration) {
    const startDate = Date.now();

    // Loop that will block the server
    while ((Date.now() - startDate) < duration) { }
}

app.get('/', (req, res) => {
    // PID = Process ID
    res.send(`Empty GET: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    delay(9000);
    // PID = Process ID
    res.send(`GET with delay  ${process.pid}`);
});

app.listen(3000);