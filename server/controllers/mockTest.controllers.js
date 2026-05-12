import mongoose from 'mongoose';
import MockTest from '../models/mockTest.model.js';
export const createMockTest = async (req, res, next)=>{
    const { title, category, questions, timeLimit } = req.body;

    if(!req.user.isAdmin){
        return next({statusCode: 403, message: "You are not authorized !!!"});
    };
    if(!title || !category || !questions || questions.length === 0 || !timeLimit){
        return next({statusCode: 400, message: "Please provide all details"});
    };

   try {
    const mocktest = await MockTest.create({
        title,
        category,
        questions,
        timeLimit
    });
    res.status(201).json({
        success: true,
        message: "mocktest created successfully",
        mocktest
    });
   } catch (error) {
    next(error)
   };
};

export const getAllMockTest = async (req, res, next) => {
    if(!req.user){
        return next({statusCode: 403, message: "Please Login, You are not authorized !!!"});
    };
    try {
        const mockTest = await MockTest.find()
        .select("-questions.correctAnswer")
        .lean();
        res.status(200).json({
            success: true,
            message: "All mockTest",
            totalMockTest: mockTest.length,
            mockTest
        })
    } catch (error) {
        next(error)
    }
};

export const getMockTestbyId = async (req, res, next) => {
    const mockTestId = req.params.id;

    if(!req.user){
        return next({statusCode: 403, message: "You are not authorized !!!"});
    };

    if(!mongoose.Types.ObjectId.isValid(mockTestId)){
        return next({statusCode: 403, message: "Invalid mocktest Id"});
    };

    try {
        const mocktest = await MockTest.findById(mockTestId)
        .select("-questions.correctAnswer")
        .lean();

        if(!mocktest){
            return next({statusCode: 403, message: "MockTest Not Found"});
        };

        res.status(200).json({
            success: true,
            message: "success",
            mocktest
        });
    } catch (error) {
        next(error)
    }
};