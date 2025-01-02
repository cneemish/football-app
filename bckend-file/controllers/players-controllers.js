import mongoose from "mongoose";
import { PlayerSchema } from "../models/players-model";

const Player = mongoose.model('Player', PlayerSchema); // 

// Function to add new player to the database using async 

export const addNewPlayer = async (req, res)=>{
    let newPlayer = new Player(req.body);

    try {
        const player = await newPlayer.save();
        res.json(player);

    } catch (err){
        res.send(err);
    }
}

