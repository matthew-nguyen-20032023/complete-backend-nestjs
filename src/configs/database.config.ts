export const DATABASE_CONFIG = {
  type: process.env.MASTER_DATABASE_TYPE,
  host: process.env.MASTER_DATABASE_HOST,
  port: process.env.MASTER_DATABASE_PORT,
  userName: process.env.MASTER_DATABASE_USER,
  password: process.env.MASTER_DATABASE_PASS,
  databaseName: process.env.MASTER_DATABASE_NAME,
};
