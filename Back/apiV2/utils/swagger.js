const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const version = require('../package.json').version;
const app = require('../server');
// const express = require('express');

// const app = express();
// const log = require('./logger');

// const options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: 'API',
//             version: "1.0.0",
//             description: 'API Documentation',
//         },
//         servers: [
// 			{
// 				url: "http://localhost:8090",
// 			},
// 		],
//     },
//     apis: ['Back/apiV2/routes/advertisements.route.js'],
// };

// const options = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "REST API Docs",
//         version,
//       },
//       components: {
//         securitySchemas: {
//           bearerAuth: {
//             type: "http",
//             scheme: "bearer",
//             bearerFormat: "JWT",
//           },
//         },
//       },
//       security: [
//         {
//           bearerAuth: [],
//         },
//       ],
//     },
//     apis: ["./src/routes.ts", "./src/schema/*.ts"],
//   };

// const options = {
// 	definition: {
// 		openapi: "3.0.0",
// 		info: {
// 			title: "Library API",
// 			version: "1.0.0",
// 			description: "A simple Express Library API",
// 		},
// 		servers: [
// 			{
// 				url: "http://localhost:8090",
// 			},
// 		],
// 	},
// 	apis: ["Back/apiV2/routes/*.js"],
// };

// const swaggerSpec = swaggerJsDoc(options);



// }

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		components: {
            securitySchemes: {
                Authorization: {
                    type: "http",
                    scheme: "Basic",
                    bearerFormat: "JWT",
                    value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjY1OTIwNDE2LCJleHAiOjE2NjYyODA0MTZ9.JfvUbvYuAIj859DMLIu3S5MQ-hhKkqYVyA3NtDeRsA4"
                }
            }
        },
		servers: [
			{
				url: "http://localhost:8090/api",
			},
		],
	},
	apis: ["./routes/*.js", "./models/*.js"],
};
const specs = swaggerJsDoc(options);

function swaggerDocs(app, port) {
    // Swagger Page
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

    // Docs in JSON format
    app.get('docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    console.log('Swagger up and running.')

}


module.exports = swaggerDocs;
