const express = require('express');
const Resources = require('./resourcesModel');

//new router
const router = express.Router();

//-------------------
// ENDPOINTS
// url: /api/resources/
//-------------------


// get all resources
// Resources.getAll()
// GET /
//-------------------
router.get('/', (req,res)=>{
  Resources.getAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({ message: 'Failed to get resources '});
    });
});


// post new resource
// Resources.addNew()
// POST / 
//--------------------

router.post('/', (req,res)=>{
  Resources.addNew(req.body)
  .then(data => {
    res.status(201).json(data);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({ message: 'Failed to post resource'});
  });
})


//export
module.exports = router;