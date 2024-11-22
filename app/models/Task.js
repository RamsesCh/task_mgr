import { Schema, model, models } from 'mongoose';


const taskModel = new Schema({
    description: {
        type: String,
        required: [true]
    }
}, {
    timestamps: true,
});

export default models.Task || model('Task', taskModel);

