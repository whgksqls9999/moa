import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@config/config.service';
import { User } from '@entities/user.entity';

describe('UsersService', () => {
    let service: UsersService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({ isGlobal: true }),
                TypeOrmModule.forRootAsync({
                    useClass: DatabaseConfigService,
                }),
                TypeOrmModule.forFeature([User]),
            ],
            providers: [UsersService, DatabaseConfigService],
        }).compile();

        service = module.get<UsersService>(UsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('returns users array', async () => {
        const users = await service.findAll();
        expect(Array.isArray(users)).toBe(true);
    });
});
