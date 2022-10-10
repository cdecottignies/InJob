const db = require('./models')
const Users = db.users;
const companies = db.companies;

const Sequelize = require('sequelize');
// const companies = require('./models/companies');
const Op = Sequelize.Op

// const oui = async () => {
//     const ad = await Users.findAll({
//         include: [{
//             model: companies
//         }]
//     });
//     console.log("All users with their associated tasks:", JSON.stringify(ad, null, 4));

// }

// const run = async () => {
//     await oui()
// }

// run()


// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN "Tasks" ON "Tasks"."userId" = "Users".id;

const findAllWithTasks = async () => {
    const users = await Users.findAll({
        include: [{
            model: companies
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}

const run = async () => {
    await findAllWithTasks()
    await process.exit()
}

run()