const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: {
    type: 'string',
    required: true,
    trim: true,
    maxLength: 25,
  },
  username: {
    type: 'string',
    required: true,
    trim: true,
    maxLength: 25,
    unique: true,
  },
  email: {
    type: 'string',
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: 'string',
    required: true,
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model('user', userSchema)