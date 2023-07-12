const Item = require('../../models/item');

module.exports = {
  index,
  show, 
  create
};

async function index(req, res) {
  try{
    const items = await Item.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

async function create(req, res, next){
  try {
    const createdItem = await Item.create(req.body)
    const user = await User.findOne({ email: res.locals.data.email })
    user.items.addToSet(createdItem)
    await user.save()
    res.locals.data.item = createdItem
    next()
    
    
    
  } catch (error) {
    
  }

}