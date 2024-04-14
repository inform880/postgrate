import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';
import config from '../config';

const { dbEnvKey } = config();

const { Pool } = pkg;

export default new Pool({ connectionString: process.env[dbEnvKey] });
