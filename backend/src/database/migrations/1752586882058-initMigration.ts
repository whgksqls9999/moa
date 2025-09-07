import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1752586882058 implements MigrationInterface {
    name = 'InitMigration1752586882058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password_hash\` \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`couple_members\` (\`id\` varchar(36) NOT NULL, \`couple_id\` varchar(36) NOT NULL, \`user_id\` char(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_b28686ab1f3a61d79303007589\` (\`couple_id\`, \`user_id\`), UNIQUE INDEX \`REL_68fe0489af23dc750bd685be5a\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`couples\` (\`id\` varchar(36) NOT NULL, \`code\` varchar(12) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD CONSTRAINT \`FK_e5095027433c26408fe068c59eb\` FOREIGN KEY (\`couple_id\`) REFERENCES \`couples\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`couple_members\` ADD CONSTRAINT \`FK_68fe0489af23dc750bd685be5a7\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP FOREIGN KEY \`FK_68fe0489af23dc750bd685be5a7\``);
        await queryRunner.query(`ALTER TABLE \`couple_members\` DROP FOREIGN KEY \`FK_e5095027433c26408fe068c59eb\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`password\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`couples\``);
        await queryRunner.query(`DROP INDEX \`REL_68fe0489af23dc750bd685be5a\` ON \`couple_members\``);
        await queryRunner.query(`DROP INDEX \`IDX_b28686ab1f3a61d79303007589\` ON \`couple_members\``);
        await queryRunner.query(`DROP TABLE \`couple_members\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`password\` \`password_hash\` varchar(255) NOT NULL`);
    }

}
