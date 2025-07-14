import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
