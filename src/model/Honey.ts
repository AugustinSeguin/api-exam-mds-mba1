import { Sequelize, DataTypes } from '@sequelize/core';

export const HoneyModel = (sequelize: Sequelize) => {
    return sequelize.define('honey', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.INTEGER
    });
}