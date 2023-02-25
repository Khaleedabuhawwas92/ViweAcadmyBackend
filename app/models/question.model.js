module.exports = (mongoose) => {
   var schema = mongoose.Schema({
      Question: String,
      Title: String,
      totalPoint: Number,
      showPointsInBox: Boolean,
      differentPointsForeEachAnswer: Boolean,
      Answer1: String,
      Answer2: String,
      Answer3: String,
      Answer4: String,
      Answer5: String,
      Answer: String,
      questionText: String,
      definition: String,
      buttonName: String,
   });

   schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
   });

   const Question = mongoose.model("question", schema);
   return Question;
};
