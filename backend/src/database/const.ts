import { ModuleMetadata } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function getDatabaseConfig(): TypeOrmModuleOptions & ModuleMetadata {
    return {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT!) || 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + ''],
        synchronize: true,
    };
}
