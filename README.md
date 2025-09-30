# [Payment Manager API](https://lab2.payment-manager.pp.ua)
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
2. Install dependencies
     ```sh
    yarn install
    ```
3. Create `.env` file in root directory of the app, use [.env.example](.env.example) as reference
4. Start application
   ```sh
   yarn start:dev
   ```
### Running with Docker Compose
1. Create `.env` file in root directory of the app, use [.env.example](.env.example) as reference
2. Start docker compose
   ```sh
   docker compose up --build
   ```
3. Stop docker compose
   ```sh
   docker compose down
   ```
