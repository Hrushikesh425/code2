const { FeedbackSchema } = require("../models/Feedback.Schema");

const feedbackController = async(req, res) => {
    try{
        const {name,email,department,message} = req.body;
        const feedback = FeedbackSchema.create({
            name,
            email,
            department,
            message
        })

        if( !feedback ){
            console.log("----------- feedbackController.js: feedbackController: feedback is null---------");
            res.json({
                success:false,
                message:"Feedback not sent"
            })

        }

        res.status(200).json({
            success:true,
            message:"Feedback sent successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const getFeedbacks = async(req, res) => {
    try{
        const feedbacks = await FeedbackSchema.find({});
        if( !feedbacks ){
            console.log("----------- feedbackController.js: getFeedbacks: feedbacks is null---------");
            res.json({
                success:false,
                message:"Feedbacks not found"
            })

        }

        res.status(200).json({
            success:true,
            message:"Feedbacks found successfully",
            feedbacks
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}


module.exports = {
    feedbackController,
    getFeedbacks
}