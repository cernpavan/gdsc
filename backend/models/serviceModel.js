import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  regNo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,  // Ensure it's a 10-digit number
  },
  roomNumber: {
    type: String,
    required: true
  },
  hostelType: {
    type: String,
    enum: ['mens', 'womens'],  // Specify 'mens' and 'womens' options for hostel type
    required: true
  },
  block: {
    type: String,
    required: true
  },
  scheduleFrom: {
    type: Date,
    required: true
  },
  scheduleTo: {
    type: Date,
    required: true
  },
  serviceType: {
    type: String,
    enum: ['cleaning', 'electricity', 'pestControl'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'inProgress', 'completed'],
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

// Check if the model already exists to avoid redefinition
const ServiceModel = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default ServiceModel;
