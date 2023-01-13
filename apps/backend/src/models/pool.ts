import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { connectionString } from '../settings';
dotenv.config();

export const pool = new Pool({ connectionString });
