const Joi = require('@hapi/joi');

const personalSchema = Joi.object({
  name: Joi.string().min(3).max(100),
  email: Joi.string().min(8).max(255).email(),
  sex: Joi.string().min(3).max(6),
  dob: Joi.string().min(8).max(20),
  address: Joi.string().min(8).max(255),
  mobile: Joi.string().min(8).max(15)
});

const eduSchema = Joi.object({
  _id: Joi.string(),
  type: Joi.string().required(),
  institute: Joi.string().required(),
  year: Joi.number().required(),
  gpa: Joi.number().required()
});

const infoSchema = Joi.object({
  father: Joi.string().min(3).max(100),
  mother: Joi.string().min(3).max(100),
  nationality: Joi.string().min(3).max(15),
  permanent: Joi.string().min(8).max(255),
  religion: Joi.string().min(3).max(10),
  blood: Joi.string().min(2).max(10),
  status: Joi.string().min(3).max(10),
  hobby: Joi.string().min(3).max(255)
});

const resumeSchema = Joi.object({
  personal: personalSchema,
  education: Joi.array().items(eduSchema),
  info: infoSchema,
  skills: Joi.array(),
  languages: Joi.array()
});

// const cValid = resume => {
//   return personalSchema.validate(resume.personal) & eduSchema.validate(resume.education) & infoSchema.validate(resume.info) & otherSchema.validate({languages: resume.personal, skills: resume.skills});
// }

const cValid = resume  => resumeSchema.validate(resume);

module.exports = cValid;