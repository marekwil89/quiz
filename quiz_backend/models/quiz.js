const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new mongoose.Schema({
  name: {type: String, default: ''},
  category: {type: String, default: ''},
  questions: [
      {
          text: {type: String, default: ''},
          answers: [
              {
                  text: {type: String, default: ''},
                  correct: {type: Boolean, default: false}
              }
          ]
      }
  ],
  created_at: {type: Date, default: Date.now}
});

mongoose.model('quiz', quizSchema);