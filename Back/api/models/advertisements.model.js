module.exports = (sequelize, Sequelize) => {
    const Advertisements = sequelize.define(
        'advertisements', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            descshort: {
                type: Sequelize.STRING,
                allowNull: true
            },
            desclong: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            salary: {
                type: Sequelize.DECIMAL,
                allowNull: true
            },
            place: {
                type: Sequelize.JSON,
                allowNull: false
            },
            workingTime: {
                type: Sequelize.JSON,
                allowNull: true
            },
            contract: {
                type: Sequelize.ENUM('CDI', 'CDD', 'ALTERNANCE'),
                allowNull: false
            },
            published: {
                type: Sequelize.BOOLEAN
            }
});
return Advertisements;
};