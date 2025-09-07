import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfigService } from '@config/config.service';
import { User } from '@entities/user.entity';
import { SignupDto } from '@moduels/auth/dto/signup.dto';
import { Repository } from 'typeorm';

describe('UsersService', () => {
    let service: UsersService;
    let userRepository: Repository<User>;

    const mockUserRepository = {
        findOne: jest.fn(),
        save: jest.fn(),
    };

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({ isGlobal: true }),
                TypeOrmModule.forRootAsync({
                    useClass: DatabaseConfigService,
                }),
                TypeOrmModule.forFeature([User]),
            ],
            providers: [
                UsersService,
                DatabaseConfigService,
                {
                    provide: getRepositoryToken(User),
                    useValue: mockUserRepository,
                },
            ],
        }).compile();

        service = module.get<UsersService>(UsersService);
        userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    });

    beforeEach(() => {
        mockUserRepository.findOne.mockReset();
        mockUserRepository.save.mockReset();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('returns users array', async () => {
        const users = await service.findAll();
        expect(Array.isArray(users)).toBe(true);
    });

    it('should create a new user succesfully', async () => {
        const dto: SignupDto = {
            email: 'testemail@test.com',
            nickname: 'testnickname',
            password: 'testpassword',
        };

        mockUserRepository.findOne.mockResolvedValue(null);
        mockUserRepository.save.mockResolvedValue({
            ...dto,
            id: 'test-uuid-1234-5678',
        });

        const result = await service.create(dto);

        // expect(mockUserRepository.findOne).toHaveBeenCalledWith({
        //     where: { email: dto.email },
        // });

        expect(mockUserRepository.save).toHaveBeenCalledWith(
            expect.objectContaining({
                email: dto.email,
                nickname: dto.nickname,
            }),
        );

        expect(result).toHaveProperty('id');
        expect(result.email).toBe(dto.email);
    });
});
