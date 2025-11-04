<!-- 1. CREATE (Insert Data) -->
Create single document
const user = await User.create({ name: "John", email: "john@gmail.com" });

OR
const user = new User({ name: "John", email: "john@gmail.com" });
await user.save();

Create multiple documents
await User.insertMany([
  { name: "A" },
  { name: "B" }
]);

// Sequelize
Create one record
const user = await User.create({ name: "John", email: "john@gmail.com" });

Create multiple
await User.bulkCreate([
  { name: "A" },
  { name: "B" }
]);

<!-- READ (Find / Query Data) -->
// mongoose
await User.find(); -> all users
await User.findOne({emailL'vivek@gmail.com'});
await User.findById("67676767545");
await User.find({age:{$gte:18}}) -> filter
await User.find().sort({name:1}); -> ascending
await User.find().limit(10).skip(20) -> pagination
await User.countDocuments({ isActive: true });

// Sequelize
await User.findAll(); -> all users
await User.findOne({where:{email:'vivek@gmail.com'}});
await User.findByPk(1) -> primary key
await User.findAll({where: {age:{[Op.gte]:10}}})-> filter
await User.findAll({ order: [["name", "ASC"]] }); // sort
await User.findAndCountAll({ limit: 10, offset: 20 }); // pagination

<!-- UPDATE -->
// mongoose
await User.updateOne({email:'vivek@gmail.com'},{$set: {name:'Vivek}});
await User.findByIdAndUpdate(id,{name:'updated'},{new:true});
await User.updateMany({ isActive: false }, { $set: { isActive: true } });

// Sequelize
await User.update(
    {name:'Johnny'},
    {where: {email: 'vivek@gmail.com'}}
)

// Return updated object
const user = await User.findByPk(1);
user.name = "Updated";
await user.save();

<!-- DELETE -->
// mongoose
await User.deleteOne({email:'vivek@gmail.com'})
await User.deleteMany({isActive:false});
await User.findByIdAndDelete(id)

// Sequelize
await User.destroy({where:{email:'vivek@gmail.com'}})
await User.destroy({ where: { isActive: false } });


<!-- RELATIONSHIPS / POPULATION -->
// mongoose
 Example: A post belongs to a user
await Post.find().populate("userId","name email")'

// Sequelize
 Define relation
User.hasMany(Post);
Post.belongsTo(User);

Include related data
await Post.findAll({ include: [User] });

<!-- FILTERING & CONDITIONS -->
mongoose
await User.find({age:{$gte:18.$lte:30}});
await User.find({name:{$rgex: /^A/i}}) -> starts with A
await User.find({$or:[{age:25}, {name:'Vivek'}]})

sequelize
const { Op } = require("sequelize");

await User.findAll({
  where: {
    age: { [Op.between]: [18, 30] },
    [Op.or]: [{ name: "John" }, { email: "x@gmail.com" }]
  }
});

<!-- ADVANCED QUERIES -->
mongoose
await Order.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
]);

sequelize
await Order.findAll({
  attributes: ["userId", [sequelize.fn("SUM", sequelize.col("amount")), "total"]],
  group: ["userId"],
});
