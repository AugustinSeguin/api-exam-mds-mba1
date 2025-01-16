
import { HoneyModel } from "./Honey";
import { UserModel } from "./User";
import { TokenBlackListModel } from "./TokenBlackList";
import { TagModel } from "./Tag";
import { Sequelize } from '@sequelize/core';
import { HoneyTagModel } from "./HoneyTag";

export function exportModels(sequelize: Sequelize) {
    const Honey = HoneyModel(sequelize);
    const User = UserModel(sequelize);
    const TokenBlackList = TokenBlackListModel(sequelize);
    const Tag = TagModel(sequelize);
    const HoneyTag = HoneyTagModel(sequelize);

    Honey.belongsToMany(Tag, { through: HoneyTagModel });

    return {
        User,
        TokenBlackList,
        Honey, 
        Tag,
        HoneyTag
    };
}