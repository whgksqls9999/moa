import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CoupleMember } from './couple_member.entity';

@Entity('couples')
export class Couple {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 12 })
    code: string;

    @OneToMany(() => CoupleMember, (member) => member.couple)
    members: CoupleMember[];

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;
}
