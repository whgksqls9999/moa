import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigModule } from './config/config.module';

@Module({
    imports: [
        DatabaseModule,
        DatabaseConfigModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
    ],
})
export class AppModule {}
