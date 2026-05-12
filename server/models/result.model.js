import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MockTest",
        require: true
    },
    score: {
        type: Number,
        require: true
    },
    totalQuestion: {
        type: Number,
        require: true
    },
    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId
            },
            selectedAnswer: {
                type: String
            },
            correctAnswer: {
                type: String
            }
        }
    ]
},{ timestamps: true });

const Result = mongoose.model("Result", resultSchema);

export default Result;