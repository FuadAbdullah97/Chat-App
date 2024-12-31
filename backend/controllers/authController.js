import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup =  async (req,res)=>{
try {
    const {fullName, userName, password, confirmPassword, gender} = req.body;

    if(password !== confirmPassword){
        res.status(400).json({
           error:  "The Password Did Not Match"
        })
    }

    const user = await User.findOne({userName});
    if(user){
        res.status(400).json({
           error:  "User already exist"
        })
    }

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hashSync(password, salt);

    const newUser = new User({
        fullName, 
        userName, 
        password : hashedPassword, 
        gender,
        profilePic : gender === "male" ? boyProfilePic : girlProfilePic,
    })


    if(newUser){
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
                    _id: newUser._id,
                    fullName : newUser.fullName,
                    userName : newUser.userName,
                    profilePic : newUser.profilePic
                })
    
    }else {
        res.status(400).json({
            error : "User data is Invalid",
        })
    }

                    
    
} catch (error) {
    res.status(500).json({
       error : "There is an internal error in Signup Controller"
    })
}
}





export const login  = async (req,res)=>{
    try {

        const {userName,password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");


        if (!user || !isPasswordCorrect) {
            return res.status(200).json({
                error : "Invalid Username Or Password"
            })
        }

        generateTokenAndSetCookie(user._id, res);

        return res.status(201).json({
            _id: user._id,
            fullName : user.fullName,
            userName : user.userName,
            profilePic : user.profilePic
        })
        
    } catch (error) {
        res.status(500).json({
           error : "There is an internal error in Login Controller"
        })
    }

    
}



export const logout =  (req,res) => {
    try {
        res.cookie("jwt", "", {maxAge : 0});
        res.status(200).json({
            message : 'Logged out successfully'
        })
    } catch (error) {
        res.status(500).json({
            error : "There is an internal error in Logout Controller"
         })
    }
}

