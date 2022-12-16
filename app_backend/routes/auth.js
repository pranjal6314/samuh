const  express =require('express')
const  router =express.Router()
const { body, validationResult } = require('express-validator'); // body is used to check the body of the request
const Admin=require("../models/Admin.js");








// Available Routes
router.get('/', (req, res) => {
  res.send('Hello pranjal!')
})



router.post("/CreateUser",[
    body('email','enter a valid mail id').isEmail(),
    body('password','password must have atleast 5 characters').isLength({ min: 5 })
], async (req,res)=>{

    const admin=Admin(req.body);
    admin.save();
    res.send(req.body);
})


module.exports = router












//login  a user using : post /api/auth/login 
router.post("/login",[
    body('email','enter a valid mail id').isEmail(),
    body('password','password can not be blank').exists(),
  ], async (req,res)=>{

    let success=true;
     //if there  are error , return bad req and error
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
      success=false;
       return res.status(400).json({success, errors: errors.array() });
     }
    
     let {email,password}=req.body;

     try{
       
         let admin=await Admin.findOne({email});
         console.log(admin)
         if(!admin){
            success=false;
            return res.status(400).json({success,error:"2please try to login with correct credentials"})
          }
        //   password=this.toString(password);
          const passwordCompare= password.localeCompare(admin.password);
        console.log("passwordCompare : ",passwordCompare)
            if(passwordCompare){
              success=false;
              return res.status(400).json({success,error:"11please try to login with correct credentials"})
            };

            const data={
                admin:{
                    id:admin.id
                }
            }
           res.json({success,data});
     }catch(err){
       console.error(err.message);
       res.status(500).send("Internal server error");
     }
  })



module.exports = router