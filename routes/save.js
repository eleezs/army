const mongoose = require('mongoose');
const express =  require('express');
const router = express.Router();


const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // minlength: 5,
    // maxlength: 255
  },

  age: {
    type: Number,
    required: true
  },

  rank: {
    type: String,
    required: true,
    // enum: ['recuit', 'coporal', 'sergent'],
    // lowercase:true
  },

  state: {
    type: String,
    // required: true,
    // enum: ['imo', 'kano', 'oyo']
  },

  salaray: {
    type:Number,
    // required: true,
    // maxlength:6
  }
});

const CustId = mongoose.model("custId", customerSchema);

router.get("/register", (req, res) => {
    res.sendFile("./register.html");
});
  
//Create
router.post("/register", async(req, res)=>{
  let custData = new CustId (req.body);
  await custData.save()
    .then(data => {
      //return res.redirect ('signupSuc.html')
      res.send("item saved to database");
      // return res.sendFile(__dirname + "/signupSuc.html");
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
    // return res.redirect ('signupSuc.html')
  });



module.exports = router;
