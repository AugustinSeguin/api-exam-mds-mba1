import { Router } from "express";
import { Tag }  from "..";
import { checkToken } from "../middlewares/checkToken";

export const tagRouter = Router();

tagRouter.get("/",  checkToken, async (req, res) => {
    const tag = await Tag.findAll();
    res.json(tag);
});

tagRouter.get("/:id",  checkToken, async (req, res) => {
    const tag = await Tag.findOne({
        where: { id: req.params.id },
    });
    if (tag) {
        res.json(tag);
    }
    else {
        res.status(404).send("Tag not found");
    }
});

tagRouter.post("/",  checkToken, async (req, res) => {
    const { title, description, price } = req.body;
    if (!title) {
        res.status(400).send("Missing required information: title");
    }
    else {
        const newHoney = await Tag.create({ title, description, price});
        res.json(newHoney);
    }
});

tagRouter.put("/:id",  checkToken, async (req, res) => {
    const { title, description, price } = req.body;
    const actual = await Tag.findOne({ where: { id: req.params.id } });
    if (actual) {
        const newHoney = await actual.update({ title, description, price });
        res.json(actual);
    }
    else {
        res.status(404).send("Tag not found");
    }
});

tagRouter.delete("/:id", checkToken, async (req, res) => {
    const actual = await Tag.findOne({ where: { id: req.params.id } });
    if (actual) {
        await actual.destroy();
        res.status(200).send("Tag removed");
    }
    else {
        res.status(404).send("Tag not found");
    }
});

