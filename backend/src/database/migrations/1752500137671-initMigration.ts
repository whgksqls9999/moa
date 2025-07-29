import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1752500137671 implements MigrationInterface {
    name = 'InitMigration1752500137671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP FOREIGN KEY \`couple_members_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP FOREIGN KEY \`couple_members_ibfk_2\``);
        await queryRunner.query(`DROP INDEX \`couple_id\` ON \`couple_members\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`couple_members\``);
        await queryRunner.query(`DROP INDEX \`code\` ON \`couples\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP COLUMN \`couple_id\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD \`couple_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` CHANGE \`user_id\` \`user_id\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD UNIQUE INDEX \`IDX_68fe0489af23dc750bd685be5a\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`couples\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`couples\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD \`id\` varchar(36) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`couples\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_b28686ab1f3a61d79303007589\` ON \`couple_members\` (\`couple_id\`, \`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_68fe0489af23dc750bd685be5a\` ON \`couple_members\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD CONSTRAINT \`FK_e5095027433c26408fe068c59eb\` FOREIGN KEY (\`couple_id\`) REFERENCES \`couples\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD CONSTRAINT \`FK_68fe0489af23dc750bd685be5a7\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP FOREIGN KEY \`FK_68fe0489af23dc750bd685be5a7\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP FOREIGN KEY \`FK_e5095027433c26408fe068c59eb\``);
        await queryRunner.query(`DROP INDEX \`REL_68fe0489af23dc750bd685be5a\` ON \`couple_members\``);
        await queryRunner.query(`DROP INDEX \`IDX_b28686ab1f3a61d79303007589\` ON \`couple_members\``);
        await queryRunner.query(`ALTER TABLE \`couples\` CHANGE \`created_at\` \`created_at\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`couples\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD \`id\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`couples\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` CHANGE \`created_at\` \`created_at\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP INDEX \`IDX_68fe0489af23dc750bd685be5a\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` CHANGE \`user_id\` \`user_id\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP COLUMN \`couple_id\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD \`couple_id\` char(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD \`id\` char(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`code\` ON \`couples\` (\`code\`)`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`couple_members\` (\`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`couple_id\` ON \`couple_members\` (\`couple_id\`, \`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD CONSTRAINT \`couple_members_ibfk_2\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD CONSTRAINT \`couple_members_ibfk_1\` FOREIGN KEY (\`couple_id\`) REFERENCES \`couples\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
