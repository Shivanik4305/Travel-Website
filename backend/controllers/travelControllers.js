const travel = require('../models/travelSchema')



exports.getAlltravel = async (req, res) => {
    try {
        const tr = await travel.find()
        res.status(200).json(tr)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


exports.getSpecifictravel = async (req,res) => {
    const { id } = req.params
    try {
        const tr = await travel.findById(id)
        res.status(200).json(tr);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}



exports.addtravel = async (req, res) => {
    const { Name,Email_id,Contact_no,Destination } = req.body
    try {
        const todo = await travel.create({Name,Email_id,Contact_no,Destination})
        res.status(201).json({ message: 'task has been created...' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}




exports.updatetravel = async (req, res) => {
    const { id } = req.params
    const {  Name,Email_id,Contact_no,Destination } = req.body
    try {
        const todo = await travel.findByIdAndUpdate(id, {  Name,Email_id,Contact_no,Destination})
        res.status(200).json({ message: 'Updated' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}






exports.deletetravel = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await tavel.findByIdAndDelete(id)
        res.status(200).json({ message: 'deleted 👫' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}