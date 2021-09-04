/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node/register');
const dotenv = require('dotenv').config().parsed;

export const NODE_ENV = (process.env.NODE_ENV || 'production').trim();

export const IS_DEV = NODE_ENV !== 'production' && NODE_ENV !== 'test';
export const IS_PROD = NODE_ENV === 'production';
export const IS_TEST = NODE_ENV === 'test';

export const APP_PORT = process.env.APP_PORT;

export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_DB = process.env.DATABASE_DB;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_PORT = Number(process.env.DATABASE_PORT);
