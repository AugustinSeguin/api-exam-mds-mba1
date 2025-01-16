import { Router } from "express";
import { TokenBlackList, User } from "..";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { DecodeToken, checkToken } from "../middlewares/checkToken";

export const authRouter = Router();

authRouter.post("/me-connecter", async (req, res) => {
    const { nom_utilisateur, mdp } = req.body;
    const user = await User.findOne({ where: { username: nom_utilisateur } });
    if (!user) {
        res.status(400).json("Email or Password is incorrect");
    }
    else {
        const isPasswordCorrect = await bcrypt.compare(mdp, user.dataValues.password);
        if (isPasswordCorrect) {
            delete user.dataValues.password;
            const token = jwt.sign(user.dataValues, process.env.JWT_SECRET!);
            res.json({ letoken:
                token
            });
        }
        else {
            res.status(400).json("Email or Password is incorrect");
        }
    }
})

authRouter.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    const userWithEmail = await User.findOne({ where: { email } });
    if (userWithEmail) {
        res.status(400).json("Erreur rencontrée lors de la création de votre compte. Veuillez réessayer.");
    }
    const userWithUsername = await User.findOne({ where: { username } });
    if (userWithUsername) {
        res.status(400).json("Erreur rencontrée lors de la création de votre compte. Veuillez réessayer.");
    }
    else {
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS!));
        const newUser = await User.create({ username, password: hashedPassword, email });
        delete newUser.dataValues.password;
        const token = jwt.sign(newUser.dataValues, process.env.JWT_SECRET!);
        res.json({
            token,
            ...newUser.dataValues
        });
    }
});

authRouter.post("/test", async (req, res) => {
    res.status(400).json("test");
});

authRouter.post("/logout", checkToken, async (req, res) => {
    const decoded = jwt.decode(req.token!) as DecodeToken
    const user = await User.findOne({ where: { id: decoded.id } });
    if (user) {
        await TokenBlackList.create({ token: req.token });
        res.json("Logged out");
    }
    else {
        res.status(404).json("User not found");
    }
})
