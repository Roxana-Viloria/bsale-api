const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./app.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Bsale API",
        description: "Documentacion de la base de datos Api bsale, para desarrollo de proyecto de super mercado"
    },
    host: "localhost:3001",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        categories: [{
            id:"1",
            name: "bebidas energeticas"
        }],
        category:{
            id: "1",
            name: "ron",
            products:[
                {
                    id: "1",
                    name:"Ron EL Abuelo",
                    urlImage:"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
                    price:"1400",
                    discount:"10"
                }
            ]
        },
        products: [{
            id: "1",
            name:"Ron EL Abuelo",
            urlImage:"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            price:"1400",
            discount:"10" 
        }],
        product:{
            id: "1",
            name:"Ron EL Abuelo",
            urlImage:"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            price:"1400",
            discount:"10"
        }
    }
}


swaggerAutogen(outputFile, endpointsFiles, doc)