const jwt = require('jsonwebtoken');
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      password: { type: String, required: true,trim: true },
      isSuperAdmain: Boolean,
      isAdmain: Boolean,
      myCourses:Array,
      previousQuiz: [{ title: String }],
      noteQuiz: [Object],
      resetQuiz: [{ type: Number }],
      flashCard: [{ type: String }],
    },
    { timestamps: true }
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
   
    return object;
  });

  //   schema.method('token', function () {
  //     const token = jwt.sign(
  //       { _id: this._id, isAdmain: this.isAdmain },
  //       'privet'
  //     );
  //     return token;
  //   });

  const Users = mongoose.model('users', schema);
  return Users;
};
