export default () => ({
  port: process.env.PORT,
  url: process.env.DATABASE_URL,
  accessSecret: process.env.ACCESS_SECRET,
  accessTtl: process.env.ACCESS_TTL,
});
