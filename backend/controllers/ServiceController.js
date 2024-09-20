import AdminLoginModel from '../models/AdminLoginModel.js';
import serviceModel from "../models/serviceModel.js";
import SubAdminLoginModel from '../models/SubAdminLoginModel.js';

// To raise the service complaint
const userService = async (req, res) => {
    try {
        const { 
            regNo, 
            name, 
            phoneNumber, 
            roomNumber, 
            hostelType, 
            block, 
            scheduleFrom, 
            scheduleTo, 
            serviceType, 
            status, 
            description 
        } = req.body;

        // Validate required fields
        if (!regNo || !name || !phoneNumber || !roomNumber || !hostelType || !block || !scheduleFrom || !scheduleTo || !serviceType || !status || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new service request
        const newService = new serviceModel({
            regNo,
            name,
            phoneNumber,
            roomNumber,
            hostelType,
            block,
            scheduleFrom,
            scheduleTo,
            serviceType,
            status,
            description
        });

        // Save the service request to the database
        const savedService = await newService.save();

        // Respond with the saved service
        res.status(201).json(savedService);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

// To list all service complaints
const listServices = async (req, res) => {
    try {
        // Fetch all service requests from the database
        const services = await serviceModel.find();

        // If no services found
        if (services.length === 0) {
            return res.status(404).json({ message: "No services found" });
        }

        // Respond with the list of services
        res.status(200).json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

// To delete a service complaint by ID
const deleteService = async (req, res) => {
    try {
        const { id } = req.body; // Get ID from request body
        const deletedService = await serviceModel.findByIdAndDelete(id);
        if (!deletedService) {
            return res.status(404).json({ message: "Service not found" });
        }
        res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

// To add a new admin
const addAdmin = async (req, res) => {
    try {
      const admin = new AdminLoginModel(req.body);
      await admin.save();
      res.status(201).json({ message: 'Admin created successfully', admin });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

// To list all admins
const listAdmins = async (req, res) => {
    try {
      const admins = await AdminLoginModel.find();
      res.status(200).json(admins);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// To delete an admin by ID
const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.body; // Get ID from request body
        const admin = await AdminLoginModel.findByIdAndDelete(id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//subamdin functions

// To add a new sub-admin
const addSubAdmin = async (req, res) => {
    try {
        const subAdmin = new SubAdminLoginModel(req.body);
        await subAdmin.save();
        res.status(201).json({ message: 'Sub-admin created successfully', subAdmin });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// To list all sub-admins
const listSubAdmins = async (req, res) => {
    try {
        const subAdmins = await SubAdminLoginModel.find();
        res.status(200).json(subAdmins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// To delete a sub-admin by ID
const deleteSubAdmin = async (req, res) => {
    try {
        const { id } = req.body; // Get ID from request body
        const subAdmin = await SubAdminLoginModel.findByIdAndDelete(id);
        if (!subAdmin) {
            return res.status(404).json({ message: 'Sub-admin not found' });
        }
        res.status(200).json({ message: 'Sub-admin deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Export all functions
export { userService, listServices, deleteService, addAdmin, listAdmins, deleteAdmin, addSubAdmin, listSubAdmins, deleteSubAdmin };
