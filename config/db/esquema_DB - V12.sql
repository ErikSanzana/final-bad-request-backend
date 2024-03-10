CREATE DATABASE jabon;

\c jabon;

CREATE TABLE "user" (
  "id" SERIAL UNIQUE PRIMARY KEY ,
  "email" VARCHAR UNIQUE NOT NULL,
  "password" VARCHAR NOT NULL CHECK (length(password) >= 6),
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW() ,
  "updated_at" TIMESTAMP,
  "rut" VARCHAR(20) UNIQUE NOT NULL,
  "name" VARCHAR NOT NULL,
  "last_name" VARCHAR NOT NULL,
  "last_name_second" VARCHAR NOT NULL,
  "birth_date" TIMESTAMP NOT NULL CHECK (birth_date < created_at ), 
  "is_banned" BOOLEAN NOT NULL DEFAULT false,

CONSTRAINT check_rut_format CHECK (
    rut ~ '^\d{1,2}\.\d{3}\.\d{3}-(\d|k)$' OR 
    rut ~ '^\d{1,2}\d{3}\d{3}-(\d|k)$')

  );

CREATE TABLE "address" (
  "postal_code" INT NOT NULL UNIQUE PRIMARY KEY,
  "user_id" INT NOT NULL REFERENCES "user"(id),
  "street_name" VARCHAR NOT NULL,
  "phone" VARCHAR NOT NULL,
  "Number" INT NOT NULL,
  "commune" VARCHAR NOT NULL,
  "city" VARCHAR NOT NULL,
  "region" VARCHAR NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW() NOT NULL ,
  "updated_at" TIMESTAMP DEFAULT NOW() NOT NULL

);

CREATE TABLE "admin" (
  "id" SERIAL UNIQUE NOT NULL,
  "admin_mail" VARCHAR UNIQUE NOT NULL,
  "admin_name" VARCHAR UNIQUE NOT NULL,
  "admin_pass" VARCHAR NOT NULL,
  "isAdmin" BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE "products" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "description" VARCHAR NOT NULL,
  "price" INT NOT NULL,
  "stock" INT NOT NULL,
  "product_image" TEXT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW() NOT NULL ,
  "updated_at" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "sale_products" (
  "id" SERIAL UNIQUE NOT NULL PRIMARY KEY,
  "admin_id" INT NOT NULL REFERENCES "admin"(id),
  "product_id" INT NOT NULL REFERENCES "products"(id),
  "created_at" TIMESTAMP DEFAULT NOW() NOT NULL ,
  "updated_at" TIMESTAMP DEFAULT NOW() NOT NULL

);

CREATE TABLE "favorites" (
  "id" SERIAL UNIQUE NOT NULL,
  "client_id" INT NOT NULL REFERENCES "user"(id),
  "product_id" INT NOT NULL REFERENCES "products"(id)
);

CREATE TABLE "store_cart" ( 
  "id" SERIAL UNIQUE PRIMARY KEY,
  "client_id" INT NOT NULL REFERENCES "user"(id),
  "product_id" INT NOT NULL REFERENCES "products"(id),
  "product_price" INT NOT NULL,
  "product_amount" INT NOT NULL,
  "total_price" INT NOT NULL

);

CREATE TABLE "buy_order" (
  "id" SERIAL UNIQUE PRIMARY KEY,
  "client_id" INT NOT NULL REFERENCES "user"(id),
  "client_rut" INT NOT NULL,
  "postal_code" INT NOT NULL REFERENCES "address"(postal_code),
  "product_id" INT NOT NULL REFERENCES "products"(id),
  "product_image" TEXT NOT NULL,
  "product_price" INT NOT NULL,
  "product_amount" INT NOT NULL,
  "total_price" INT NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW() NOT NULL,
  -- "payment" BOOLEAN NOT NULL DEFAULT false,  -- para pasarela de pago de una ?
  "send" BOOLEAN NOT NULL DEFAULT false,
  "send_at" TIMESTAMP
);

-- actualizar la columna.. "update_at" de cada tabla que la usa... listadas abajo

CREATE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language plpgsql;

CREATE TRIGGER user_updated_at_trigger
BEFORE UPDATE ON "user"
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at();

CREATE TRIGGER user_updated_at_trigger
BEFORE UPDATE ON "address"
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at();

CREATE TRIGGER user_updated_at_trigger
BEFORE UPDATE ON "products"
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at();

CREATE TRIGGER user_updated_at_trigger
BEFORE UPDATE ON "sale_products"
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at();

