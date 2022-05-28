import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FuelMigration1651901587248 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "fuels",
      columns: [
        {
          name: 'id',
          type: 'CHAR',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid()',
        },
        {
          name: 'fuel',
          type: 'varchar',
        },
        {
          name: 'vehicle_id',
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
          name: 'fuel_to_vehicle_fk',
          referencedTableName: 'vehicles',
          columnNames: ['vehicle_id'],
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fuels');
  }

}
