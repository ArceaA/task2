import React, { useState } from "react";
import "./Icons.css";

const Icons = () => {
  const [selectedField, setSelectedField] = useState(null);

  const fieldsData = {
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com",
    cumpleanos: "01/01/1990",
    direccion: "Calle Principal 123",
    telefono: "(123) 456-7890",
    contrasena: "********"
  };

  const handleIconClick = (field) => {
    setSelectedField(field);
  };

  return (
    <div>
      <div className="icons-container">
        {Object.keys(fieldsData).map((field) => (
          <div
            key={field}
            className={`icon ${selectedField === field && "selected"}`}
            onClick={() => handleIconClick(field)}
          >
            {field}
          </div>
        ))}
      </div>
      <div className="selected-field">
        {selectedField ? (
          <>
            <label>
              {selectedField.charAt(0).toUpperCase() + selectedField.slice(1)}
            </label>
            <div className="field-value">{fieldsData[selectedField]}</div>
          </>
        ) : (
          <p>Haz clic en un icono para ver los detalles</p>
        )}
      </div>
    </div>
  );
};

export default Icons;
