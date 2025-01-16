import { Sequelize, DataTypes } from '@sequelize/core';

export const TagModel = (sequelize: Sequelize) => {
    return sequelize.define('tag', {
        tag: DataTypes.STRING,
    });
}
