import { contect_data } from "../Model/Contect.js";

// import { contect_data } from "../Model/Contect.js";

//Create New Contect
export const contect = async (req, res) => {
    const { Name, Email, Phone, type } = req.body;

    if (Name == "" || Email == "" || Phone == "" || type == "")
        return res.json({
            message: "All fild is required",
            success: false
        });

    const saveData = await contect_data.create({
        Name,
        Email,
        Phone,
        type,
        userId: req.user
    });

    res.json({
        message: "Contect Save....",
        saveData,
        success: true
    });
};

// get all contect
export const getAllCOntect = async (req, res) => {
    const userContect = await contect_data.find();

    if (!userContect)
        return req.json({
            message: "user is not valid",
            success: false
        });

    res.json({
        message: "All contect is geting..",
        userContect,
        success: true
    });
};

// Contect By Id
export const getContectId = async (req, res) => {
    const id = req.params.id;

    const userId = await contect_data.findById(id);

    if (!userId)
        return res.json({
            message: "Id is not valid",
            success: false
        });

    res.json({
        message: "Id is match with display contect",
        userId,
        success: true
    });
};

//Update Contect By id
export const updateContectId = async (req, res) => {
    const id = req.params.id;

    const { Name, Email, Phone, type } = req.body;

    const updateContect = await contect_data.findByIdAndUpdate(id, {
        Name,
        Email,
        Phone,
        type
    }, { new: true });

    if (!updateContect)
        return res.json({
            message: "Id is not exist",
            success: false
        });

    res.json({
        message: "Contect Update successfully",
        updateContect,
        success: true
    });
};

// Delete Contect by id
export const deleteContectId = async (req, res) => {
    const id = req.params.id;

    const deleteContect = await contect_data.findByIdAndDelete(id);

    if (!deleteContect)
        return res.json({
            message: "Id is not exist",
            success: false
        });

    res.json({
        message: "Contect Delete successfully",
        success: true
    });
};

// userId by id

export const getContectUserId = async (req, res) => {
    const id = req.params.id;

    const user_id = await contect_data.find({ userId: id });

    if (!user_id)
        return res.json({
            message: "Id is not valid",
            success: false
        });

    res.json({
        message: "Id is match with display contect",
        user_id,
        success: true
    });
};

