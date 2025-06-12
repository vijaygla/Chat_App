import { Conversation } from '../models/conversationModel.js';
import { Message } from '../models/MessageModel.js';

export const sendMessage = async(req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;

        let gotConversation = await Conversation.findOne({
            participants: {$all : [senderId, receiverId]},
        })

        if(!gotConversation) {
            gotConversation = await Conversation.create({
            participants: [senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })

        if(newMessage) {
            gotConversation.messages.push(newMessage._id);
        }
        await gotConversation.save();

        return res.status(201).json({
            message: "message send successfully"
        })

        // socket io logic for real time chat changes


    } catch (error) {
        console.log(error);
    }
}


export const getMessage = async(req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await Conversation.findOne({
            participants: {$all : [senderId, receiverId]}
        }).populate("messages") // populate is mongo function which help to display the normal test instead of id or random number

        return res.status(201).json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}


