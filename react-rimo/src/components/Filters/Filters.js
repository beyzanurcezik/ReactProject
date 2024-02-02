import React from "react";
import Gender from '../Filters/Category/Gender'
import Species from '../Filters/Category/Species'
import Status from '../Filters/Category/Status'


const Filters = ({ setStatus, setPageNumber }) => {
  return (
  <div className="col-3">
    <div className="text-center fw-bold fs-4 mb-2">Filtreler</div>
    <div 
    style={{cursor: "pointer"}}
    className="text-center text-primary text-decoration-underline mb-4"
    >
      Filtreyi Temizle
      </div> 
      <div className="accordion" id="accordionPanelsStayOpenExample">
      <Status setPageNumber={setPageNumber}setStatus={setStatus} />
      <Species />
      <Gender />
      </div>
  </div>
  );
};

export default Filters;