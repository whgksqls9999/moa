import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDatabaseConfig } from './const';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfigService } from 'src/config/config.service';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseConfigService,
        }),
    ],
    providers: [DatabaseConfigService],
    exports: [TypeOrmModule],
})
export class DatabaseModule {}
