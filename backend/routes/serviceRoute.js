import express from "express";
import { 
    userService, 
    listServices, 
    deleteService, 
    addAdmin, 
    listAdmins, 
    deleteAdmin, 
    addSubAdmin, 
    listSubAdmins, 
    deleteSubAdmin 
} from '../controllers/ServiceController.js';

const serviceRouter = express.Router();

// Service complaint
serviceRouter.post("/services/raise", userService);
serviceRouter.get("/services/list", listServices);
serviceRouter.post('/services/remove', deleteService);

// Admin
serviceRouter.post('/admin/create', addAdmin);
serviceRouter.get('/admin/list', listAdmins);
serviceRouter.post('/admin/remove', deleteAdmin);

// Sub-admin
serviceRouter.post('/subadmins/add', addSubAdmin);
serviceRouter.get('/subadmins/list', listSubAdmins);
serviceRouter.post('/subadmins/remove', deleteSubAdmin);

export default serviceRouter;