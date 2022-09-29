module.exports = (sequelize, Sequelize) => {
    const Advertisements = sequelize.define(
        'advertisements', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: Sequelize.STRING(100)
            },
            descshort: {
                type: Sequelize.STRING
            },
            desclong: {
                type: Sequelize.TEXT
            },
            salary: {
                type: Sequelize.DECIMAL
            },
            place: {
                type: Sequelize.JSON
            },
            workingTime: {
                type: Sequelize.JSON
            },
            contract: {
                type: Sequelize.ENUM('CDI', 'CDD', 'ALTERNANCE')
            },
            published: {
                type: Sequelize.BOOLEAN
            }
});
return Advertisements;
};