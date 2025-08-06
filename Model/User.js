import mongoose from 'mongoose';

const useSchema = new mongoose.Schema({
    Name : {type:String,require:true},
    Email : {type:String,require:true},
    Password: {type:String,require:true},
    CreatedAt : {type:Date,default:Date.now}
});
      
export const User = mongoose.model("user",useSchema);