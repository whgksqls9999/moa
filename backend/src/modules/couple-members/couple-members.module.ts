import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoupleMember } from '@entities/couple_member.entity';
import { CoupleMembersService } from './couple-members.service';

@Module({
    imports: [TypeOrmModule.forFeature([CoupleMember])],
    providers: [CoupleMembersService],
    exports: [CoupleMembersService],
})
export class CoupleMembersModule {}
