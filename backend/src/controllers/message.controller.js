import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import { v2 as cloudinary } from "cloudinary";

export const getUsersForSideBar = async (req, res) => {


    try {

        const loggedInUserId = req.user._id;
        const filteresUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteresUsers);

    } catch (error) {
        console.log("Error in  getUsersForSideBar", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }

}



export const getMessages = async (req, res) => {
    try {

        const { id: userToChatId } = req.params
        const myId = req.user._id;


        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: myId }
            ]
        })

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }

}


export const sendMessages = async (req, res) => {


    try {

        const { text, image } = req.body
        const { id: receiverId } = req.params;
        const sendMessages = req.user._id;
        let imageUrl;

        if (image) {
            // Upload base64 Image to cloudinary
            const uploadResponse = await cloudinary.Uploader.Upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        })


        await newMessage.save();




        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage Controller", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }


}
