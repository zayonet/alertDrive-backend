import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ActivityMigration1651959631485 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "activities",
      columns: [
        {
          name: 'id',
          type: 'CHAR',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid()',
        },
        {
          name: 'whitch_food_ate',
          type: 'varchar',
        },
        {
          name: 'whitch_food_drank',
          type: 'varchar',
        },
        {
          name: 'smoked',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'user_id',
          type: 'varchar',
          default: 'uuid()'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: 'activities_to_user_fk',
          referencedTableName: 'users',
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('activities');
  }

}
