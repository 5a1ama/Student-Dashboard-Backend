import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    email: 
    {
        type: String,
        required: true
    },
    password: 
    {
        type: String,
        required: true
    },
    name: 
    {
        type: String,
        required: true
    },
    phone: 
    {
        type: String,
        required: true
    },
});

export default mongoose.model('users', usersSchema);