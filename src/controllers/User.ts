import express from 'express';
import { UserModel } from '../models/User';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

const mysql = require('mysql2/promise');
const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.MYSQL_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

router.get('/data', async (req, res) => {
  try {
    const results = await Promise.all([
      db.query('SELECT * FROM tasks'),
      db.query('SELECT * FROM dependencies'),
    ]);

    const tasks = results[0][0],
      dependencies = results[1][0];

    res.send({
      success: true,
      tasks: {
        rows: tasks,
      },
      dependencies: {
        rows: dependencies,
      },
    });
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get('/teamsid/:id', async (req, res) => {
  try {
    const user: any = await UserModel.findOne({
      where: { teamsId: req.params.id },
    });

    if (user) {
      return res.send({ role: user?.role });
    } else {
      return res.send(null);
    }
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const address = await UserModel.findByPk(req.params.id);
    return res.send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const address = await UserModel.findAll();
    return res.send(address);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const address = await UserModel.create(req.body);
    return res.send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const address = await UserModel.update(req.body, {
      where: { id: req.params.id },
    });
    return res.send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const address = await UserModel.destroy({
      where: { id: req.params.id },
    });
    return res.send(address);
  } catch (error) {
    return res.status(400).send(error);
  }
});

export default router;
