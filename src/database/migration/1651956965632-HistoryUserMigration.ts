import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HistoryUserMigration1651956965632 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "history_users",
      columns: [
        {
          name: 'id',
          type: 'CHAR',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid()',
        },
        {
          name: 'accident_before',
          type: 'varchar',
        },
        {
          name: 'is_taking_medicine_now',
          type: 'varchar',
        },
        {
          name: 'is_sick_now',
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
          name: 'history_to_user_fk',
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
    await queryRunner.dropTable('history_users');
  }

}
