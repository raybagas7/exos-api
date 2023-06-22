/* istanbul ignore file */
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const client: MongoClient =
  process.env.NODE_ENV === 'test'
    ? new MongoClient(process.env.MONGODBHOST_TEST as string)
    : new MongoClient(process.env.MONGODBHOST as string);

export const exosMongoDB =
  process.env.NODE_ENV === 'test'
    ? client.db(process.env.MONGODBDATABSE_TEST)
    : client.db(process.env.MONGODBDATABSE);
