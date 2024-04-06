const dotenv = require("dotenv");

dotenv.config();
const config = {
  app: {
    port: 8080,
  },
  db: {
    uri: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zpliwo8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  },
};

module.exports = config;
