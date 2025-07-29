import { Couple } from '@entities/couple.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouplesService } from './couples.service';

@Module({
    imports: [TypeOrmModule.forFeature([Couple])],
    providers: [CouplesService],
    exports: [CouplesService],
})
export class CouplesModule {}
