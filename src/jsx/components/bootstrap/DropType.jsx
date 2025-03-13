import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const DropType = ({ 
  currentValue = null,
  options = [], 
  onValueChange, 
  placeholder = "Select an option", 
  readOnly = false 
}) => {
  const [selectedValue, setSelectedValue] = useState(currentValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false); 
    if (onValueChange) {
      onValueChange(value);
    }
  };

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Dropdown show={isOpen} onToggle={(isOpen) => setIsOpen(isOpen)}>
      <Dropdown.Toggle as="div" id="dropdown-toggle" className="w-100 btn-dropType">
        <input
          type="text"
          className="form-control"
          value={selectedValue || ""}
          placeholder={currentValue || placeholder} 
          readOnly={readOnly}
          onClick={() => setIsOpen(!isOpen)}
          onChange={!readOnly ? handleInputChange : undefined} // Allow typing if readOnly is false
        />
      </Dropdown.Toggle>
      <Dropdown.Menu align="end">
        {options.map((option) => (
          <Dropdown.Item
            key={option}
            onClick={() => handleSelect(option)}
            active={selectedValue === option}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropType;
