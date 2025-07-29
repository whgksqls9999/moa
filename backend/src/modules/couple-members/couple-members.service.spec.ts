import { Test, TestingModule } from '@nestjs/testing';
import { CoupleMembersService } from './couple-members.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigService } from '@config/config.service';
import { CoupleMember } from '@entities/couple_member.entity';

describe('CoupleMembersService', () => {
    let service: CoupleMembersService;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({ isGlobal: true }),
                TypeOrmModule.forRootAsync({
                    useClass: DatabaseConfigService,
                }),
                TypeOrmModule.forFeature([CoupleMember]),
            ],
            providers: [CoupleMembersService, DatabaseConfigService],
        }).compile();

        service = module.get<CoupleMembersService>(CoupleMembersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('returns couple members array', async () => {
        const coupleMembers = await service.findAll();
        expect(Array.isArray(coupleMembers)).toBe(true);
    });
});
