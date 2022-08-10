import Stalls from "../models/stalls.js";

const createStall = async (req, res) => {
  try {
    const stall = await Stalls.create(req.body);
    res.status(201).json(stall);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getStall = async (req, res) => {
  try {
    const { id: stallId } = req.params;
    const stall = await Stalls.findById({ _id: stallId });
    if(!stall){
        return res.status(404).json({msg:`stall not found with id ${stallId}` })
    }
    res.status(200).json(stall);
  } catch (error) {
    res.status(500).json(error)
  }
};

const getStalls = async(req, res) => {
  try {
    const stalls = await Stalls.find({})
    res.status(200).json(stalls)
  } catch (error) {
    res.status(500).json(error)
  }
};

const deleteStall = async(req, res) => {
  try {
    const {id:stallId}= req.params;
    await Stalls.findByIdAndDelete({ _id:stallId})
    if(!stall){
        return res.status(404).json({msg:`stall not found with id ${stallId}` })
    }
    res.status(200).send('deleted successfully')
  } catch (error) {
    res.status(500).json(error)
  }
};

const updateStall = async(req, res) => {
 try {
    const {id:stallId }= req.params;
    const stall = await Stalls.findByIdAndUpdate({_id:stallId},req.body,{new:true})
    if(!stall){
        return res.status(404).json({msg:`stall not found with id ${stallId}` })
    }
    res.status(200).json(stall)
 } catch (error) {
    res.status(500).json(error)
 }
};

export { createStall, getStall, getStalls, deleteStall, updateStall };
