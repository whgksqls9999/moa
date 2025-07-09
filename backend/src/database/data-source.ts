import { User } from '@entities/user.entity';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const ApplicationDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    migrations: [__dirname + '/**/migrations/*.js'],
    synchronize: false,
});
