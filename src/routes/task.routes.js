const express = require('express');
const router = express.Router(); 
const Task = require('../models/task');
 

router.get( '/', async (req, res) => {

    const tasks = await Task.find().sort('title');
    console.log(tasks);
    res.json(tasks); 
  });


  router.get( '/:id', async (req, res) => {
    const tasks = await Task.find({"_id": req.params.id}); 
    console.log(tasks);
    res.json(tasks);
    
  });
 
router.post( '/', async (req, res) => {
  const {title, description} = req.body;
  const newtask = new Task({title, description});
  await newtask.save();
  console.log(newtask); 
  res.json({status : 'Task saved'});
});



router.put( '/:id', async (req, res) => {
  const {title, description} = req.body;
  const thenewtask = new Task({title, description});
  await Task.findByIdAndUpdate(req.params.id, {title: title, description: description});
  res.json({status : 'Task update'});
  

});



router.delete( '/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id); 
  res.json({status : 'Task deleted'});


});

 

module.exports = router;