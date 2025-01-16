
// // import { sequelize } from "..";
// import { ActorModel } from "./Actor";
import { HoneyModel } from "./Honey";
import { UserModel } from "./User";
import { TokenBlackListModel } from "./TokenBlackList";
// import { MovieActor } from "./MovieActor";
import { Sequelize } from '@sequelize/core';

// export const Movie = MovieModel(sequelize);
// export const Actor = ActorModel(sequelize);
// export const User = UserModel(sequelize);
// export const TokenBlackList = TokenBlackListModel(sequelize);
// export const MovieActorModel = MovieActor(sequelize);

// Movie.belongsToMany(Actor, { through: MovieActorModel });
// Actor.belongsToMany(Movie, { through: MovieActorModel });

export function exportModels(sequelize: Sequelize) {
    const Honey = HoneyModel(sequelize);
    // const Actor = ActorModel(sequelize);
    const User = UserModel(sequelize);
    const TokenBlackList = TokenBlackListModel(sequelize);
    // const MovieActorModel = MovieActor(sequelize);
    // Movie.belongsToMany(Actor, { through: MovieActorModel });
    // Actor.belongsToMany(Movie, { through: MovieActorModel });

    return {
        User,
        TokenBlackList,
        Honey
    };
}