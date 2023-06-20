const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Person extends Model { }

Person.init(
    {
        Id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4
        },
        CompanyId: {
            type: DataTypes.UUIDV4,
        },
        FirstName: {
            type: DataTypes.TEXT
        },
        MiddleName: {
            type: DataTypes.TEXT
        },
        LastName: {
            type: DataTypes.TEXT
        },
        StartDate: {
            type: DataTypes.DATE
        },
        EndDate: {
            type: DataTypes.DATE
        },
        JobTitle: {
            type: DataTypes.TEXT
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        UpdatedAt: {
            type: DataTypes.DATE
        },
        ArchivedAt: {
            type: DataTypes.DATE
        },
        DeletedAt: {
            type: DataTypes.DATE
        }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "person"
}
)
module.exports = Person