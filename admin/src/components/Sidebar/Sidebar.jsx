import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/subadmin/add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Subadmin</p>
        </NavLink>
        {/* Uncomment other sidebar options as needed */}
        {/* <NavLink to="/services" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Services</p>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
