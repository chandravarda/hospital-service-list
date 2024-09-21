import React, { useState } from "react";

const ServiceItem = ({ service, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedService, setUpdatedService] = useState({ ...service });

  // Handle input change for update
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedService({ ...updatedService, [name]: value });
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handle service update
  const handleUpdate = () => {
    onUpdate(service.id, updatedService);
    toggleEditMode();
  };

  return (
    <div className="service-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={updatedService.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            value={updatedService.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="department"
            value={updatedService.department}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <small>{service.department}</small>
          <button onClick={toggleEditMode}>Edit</button>
          <button onClick={() => onDelete(service.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
