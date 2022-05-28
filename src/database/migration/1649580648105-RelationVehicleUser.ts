import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationVehicleUser1649580648105 implements MigrationInterface {
    name = 'RelationVehicleUser1649580648105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`engine_cc\` \`engine_cc\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`horse_power\` \`horse_power\` varchar(255) NULL`);
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
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`latitude\` \`latitude\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`longitude\` \`longitude\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`altitude\` \`altitude\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`altitude\` \`altitude\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`longitude\` \`longitude\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`sensores\` CHANGE \`latitude\` \`latitude\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`deseases\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`category\` \`category\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`publishing_company\` \`publishing_company\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`author\` \`author\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`books\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`post_code\` \`post_code\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`house_number\` \`house_number\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`street\` \`street\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`photo\` \`photo\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`horse_power\` \`horse_power\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`vehicles\` CHANGE \`engine_cc\` \`engine_cc\` varchar(255) NULL DEFAULT 'NULL'`);
    }

}
