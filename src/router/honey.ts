import { Router } from "express";
import { Honey }  from "..";
import { checkToken } from "../middlewares/checkToken";

export const honeyRouter = Router();

honeyRouter.get("/",  checkToken, async (req, res) => {
    const honey = await Honey.findAll();
    res.json(honey);
});

honeyRouter.get("/:id",  checkToken, async (req, res) => {
    const honey = await Honey.findOne({
        where: { id: req.params.id },
    });
    if (honey) {
        res.json(honey);
    }
    else {
        res.status(404).send("Honey not found");
    }
});

honeyRouter.post("/",  checkToken, async (req, res) => {
    const { title, description, price } = req.body;
    if (!title) {
        res.status(400).send("Missing required information: title");
    }
    else {
        const newHoney = await Honey.create({ title, description, price});
        res.json(newHoney);
    }
});

honeyRouter.put("/:id",  checkToken, async (req, res) => {
    const { title, description, price } = req.body;
    const actual = await Honey.findOne({ where: { id: req.params.id } });
    if (actual) {
        const newHoney = await actual.update({ title, description, price });
        res.json(actual);
    }
    else {
        res.status(404).send("Honey not found");
    }
});

honeyRouter.delete("/:id", checkToken, async (req, res) => {
    const actual = await Honey.findOne({ where: { id: req.params.id } });
    if (actual) {
        await actual.destroy();
        res.status(200).send("Honey removed");
    }
    else {
        res.status(404).send("Honey not found");
    }
});

