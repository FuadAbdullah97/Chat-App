// import Message from "../models/messageModel.js";
// import Conversation from "../models/conversationModel.js";
//
// export const sendMessage = async (req, res) => {
//     try {
//         const { message } = req.body;
//         const { id: receiverId } = req.params;
//         const senderId = req.user._id;
//
//         let conversation = await Conversation.findOne({
//             participants: { $all: [senderId, receiverId] },
//         });
//
//         if (!conversation) {
//             conversation = await Conversation.create({
//                 participants: [senderId, receiverId],
//             });
//         }
//
//         const newMessage = new Message({
//             senderId,
//             receiverId,
//             message,
//         });
//
//         await newMessage.save(); // Save the new message to the database
//
//         conversation.messages.push(newMessage._id); // Push the message ID to the conversation
//         await conversation.save(); // Save the updated conversation to the database
//
//         res.status(200).json(newMessage);
//     } catch (error) {
//         console.log("error in sendMessage controller", error.message);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };


import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage  = async (req, res) => {
    try {
        const {message} = req.body;
        const {id:receiverID} = req.params ;
        const senderID = req.user._id;
        let conversation = await Conversation.findOne({
            participants: {$all: [senderID,receiverID]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderID,receiverID],
            })
        }

        const newMessage = new Message({
            senderID,
            receiverID,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);

        }
        res.status(201).json(newMessage);


        //Both Function will work in parallel
        await Promise.all([conversation.save(),newMessage.save()]);
    }catch (error) {
        console.log("Error in sendMessage Controller", error.message);
        res.status(500).send("Error in sendMessage Controller");
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderID = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, userToChatId] },
        })
            .populate("messages")
            .populate("messages.senderId"); // Populate sender details for each message

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages Controller", error.message);
        res.status(500).json({ error: "Error in getMessages Controller" });
    }
};