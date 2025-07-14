import { CoupleMember } from '@entities/couple_member.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoupleMembersService {
    constructor(
        @InjectRepository(CoupleMember)
        private coupleMemberRepository: Repository<CoupleMember>,
    ) {}

    async findAll(): Promise<CoupleMember[]> {
        return this.coupleMemberRepository.find();
    }
}
