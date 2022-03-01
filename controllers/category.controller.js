const db = require("../models");
const Category = db.category;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  // #swagger.tags = ['Category']
  // #swagger.description = 'Endpoint para obtener todas las categorias'
  // #swagger.parameters['name']={ description:'nombre de las categoria.' }

  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Category.findAll({ where: condition })
    .then(data => {
       /* #swagger.responses [200] = {
              schema: { $ref: "#/definitions/categories"},
              description : 'categoria encontrada.'
          }*/
          return res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.findOne = (req, res) => {
  // #swagger.tags = ['Category']
  // #swagger.description = 'Endpoint para obtener una categoria'
  // #swagger.parameters['id']={ description: 'ID de la categoria.' }
  
    const id = req.params.id;
    console.log(id)
    Category.findByPk(id, {include:["products"]})
      .then(data => {
        if (data) {
          /* #swagger.responses [200] = {
              schema: { $ref: "#/definitions/category"},
              description : 'categoria encontrada.'
          }*/
          return res.status(200).send(data)
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