const router = require('express').Router();
const Marks = require('../models/Marks');

router.post('/new-entry', async (req,res)=>{
    console.log(req.body);
    const mark = new Marks({
        Physics: req.body.Physics,
        Chemistry: req.body.Chemistry,
        Maths: req.body.Maths,
        Total: req.body.Marks,
        Percentage: req.body.Percentage,
        Name: req.body.Name,
        RollNo: req.body.RollNo
    });
    const savedbooking = await mark.save();
    res.json({status: "success"})
        
})


router.get('/all-entries', async (req,res)=>{
    console.log(req.body);

    const allEntries = await Marks.find();
    res.json({
        allEntries: allEntries
    })
})


module.exports = router;