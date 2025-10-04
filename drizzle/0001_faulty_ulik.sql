CREATE TABLE "currencies" (
	"name" varchar(3) PRIMARY KEY NOT NULL
);
--> statement-breakpoint
ALTER TABLE "records" ADD COLUMN "default_currency_name" varchar(3) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "default_currency_name" varchar(3) NOT NULL;--> statement-breakpoint
ALTER TABLE "records" ADD CONSTRAINT "records_default_currency_name_currencies_name_fk" FOREIGN KEY ("default_currency_name") REFERENCES "public"."currencies"("name") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_default_currency_name_currencies_name_fk" FOREIGN KEY ("default_currency_name") REFERENCES "public"."currencies"("name") ON DELETE no action ON UPDATE no action;