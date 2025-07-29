import { Couple } from '@entities/couple.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CouplesService {
    constructor(
        @InjectRepository(Couple)
        private coupleRepository: Repository<Couple>,
    ) {}

    async findAll(): Promise<Couple[]> {
        return this.coupleRepository.find();
    }
}
