import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/api/ping', (req, res) => {
	res.json({ ok: true, time: Date.now() });
});

// simple users endpoints
app.get('/api/users', async (req, res) => {
	try {
		const [rows] = await pool.query('SELECT id, name, email FROM users');
		res.json(rows);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

app.post('/api/users', async (req, res) => {
	const { name, email } = req.body;
	if (!name || !email)
		return res.status(400).json({ error: 'name and email required' });
	try {
		const [result] = await pool.query(
			'INSERT INTO users (name, email) VALUES (?, ?)',
			[name, email]
		);
		res.status(201).json({ id: result.insertId, name, email });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Database error' });
	}
});

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});
