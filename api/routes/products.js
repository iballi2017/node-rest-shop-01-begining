const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET requests to /products"
    });
});

router.post('/', (req, res, next) => {
    //To meet up the requirement to the body-parser, whenever we create a route, we should create
    //what the client is expected to have i.e create the "product"
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: "Handling POST requests to /products",
        //attach the created product hear to be sent
        createdProduct: product
    })
})

router.get('/:productid', (req, res, next) => {
    const id = req.params.productid;
    if (id === 'special'){
        res.status(200).json({
            message: "You discovered a SPECIAL ID",
            id: id
        })
    }else{
        res.status(200).json({
            message: "You passed and ID"
        })
    }
})

router.patch('/:productid', (req, res, next) => {
        res.status(200).json({
            message: "Updated product!",
        })
})


router.delete('/:productid', (req, res, next) => {
    res.status(200).json({
        message: "Deleted product!",
    })
})

module.exports = router;