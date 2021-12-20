const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: { type: String, min: 3, max: 100, required: true },
  email: { type: String, min: 8, max: 255, required: true },
  password: { type: String, min: 8, max: 1024, required: true },
  resume: {
    personal:{
      name: { type: String, min: 3, max: 100},
      address: { type: String, min: 8, max: 255},
      email: { type: String, min: 8, max: 255 },
      mobile: { type: String, min: 8, max: 15 },
      dob: { type: String, min: 8, max: 20,},
      sex: { type: String, min: 1, max: 6 },
      
    },
    education: [{
      type: { type: String, required: true},
      year: { type: Number, required: true},
      institute: { type: String, required: true},
      gpa: { type: Number, required: true},
    }],
    info: {
      father: { type: String, min: 3, max: 100 },
      mother: { type: String, min: 3, max: 100 },
      status: { type: String, min: 3, max: 10 },
      hobby: { type: String, min: 3, max: 255 },
      religion: { type: String, min: 3, max: 10 },
      blood: { type: String, min: 2, max: 10 },
      nationality: { type: String, min: 3, max: 15},
      permanent: { type: String, min: 8, max: 255}
    },
    languages: [String],
    skills: [String]
  }
});

module.exports = mongoose.model('User', UserSchema);