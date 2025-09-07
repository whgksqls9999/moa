import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@entities/user.entity';
import { UsersModule } from '@moduels/users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]), UsersModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
