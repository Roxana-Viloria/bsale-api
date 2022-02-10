module.exports = {
    HOST: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    USER: "bsale_test",
    PASSWORD: "bsale_test",
    DB: "bsale_test",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };