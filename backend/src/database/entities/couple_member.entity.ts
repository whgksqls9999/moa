import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';
import { User } from './user.entity';
import { Couple } from './couple.entity';

@Entity('couple_members')
@Unique(['couple_id', 'user_id'])
export class CoupleMember {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('char', { length: 36 })
    couple_id: string;

    @Column('char', { length: 36 })
    user_id: string;

    @ManyToOne(() => Couple, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'couple_id' })
    couple: Couple;

    @OneToOne(() => User, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;
}
