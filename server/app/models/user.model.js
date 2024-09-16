const mongoose = require("mongoose");
const {Schema} = mongoose;
const userSchema = new Schema(
    {
        
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        file:{
            type:[String],
            default:[]
        },
        image:{
            type:String,
            default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
    }
)

const user = mongoose.model('user',userSchema);
user.createIndexes();
module.exports = user;
