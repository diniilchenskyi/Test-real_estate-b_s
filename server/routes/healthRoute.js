const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

function getDbState() {
    const s = mongoose.connection.readyState;
    const map = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
    return map[s] ?? String(s);
}

router.get('/health', (req, res) => {
    res.json({ ok: true, db: getDbState() });
});

module.exports = router;
