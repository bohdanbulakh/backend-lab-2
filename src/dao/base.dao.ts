import { InferSelectModel, InferInsertModel, eq } from 'drizzle-orm';
import { schema } from '../db/schema';
import { AnyPgTable } from 'drizzle-orm/pg-core';
import { PostgresDatabase } from '../db/drizzle.module';

// all tables
export type Schema = typeof schema;
export type SchemaTables = Schema[keyof Schema];

export abstract class BaseDao<
  TTable extends SchemaTables,
  Row extends InferSelectModel<TTable> = InferSelectModel<TTable>,
  InsertRow extends InferInsertModel<TTable> = InferInsertModel<TTable>,
> {
  protected constructor(
    protected readonly table: TTable,
    protected readonly postgres: PostgresDatabase,
  ) {}

  public async getById(id: Row['id']): Promise<Row | undefined> {
    const [row] = await this.postgres
      .select()
      .from(this.table as AnyPgTable)
      .where(eq(this.table.id as any, id));

    return row as Row | undefined;
  }

  public async getAll(): Promise<Row[]> {
    return this.postgres.select().from(this.table as AnyPgTable) as Promise<
      Row[]
    >;
  }

  public async create(data: Omit<InsertRow, 'id'>): Promise<Row> {
    const [row] = await this.postgres
      .insert(this.table as AnyPgTable)
      .values(data)
      .returning();
    return row as Row;
  }

  public async update(
    id: Row['id'],
    data: Partial<Omit<Row, 'id'>>,
  ): Promise<Row | undefined> {
    const [row] = await this.postgres
      .update(this.table as AnyPgTable)
      .set(data)
      .where(eq(this.table.id as any, id))
      .returning();
    return row as Row | undefined;
  }

  public async delete(id: Row['id']): Promise<Row | undefined> {
    const [row] = await this.postgres
      .delete(this.table as AnyPgTable)
      .where(eq(this.table.id as any, id))
      .returning();
    return row as Row | undefined;
  }
}
