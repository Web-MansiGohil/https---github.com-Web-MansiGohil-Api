import mongoose from 'mongoose';

const contectSchema = mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Phone: { type: String, required: true },
    type: { type: String, required: true },
    userId: { type: String, require: true },
    CreateAt: { type: Date, default: Date.now },
});

export const contect_data = mongoose.model("Contect", contectSchema);
