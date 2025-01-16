import { Sequelize, DataTypes } from '@sequelize/core';

export const TokenBlackListModel = (sequelize: Sequelize) => {
    return sequelize.define('token-black-list', {
        token: DataTypes.STRING,
    });
}