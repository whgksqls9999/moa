import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryColumn('char', { length: 36 })
    id: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    password_hash: string;

    @Column({ type: 'varchar', length: 50 })
    nickname: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at: Date;
}
