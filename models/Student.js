const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please add a full name'],
        
        maxlength: [40, 'Name cannot be more than 40 characters']
    },
    subject1: {
        type: String,
        required: true,
        maxlength: [100, 'Subject name cannot be more than 100 characters']
    },
    subject2: {
        type: String,
        
        maxlength: [100, 'Subject name cannot be more than 100 characters']
    },
    subject3: {
        type: String,
        
        maxlength: [100, 'Suject name cannot be more than 100 characters']
    },
})

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);