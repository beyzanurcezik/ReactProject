import React from 'react';
import FilterBTN from "../FilterBTN";

const Species = () => {
  let species = [
    "İnsan",
     "Uzaylı",
     "İnsansı",
     "Poopybutthole",
     "Mitolojik",
     "Bilinmeyen",
     "Hayvan",
     "Hastalık",
     "Robot",
     "Cronenberg",
     "Gezegen",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Türler
        </button>
      </h2>
      <div
       id="collapseTwo" 
       className="accordion-collapse collapse"
       aria-labelledby="headingTwo"
       data-bs-parent="#accordionExample"
       >
        <div className="accordion-body accordion-body d-flex flex-wrap gap-3">
        {species.map((items, index) => (
          <FilterBTN key={index} name="species" index={index} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
