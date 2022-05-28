import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUserJob1649321612572 implements MigrationInterface {
    name = 'RelationUserJob1649321612572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`FK_7620c74a249e99263ba0fbcc22f\` ON \`sensores\``);
        await queryRunner.query(`DROP INDEX \`FK_cf8bfccaae2ddd93e2cb1677e3e\` ON \`sensores\``);
        await queryRunner.query(`ALTER TABLE \`job_users\` ADD UNIQUE INDEX \`IDX_5ad32dccf7718a9c725ff82576\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`photo\` \`photo\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`street\` \`street\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`house_number\` \`house_number\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`post_code\` \`post_code\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`city\` \`city\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`author\` \`author\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`publishing_company\` \`publishing_company\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`category\` \`category\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`deseases\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`engine_cc\` \`engine_cc\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`horse_power\` \`horse_power\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`latitude\` \`latitude\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`longitude\` \`longitude\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`altitude\` \`altitude\` varchar(255) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_5ad32dccf7718a9c725ff82576\` ON \`job_users\` (\`user_id\`)`);
        await queryRunner.query(`ALTER TABLE \`job_users\` ADD CONSTRAINT \`FK_5ad32dccf7718a9c725ff82576c\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`sensores\` ADD CONSTRAINT \`FK_7620c74a249e99263ba0fbcc22f\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`sensores\` ADD CONSTRAINT \`FK_cf8bfccaae2ddd93e2cb1677e3e\` FOREIGN KEY (\`vehicle_id\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` ADD CONSTRAINT \`FK_14016662a4b7ad68f0dacab96c0\` FOREIGN KEY (\`vehiclesId\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` ADD CONSTRAINT \`FK_f951464e59ff6ee430370b9fc09\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` DROP FOREIGN KEY \`FK_f951464e59ff6ee430370b9fc09\``);
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` DROP FOREIGN KEY \`FK_14016662a4b7ad68f0dacab96c0\``);
        await queryRunner.query(`ALTER TABLE \`sensores\` DROP FOREIGN KEY \`FK_cf8bfccaae2ddd93e2cb1677e3e\``);
        await queryRunner.query(`ALTER TABLE \`sensores\` DROP FOREIGN KEY \`FK_7620c74a249e99263ba0fbcc22f\``);
        await queryRunner.query(`ALTER TABLE \`job_users\` DROP FOREIGN KEY \`FK_5ad32dccf7718a9c725ff82576c\``);
        await queryRunner.query(`DROP INDEX \`REL_5ad32dccf7718a9c725ff82576\` ON \`job_users\``);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`altitude\` \`altitude\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`longitude\` \`longitude\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`latitude\` \`latitude\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`horse_power\` \`horse_power\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`engine_cc\` \`engine_cc\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`deseases\` CHANGE \`description\` \`description\` text NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`category\` \`category\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`publishing_company\` \`publishing_company\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`author\` \`author\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`description\` \`description\` text NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`post_code\` \`post_code\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`house_number\` \`house_number\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`street\` \`street\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`photo\` \`photo\` varchar(255) NULL DEFAULT ''NULL''`);
        await queryRunner.query(`ALTER TABLE \`job_users\` DROP INDEX \`IDX_5ad32dccf7718a9c725ff82576\``);
        await queryRunner.query(`CREATE INDEX \`FK_cf8bfccaae2ddd93e2cb1677e3e\` ON \`sensores\` (\`vehicle_id\`)`);
        await queryRunner.query(`CREATE INDEX \`FK_7620c74a249e99263ba0fbcc22f\` ON \`sensores\` (\`user_id\`)`);
    }

}
