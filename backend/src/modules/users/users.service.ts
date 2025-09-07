import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@entities/user.entity';
import { Repository } from 'typeorm';
import { SignupDto } from '@moduels/auth/dto/signup.dto';
import { v4 } from 'uuid';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { email } });
    }

    async create(dto: SignupDto): Promise<User> {
        const id = v4();
        const user = this.userRepository.create({
            ...dto,
            id,
        });
        return this.userRepository.save(user);
    }
}
