const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        let user = new User({ name, password, email });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user});
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }
};
/*
//User Authentication
const createUser = async(req,res) =>{
  let user = await User.findOne({email:req.body.email});
  if(!user){
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		user = await new User({ ...req.body,password: hashPassword }).save();

		const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
      email:user.email,
      info:{
        message:"EmailVerification"
      }
		}).save();
		const url = `${process.env.FRONTWEB}/users/${user.id}/verify/${token.token}`;
		await sendEmail(user.email, "Verify Email", url);

		return res.status(200).json({ message: "An Email sent to your account please verify" });
  }
  else if(!user.verify){
    const tok = await Token.findOne({userId:user._id});
    if(tok&&tok.info.message=="EmailVerification"){
      
      const url = `${process.env.FRONTWEB}/users/${user._id}/verify/${tok.token}`;
		  await sendEmail(user.email, "Verify Email", url);
      return res.status(200).json({ message: "An Email sent to your account please verify" });

    }
    const token = await new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
      email:user.email,
      info:{
        message:"EmailVerification"
      }
		}).save();
		const url = `${process.env.FRONTWEB}/users/${user._id}/verify/${token.token}`;
		await sendEmail(user.email, "Verify Email", url);

		return res.status(200).json({ message: "An Email sent to your account please verify" });
  }
  return res.status(400).json({message:"User All ready Exist"})

}
const VerifyUser = async(req,res)=>{


  try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) return res.status(400).json({ message: "Invalid link" });
    
		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token&&token.info.message!="EmailVerification") return res.status(400).json({ message: "Invalid link" });
    if(user.verify) return res.status(200).json({ info:user.Username, message: "Email verified successfully"  })
    const _short_Data = await new shortList({userId:user._id}).save();
    const _Friend_List = await new Friend({userId:user._id}).save();
    const _CHAT_ROOM_LIST = await new chatRoom({userId:user._id}).save();
    const userUpdate= await User.findOneAndUpdate({ _id: user._id},{ verify: true,Username:Usergenerate(token.email,user._id),chatRoomId:_CHAT_ROOM_LIST,shortList:_short_Data._id,friendId:_Friend_List._id },{new:true});
    delete userUpdate.password;
    const jwtData = jwtToken.sign(userUpdate,process.env.jwt_secreat)
		return res.status(200).json({info:userUpdate.Username, message: "Email verified successfully" });
	} catch (error) {
    console.log(error)
		return res.status(500).json({ message: "Internal Server Error" });
	}
}
const LogIn = async(req,res)=>{
  try{
    let user = await User.findOne({Username:req.body.Username});
    if(!user){
      user = await User.findOne({email:req.body.Username});
      if(!user){
        return res.status(400).json({error:"please try to login with correct credentials"});
      }
    }
    const passwordCompare = await bcrypt.compare(req.body.password,user.password);
    if(!user.verify){
      return res.status(400).json({error:"please try to login with correct credentials"})

    }
    if(!passwordCompare){
      return res.status(400).json({error:"please try to login with correct credentials"})
    }
    delete user._doc.password;
    const jwtData = jwtToken.sign({...user._doc},process.env.jwt_secreat)
    res.cookie('uid', jwtData, { httpOnly: true, secure: true, sameSite: 'Strict' });
		res.status(200).json({info:{...user._doc}, message: "Login successful" });
  }catch(e){
    res.status(500).json({message:'Internal Server Error'});
  }
}*/
module.exports = {
    createUser,
    getUsers,
}