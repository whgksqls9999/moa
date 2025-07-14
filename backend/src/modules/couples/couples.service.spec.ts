import { Test, TestingModule } from '@nestjs/testing';
import { CouplesService } from './couples.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from '@config/config.service';
import { Couple } from '@entities/couple.entity';

describe('CouplesService', () => {
    let service: CouplesService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({ isGlobal: true }),
                TypeOrmModule.forRootAsync({
                    useClass: DatabaseConfigService,
                }),
                TypeOrmModule.forFeature([Couple]),
            ],
            providers: [CouplesService, DatabaseConfigService],
        }).compile();

        service = module.get<CouplesService>(CouplesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('returns couples array', async () => {
        const couples = await service.findAll();
        expect(Array.isArray(couples)).toBe(true);
    });
});
