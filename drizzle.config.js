/** @type { import ("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:C3XFnbm6ezOR@ep-shiny-sun-a122g3ml.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
};
