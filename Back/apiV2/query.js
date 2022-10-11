const db = require('./models')
const Users = db.users;
const Companies = db.companies;
const advertisements = db.advertisements;

const Sequelize = require('sequelize');
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

// Permet de tester l'association user belongs to companie & companie as many user
const findAllWithTasks = async () => {
    const users = await Users.findAll({
        include: [{
            model: companies
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}

// const run = async () => {
//     await findAllWithTasks()
//     await process.exit()
// }

// Permet de tester l'association user belongs to companie & companie as many user
const findAllUserWithAd = async () => {
    const users = await Users.findAll({
        include: [{
            model: advertisements
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(users, null, 4));
}

// const run = async () => {
//     await findAllUserWithAd()
//     await process.exit()
// }

const findAllCompanieWithAd = async () => {
    const companies = await Companies.findAll({
        include: [{
            model: advertisements
        }]
    });
    console.log("All users with their associated tasks:", JSON.stringify(companies, null, 4));
}

const run = async () => {
    await findAllCompanieWithAd()
    await process.exit()
}

run()
