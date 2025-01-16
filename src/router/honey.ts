import { Router } from "express";
import { Honey }  from "..";

export const honeyRouter = Router();

honeyRouter.get("/", async (req, res) => {
    const honey = await Honey.findAll();
    res.json(honey);
});

honeyRouter.get("/:id", async (req, res) => {
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

honeyRouter.post("/", async (req, res) => {
    const { title, description, price } = req.body;
    if (!title) {
        res.status(400).send("Missing required information: title");
    }
    else {
        const newHoney = await Honey.create({ title, description, price});
        res.json(newHoney);
    }
});

honeyRouter.put("/:id", async (req, res) => {
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

honeyRouter.delete("/:id", async (req, res) => {
    const actual = await Honey.findOne({ where: { id: req.params.id } });
    if (actual) {
        await actual.destroy();
        res.status(200).send("Honey removed");
    }
    else {
        res.status(404).send("Honey not found");
    }
});

