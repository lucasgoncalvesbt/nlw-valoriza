import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1633894246938 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "email",
            type: "uuid",
          },
          {
            name: "admin",
            type: "boolean",
            default: false,
          },
          {
            name: "created_At",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_At",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
