import User from "../models/User.model.js";
import bcryptjs from 'bcryptjs'

export const registerUser = async (req, res, next) =>{
    const { username, email, password } = req.body;

    // validation
    if(!username || !password || !email || username =='' || password =='' || email ==''){
        return next({statusCode:400, message:'please provide all required fields'})
    }

    // is user already existed
    const user = await User.findOne({ email });
    if(user){
        next({statusCode: 400, message: 'Email already existed'})
    }

    try {
        // hash password
        const hashedPassword = await bcryptjs.hash(password, 10);
        
        // new user created
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // save user
        await newUser.save();

        res.status(201).json({
            message: `Account created Successfully for ${username}`,
            success: true
        })
    } catch (error) {
        next(error)
    }
};