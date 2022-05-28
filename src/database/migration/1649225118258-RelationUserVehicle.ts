import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUserVehicle1649225118258 implements MigrationInterface {
    name = 'RelationUserVehicle1649225118258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`countries\` (\`id\` varchar(36) NOT NULL, \`country_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`nif\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`birthday\` varchar(255) NOT NULL, \`gender\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`photo\` varchar(255) NULL, \`street\` varchar(255) NULL, \`house_number\` varchar(255) NULL, \`post_code\` varchar(255) NULL, \`city\` varchar(255) NULL, \`country_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`body_users\` (\`id\` varchar(36) NOT NULL, \`heights\` varchar(255) NOT NULL, \`weigh\` varchar(255) NOT NULL, \`blood_type\` varchar(255) NOT NULL, \`body_pressure_min\` varchar(255) NOT NULL, \`body_pressure_max\` varchar(255) NOT NULL, \`glicemia\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_c076ec64c006c8640ce1cf47f8\` (\`blood_type\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`books\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`description\` text NULL, \`author\` varchar(255) NULL, \`publishing_company\` varchar(255) NULL, \`image\` varchar(255) NOT NULL, \`category\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`deseases\` (\`id\` varchar(36) NOT NULL, \`desease_name\` varchar(255) NOT NULL, \`desease_type\` varchar(255) NOT NULL, \`description\` text NULL, \`user_id\` varchar(255) NOT NULL, \`body_user_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`job_users\` (\`id\` varchar(36) NOT NULL, \`occupation\` varchar(255) NOT NULL, \`start_work_time\` varchar(255) NOT NULL, \`end_work_time\` varchar(255) NOT NULL, \`period\` varchar(255) NOT NULL, \`company\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles\` (\`id\` varchar(36) NOT NULL, \`brand\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`registration_number\` varchar(255) NOT NULL, \`registration_country\` varchar(255) NOT NULL, \`engine_cc\` varchar(255) NULL, \`year\` varchar(255) NOT NULL, \`fuel\` varchar(255) NOT NULL, \`horse_power\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_2abf18fae2b9477bc192767531\` (\`registration_number\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sensores\` (\`id\` varchar(36) NOT NULL, \`accelerometerX\` varchar(255) NOT NULL, \`accelerometerY\` varchar(255) NOT NULL, \`accelerometerZ\` varchar(255) NOT NULL, \`gyroscopeX\` varchar(255) NOT NULL, \`gyroscopeY\` varchar(255) NOT NULL, \`gyroscopeZ\` varchar(255) NOT NULL, \`latitude\` varchar(255) NULL, \`longitude\` varchar(255) NULL, \`altitude\` varchar(255) NULL, \`user_id\` varchar(255) NOT NULL, \`vehicle_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`vehicles_users_users\` (\`vehiclesId\` varchar(36) NOT NULL, \`usersId\` varchar(36) NOT NULL, INDEX \`IDX_14016662a4b7ad68f0dacab96c\` (\`vehiclesId\`), INDEX \`IDX_f951464e59ff6ee430370b9fc0\` (\`usersId\`), PRIMARY KEY (\`vehiclesId\`, \`usersId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_ae78dc6cb10aa14cfef96b2dd90\` FOREIGN KEY (\`country_id\`) REFERENCES \`countries\`(\`id\`) ON DELETE RESTRICT ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`body_users\` ADD CONSTRAINT \`FK_00af94d763bbae925bfb0878237\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`books\` ADD CONSTRAINT \`FK_d2211ba79c9312cdcda4d7d5860\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`deseases\` ADD CONSTRAINT \`FK_b589a6437aed79e370ee97a4e39\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`deseases\` ADD CONSTRAINT \`FK_aab354fe6615e48fe6a3ff4d8e3\` FOREIGN KEY (\`body_user_id\`) REFERENCES \`body_users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
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
        await queryRunner.query(`ALTER TABLE \`deseases\` DROP FOREIGN KEY \`FK_aab354fe6615e48fe6a3ff4d8e3\``);
        await queryRunner.query(`ALTER TABLE \`deseases\` DROP FOREIGN KEY \`FK_b589a6437aed79e370ee97a4e39\``);
        await queryRunner.query(`ALTER TABLE \`books\` DROP FOREIGN KEY \`FK_d2211ba79c9312cdcda4d7d5860\``);
        await queryRunner.query(`ALTER TABLE \`body_users\` DROP FOREIGN KEY \`FK_00af94d763bbae925bfb0878237\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_ae78dc6cb10aa14cfef96b2dd90\``);
        await queryRunner.query(`DROP INDEX \`IDX_f951464e59ff6ee430370b9fc0\` ON \`vehicles_users_users\``);
        await queryRunner.query(`DROP INDEX \`IDX_14016662a4b7ad68f0dacab96c\` ON \`vehicles_users_users\``);
        await queryRunner.query(`DROP TABLE \`vehicles_users_users\``);
        await queryRunner.query(`DROP TABLE \`sensores\``);
        await queryRunner.query(`DROP INDEX \`IDX_2abf18fae2b9477bc192767531\` ON \`vehicles\``);
        await queryRunner.query(`DROP TABLE \`vehicles\``);
        await queryRunner.query(`DROP TABLE \`job_users\``);
        await queryRunner.query(`DROP TABLE \`deseases\``);
        await queryRunner.query(`DROP TABLE \`books\``);
        await queryRunner.query(`DROP INDEX \`IDX_c076ec64c006c8640ce1cf47f8\` ON \`body_users\``);
        await queryRunner.query(`DROP TABLE \`body_users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`countries\``);
    }

}
