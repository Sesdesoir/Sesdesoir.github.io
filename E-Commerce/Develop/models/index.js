// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Category.hasMany(Product, {
  foreignKey: 'category_id'
});
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


// Products belongToMany Tags (through ProductTag)
      // ::belongs to many:: we're including table 2 with table 1 and they're linked through table 3.
      //...so Tag is being included with Product and they're linked through ProductTag table
Product.belongsToMany(Tag, {
  through: 'ProductTag',
  foreignKey: 'product_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag',
  foreignKey: 'tag_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
