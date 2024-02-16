// import the model
const { Product } = require('../models/productsModel');

// get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get a product by id
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// create a new product
exports.createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// update a product by id
exports.updateProductById = async (req, res) => {
    try {
        const product = await Product.update(req.body, {
            where: {
                product_id: req.params.id
            }
        });
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json(product);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// delete a product by id
exports.deleteProductById = async (req, res) => {
    try {
        const product = await Product.destroy({
            where: {
                product_id: req.params.id
            }
        });
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.status(200).json({ message: 'Product deleted' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
