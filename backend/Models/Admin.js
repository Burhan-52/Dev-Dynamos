const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
adminSchema.pre('save',async function(){
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
})

adminSchema.methods.comparePassword = async function(passString){   
    const ans = await bcrypt.compare(passString,this.password);
    return ans;
}
module.exports =  mongoose.model("admin", adminSchema);