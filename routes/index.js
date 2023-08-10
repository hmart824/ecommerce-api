const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products_controller');

console.log('Router has started.');

router.get('/products' , productsController.productsList);
router.post('/products/create' , productsController.createProduct);
router.delete('/products/delete/:id', productsController.deleteProduct);
router.patch('/products/update' , productsController.updateProduct);

module.exports = router;