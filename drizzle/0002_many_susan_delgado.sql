ALTER TABLE "records" DROP CONSTRAINT "records_default_currency_name_currencies_name_fk";
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "username" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "password" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "records" ADD CONSTRAINT "records_default_currency_name_currencies_name_fk" FOREIGN KEY ("default_currency_name") REFERENCES "public"."currencies"("name") ON DELETE cascade ON UPDATE no action;