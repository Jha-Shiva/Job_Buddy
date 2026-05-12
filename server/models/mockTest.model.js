import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question:{
        type: String,
        require: true,
        trim: true
    },
    options:{
        type: [String],
        require: true,
        trim: true
    },
    correctAnswer: {
        type: String,
        require: true,
        trim: true
    }
});

const mockTestSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    category:{
        type: String,
        require: true,
        trim: true
    },
    questions:{
        type: [questionSchema],
        require: true
    },
    timeLimit:{
        type: Number
    }
}, { timestamps: true })

const MockTest = mongoose.model("MockTest", mockTestSchema);

export default MockTest;