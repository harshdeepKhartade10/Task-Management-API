// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
// }, { timestamps: true });

// module.exports = mongoose.model('Task', taskSchema);

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String , required: true },
    description:{ type: String },
    status: {type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Task', TaskSchema);
