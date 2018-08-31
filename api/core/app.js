import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fs from 'fs';
import {studentsRouter} from '../router'

require('dotenv').config();

class App {
    constructor() {

        this.express = express()
        this.middleware();
        this.mountRoutes();


        mongoose.connect(process.env.DB_URI)
            .then(() => {
                console.log('DB connected successfully')
            })
            .catch(err => {
                console.log(err);
            });
    }

    middleware() {
        this.express.use(cors('*'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));

    }

    mountRoutes() {

        const router = express.Router()
        this.express.use('/api/v1', studentsRouter.init());
    }
}

module.exports = new App();