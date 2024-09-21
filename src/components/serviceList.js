import React, { useState } from "react";
import ServiceItem from "./serviceItem";
import './service.css'

const ServiceList = () => {
  // State to store services
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Catarct Surgery",
      description: "Removing phaco an dreplacing with iol.",
      department: "Surgery in opthamal",
    },
    {
      id: 2,
      name: "Cardiology",
      description: "Cardiac treatment and heart surgery services.",
      department: "Cardiology",
    },
  ]);

  // State for the new service form
  const [newService, setNewService] = useState({ name: "", description: "", department: "" });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  // Add new service to the list
  const handleAddService = () => {
    const newId = services.length > 0 ? services[services.length - 1].id + 1 : 1;
    setServices([...services, { ...newService, id: newId }]);
    setNewService({ name: "", description: "", department: "" });  // Reset form
  };

  // Delete service by id
  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Update service details
  const handleUpdateService = (id, updatedService) => {
    setServices(services.map(service => service.id === id ? { ...service, ...updatedService } : service));
  };

  return (
    <div>
      <h2>Service List</h2>
      
      {/* New Service Form */}
      <div className="add-service-form">
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={newService.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Service Description"
          value={newService.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={newService.department}
          onChange={handleInputChange}
        />
        <button onClick={handleAddService}>Add Service</button>
      </div>

      {/* Render Service List */}
      <div className="service-list">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            onDelete={handleDeleteService}
            onUpdate={handleUpdateService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
