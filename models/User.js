const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model { }
User.init(
    {
        Id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        CompanyId: {
            type: DataTypes.UUIDV4
        },
        LastSignedIn: {
            type: DataTypes.DATE
        },
        UserName: {
            type: DataTypes.TEXT
        },
        NormalizedName: {
            type: DataTypes.TEXT
        },
        EMAIL: {
            type: DataTypes.TEXT
        },
        NormalizedEmail: {
            type: DataTypes.TEXT
        },
        EmailConfirmed: {
            type: DataTypes.BOOLEAN
        },
        PasswordHas: {
            type: DataTypes.TEXT
        },
        SecurityStamp: {
            type: DataTypes.TEXT
        },
        ConcurrencyStamp: {
            type: DataTypes.TEXT
        },
        PhoneNumber: {
            type: DataTypes.TEXT
        },
        TwoFactorEnable: {
            type: DataTypes.BOOLEAN
        },
        LockoutEnabled: {
            type: DataTypes.BOOLEAN
        },
        AccessFailedCount: {
            type: DataTypes.INTEGER
        },
        Status: {
            type: DataTypes.TEXT
        }, CreatedAt: {
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: "user"
    }
)

module.exports = User