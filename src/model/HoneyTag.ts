import { Sequelize, DataTypes } from '@sequelize/core';

export const HoneyTagModel = (sequelize: Sequelize) => {
    return sequelize.define('honey_tag', {
        tagId:  DataTypes.INTEGER,
        honeyId: DataTypes.INTEGER,
    });
}
