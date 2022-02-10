const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false 
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.product = require("./product.model.js")(sequelize, Sequelize);
db.category = require("./category.model.js")(sequelize, Sequelize);
db.category.hasMany(db.product, { as: "products", foreignKey: "category"});
db.product.belongsTo(db.category, { as: "category_category", foreignKey: "category"})
module.exports = db;

