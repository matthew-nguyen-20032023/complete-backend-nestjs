export const DATABASE_CONFIG = {
  type: process.env.MASTER_DATABASE_TYPE,
  host: process.env.MASTER_DATABASE_HOST,
  port: process.env.MASTER_DATABASE_PORT,
  username: process.env.MASTER_DATABASE_USER,
  password: process.env.MASTER_DATABASE_PASS,
  database: process.env.MASTER_DATABASE_NAME,
  entities: [
    __dirname + '/../models/entities/*.entity{.ts,.js}',
  ],
};
