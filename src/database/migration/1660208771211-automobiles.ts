import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class automobiles1660208771211 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "automobiles",
      columns: [
        {
          name: 'id',
          type: 'CHAR',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid()',
        },
        {
          name: 'brand',
          type: 'varchar',
        },
        {
          name: 'model',
          type: 'varchar',
        },
        {
          name: 'registration_number',
          type: 'varchar',
        },
        {
          name: 'registration_country',
          type: 'text',
        },
        {
          name: 'engine_capacity',
          type: 'varchar',
          default: 'uuid()'
        },
        {
          name: 'year',
          type: 'varchar',
          default: 'uuid()'
        },
        {
          name: 'fuel',
          type: 'varchar',
          default: 'uuid()'
        },
        {
          name: 'horse_power',
          type: 'varchar',
          default: 'uuid()'
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
          name: 'automobiles_to_user_fk',
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
    await queryRunner.dropTable('automobiles');
  }

}
