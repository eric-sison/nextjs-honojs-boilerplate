import { count, DrizzleTypeError, SQL, Subquery } from "drizzle-orm";
import { PgTable, TableLikeHasEmptySelection } from "drizzle-orm/pg-core";
import { PgViewBase } from "drizzle-orm/pg-core/view-base";
import db from "@/db/connection";

export const paginate = async <TFrom extends PgTable | Subquery | PgViewBase | SQL>(
  source: TableLikeHasEmptySelection<TFrom> extends true
    ? DrizzleTypeError<"Cannot reference a data-modifying statement subquery if it doesn't contain a `returning` clause">
    : TFrom,
  page?: number,
  limit?: number,
) => {
  try {
    return await db.transaction(async (tx) => {
      limit = limit ?? 10;
      page = page ?? 1;
      const offset = (page - 1) * limit;

      const total = await tx.select({ count: count() }).from(source);
      const data = await tx.select().from(source).limit(limit).offset(offset);

      return {
        data,
        metadata: {
          itemsPerPage: limit,
          totalItems: total[0].count,
          currentPage: page,
          totalPages: Math.ceil(Number(total[0].count) / limit),
        },
      };
    });
  } catch (error) {
    throw error;
  }
};
