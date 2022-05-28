import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationWeatherUserVehicle1649590539916 implements MigrationInterface {
    name = 'RelationWeatherUserVehicle1649590539916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` DROP FOREIGN KEY \`FK_f951464e59ff6ee430370b9fc09\``);
        await queryRunner.query(`CREATE TABLE \`weathers\` (\`id\` varchar(36) NOT NULL, \`road_type\` varchar(255) NULL, \`current_speed\` varchar(255) NULL, \`free_flow_speed\` varchar(255) NULL, \`data_confidence\` varchar(255) NULL, \`weather_description\` text NULL, \`temperature\` varchar(255) NOT NULL, \`pressure\` varchar(255) NOT NULL, \`humidity\` varchar(255) NOT NULL, \`visibility\` varchar(255) NOT NULL, \`wind_speed\` varchar(255) NULL, \`wind_direction\` varchar(255) NULL, \`cloudiness\` varchar(255) NULL, \`user_id\` varchar(255) NULL, \`vehicle_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`aboutme\` text NULL`);
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
        await queryRunner.query(`ALTER TABLE \`weathers\` ADD CONSTRAINT \`FK_5b3c4c0667887bf0ba9e79dbbd7\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`weathers\` ADD CONSTRAINT \`FK_6be6cbdfa973439ad563b8f4914\` FOREIGN KEY (\`vehicle_id\`) REFERENCES \`vehicles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` ADD CONSTRAINT \`FK_f951464e59ff6ee430370b9fc09\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` DROP FOREIGN KEY \`FK_f951464e59ff6ee430370b9fc09\``);
        await queryRunner.query(`ALTER TABLE \`weathers\` DROP FOREIGN KEY \`FK_6be6cbdfa973439ad563b8f4914\``);
        await queryRunner.query(`ALTER TABLE \`weathers\` DROP FOREIGN KEY \`FK_5b3c4c0667887bf0ba9e79dbbd7\``);
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
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`aboutme\``);
        await queryRunner.query(`DROP TABLE \`weathers\``);
        await queryRunner.query(`ALTER TABLE \`vehicles_users_users\` ADD CONSTRAINT \`FK_f951464e59ff6ee430370b9fc09\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
