# [Payment Manager API](https://lab3.payment-manager.pp.ua)

Simple backend app

### Requirements

- Git
- Node.js v18+
- Yarn v4

### Local setup

1. Clone repository
    ```sh
    git clone https://github.com/bohdanbulakh/payment-manager
    cd payment-manager
    ```
2. Checkout the tag, which corresponds to the number of laboratory work:
   ```sh
   git checkout v3.0.0
   ```
3. Install dependencies
     ```sh
    yarn install
    ```
4. Create `.env` file in root directory of the app, use [.env.example](.env.example) as reference
5. Apply migrations to your database:
   ```sh
   yarn drizzle-kit migrate
   ```
6. Start application
   ```sh
   yarn start:dev
   ```

### Running with Docker Compose

1. Create `.env` file in root directory of the app, use [.env.example](.env.example) as reference
> [!WARNING]
> If your database and api both are running in docker containers, your `DATABASE_URL` should look like this:
`DATABASE_URL=postgres://username:password@DATABASE_CONTAINER_NAME:DATABASE_PORT_INSIDE_DATABASE_CONTAINER/database_name`
2. Start docker compose
   ```sh
   docker compose up --build
   ```
3. Apply migrations to your database:
   ```sh
   yarn drizzle-kit migrate
   ```
4. Stop docker compose
   ```sh
   docker compose down
   ```
