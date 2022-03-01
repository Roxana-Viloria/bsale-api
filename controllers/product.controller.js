const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para obtener todos los productos'
  // #swagger.parameters['name']={ description:'texto de busqueda con el nombre de los productos.' }
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Product.findAll({ where: condition })
    .then(data => {
      /* #swagger.responses [200] = {
              schema: { $ref: "#/definitions/products"},
              description : 'productos encontrados.'
          }*/
          return res.status(200).send(data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  // #swagger.tags = ['Products']
  // #swagger.description = 'Endpoint para obtener un producto'
  // #swagger.parameters['id']={ description: 'ID del producto.' }
    const id = req.params.id;
    Product.findByPk(id)
      .then(data => {
         /* #swagger.responses [200] = {
              schema: { $ref: "#/definitions/product"},
              description : 'producto encontrado.'
          }*/
          return res.status(200).send(data)
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
};



