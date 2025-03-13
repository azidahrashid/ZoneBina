import React, { useState } from "react";
import { Dropdown} from "react-bootstrap";


const DropDownUI = ({ 
    currentValue = null, // No default value
    options = [], 
    onValueChange, 
    placeholder = "Select an option" // Add placeholder prop
  }) => {
    const [selectedValue, setSelectedValue] = useState(currentValue);
  
    const handleSelect = (value) => {
      setSelectedValue(value); // Update state when an option is selected
      if (onValueChange) {
        onValueChange(value); // Notify parent of the selected value
      }
    };
  
    return (
      <Dropdown>
        <Dropdown.Toggle
          className="btn-ghost tp-btn left-radius p-0 text-black"
          id="dropdown-toggle"
          aria-label="Dropdown menu"
           variant="none"
        >
          {selectedValue || placeholder} {/* Display placeholder if no value */}
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">
          {options.map((option) => (
            <Dropdown.Item
              key={option} // Ensure unique key for each option
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
  export default DropDownUI;