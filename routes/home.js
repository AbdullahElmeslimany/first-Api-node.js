const express = require("express");
const Product = require("../models/product");
const router = express.Router();


router.get("/", async (req, res) => {
    await Product.find().then((data) => {
        res.json({ "message": "Success", "data": data })
    }).catch((err) => {
        res.json({ "message": "Error", "data": err })
    });
});

//get by id
router.get("/:id", async (req, res) => {
    await Product.findById(req.params.id).then((data) => {
        res.json({ "message": "Success", "data": data })
    }).catch((err) => {
        res.json({ "message": "Error", "data": err })
    });
});

//Detete by id
router.delete("/:id", async (req, res) => {
    await Product.deleteOne({ "_id": req.params.id }).then((data) => {
        res.json({ "message": "Success", "data": data })
    }).catch((err) => {
        res.json({ "message": "Error", "data": err })
    });
});

//Edit by id
router.patch("/:id", async (req, res) => {
    await Product.updateOne({ "_id": req.params.id }, { "title": req.body.title }).then((data) => {
        res.json({ "message": "Success", "data": data })
    }).catch((err) => {
        res.json({ "message": "Error", "data": err })
    });
});

router.post("/", (req, res) => {
    // const name = req.body.name;
    // const price = req.body.price;

    // res.status(201).json({ "message": "Added Successfully", "data": { "name": name, "price": price } });

    const product = new Product({
        title: req.body.title,
        price: req.body.price
    });
    product.save().then((data) => {
        res.json({ "message": "Successfully", "data": data })
    }).catch((err) => {
        res.json({ "message": "Error", "data": err })
    });

});

module.exports = router;